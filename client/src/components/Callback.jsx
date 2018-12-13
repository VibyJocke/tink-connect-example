import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import Header from './Header';
import { formatDate, formatNumber } from '../utils/Format';
import Spinner from './Spinner';

class Main extends React.Component {
  state = {
    code: '',
    token: '',
    data: undefined,
  };

  getData = async (code) => {
    const response = await fetch('/code', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({code: code}),
    });

    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    const code = new URLSearchParams(this.props.location.search).get('code');
    const error = new URLSearchParams(this.props.location.search).get('error');
    const message = new URLSearchParams(this.props.location.search).get('message');

    this.setState({code: code, error: error, errorMessage: message});

    if (code) {
      this.getData(code)
        .then(res => this.setState({data: res}))
        .catch(err => console.log(err));
    }
  }

  getAccountsListFromApiResponse(currency) {
    const data = this.state.data;
    if (!data || !data.response || !data.response.accountData || !data.response.accountData.accounts) {
      return undefined;
    } else {
      const accounts = data.response.accountData.accounts.map(account => {
        return (
          <p key={account.id}><b>{account.name}</b><br />
            {formatNumber(account.balance)} {currency}
          </p>
        );
      });

      return (
        <div>
          <h4 className="pink">Account data</h4>
          <div style={{margin: '30px'}}>
            {accounts}
          </div>
        </div>
      );
    }
  }

  getInvestmentDataFromApiResponse() {
    const data = this.state.data;
    if (!data || !data.response || !data.response.investmentData || !data.response.investmentData.portfolios) {
      return undefined;
    } else if (data.response.investmentData.portfolios.length === 0) {
      return (
        <div>
          <h4 className="pink">Investment data</h4>
          <div style={{margin: '30px'}}>
            <p>You don’t seem to have any investments.</p>
          </div>
        </div>
      );
    } else {
      const portfolios = data.response.investmentData.portfolios.map(portfolio => {
        const instruments = portfolio.instruments.map(instrument => {
          return (
            <p key={instrument.id}><b>{instrument.name}</b><br />
              Price: {formatNumber(instrument.price)} {instrument.currency}<br />
              Quantity: {instrument.quantity}<br />
              Profit: {formatNumber(instrument.profit)} {instrument.currency}
            </p>
          );
        });

        return (
          <div key={portfolio.id}>
            <h5>Portfolio ({portfolio.type})</h5>
            {instruments}
          </div>
        );
      });

      return (
        <div>
          <h4 className="pink">Investment data</h4>
          <div style={{margin: '30px'}}>
            {portfolios}
          </div>
        </div>
      );
    }
  }

  getBiggestTransaction(transactionData, categoryData, currency) {
    var biggestTransaction = {amount: 0};
    for (var i = 0; i < transactionData.length; ++i) {
      var transaction = transactionData[i].transaction;
      var transactionCategory = this.getCategoryForTransaction(transaction, categoryData);
      if (transactionCategory.type === "INCOME"
          || transactionCategory.code === "expenses:home.mortgage"
          || transaction.description.match(/.*(save|spar).*/i)) {
        continue;
      }
      if (biggestTransaction.amount === 0
          || Math.abs(biggestTransaction.amount) < Math.abs(transaction.amount)) {
        biggestTransaction = transaction
      }
    }

    return biggestTransaction;
  }

  getCategoryForTransaction(transaction, categoryData) {
    return categoryData.find(category => category.id === transaction.categoryId);
  }

  getTopThreeSpendingSpot(transactionData, categoryData) {
    var result = {};
    for (var i = 0; i < transactionData.length; ++i) {
      var transaction = transactionData[i].transaction;
      var transactionCategory = this.getCategoryForTransaction(transaction, categoryData);
      if (transactionCategory.type === "INCOME"
          || transactionCategory.code === "expenses:home.mortgage"
          || transaction.description.match(/.*(save|spar).*/i)) {
        continue;
      }
      result[transaction.description] ? result[transaction.description] += 1 : result[transaction.description] = 1;
    }

    var sortable = [];
    for (var spot in result) {
        sortable.push([spot, result[spot]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    var res = {};
    for (var i = 0; sortable.length > 3 && i < 3; ++i) {
       res[this.indexToString(i)] = {"spot": sortable[i][0], "count": sortable[i][1]};
    }
    return res;
  }

  indexToString(index) {
    switch (index) {
      case 0:
        return "first";
      case 1:
        return "second";
      case 2:
        return "third";
    }
    return "unknown";
  }

  getTransactionDataFromApiResponse(currency) {
    const data = this.state.data;
    if (!data || !data.response || !data.response.transactionData || !data.response.categoryData) {
      return undefined;
    } else if (data.response.transactionData.count === 0) {
      return (
        <div>
          <h4 className="pink">Some of your transactions</h4>
          <div style={{margin: '30px'}}>
            <p>You don’t seem to have any transactions.</p>
          </div>
        </div>
      );
    } else {
      var categoryData = data.response.categoryData;
      var transactionData = data.response.transactionData.results;
      var biggestTransaction = this.getBiggestTransaction(transactionData, categoryData, currency);
      var topSpots = this.getTopThreeSpendingSpot(transactionData, categoryData);
      if (biggestTransaction.amount === 0 || topSpots.length === 0) {
        return (
          <div>
            <h4>Oh noes...</h4><br />
          </div>
        );
      }
      return (
        <div>
          <h4 className="pink">Your biggest transaction</h4>
          <div style={{margin: '30px'}}>
            <b>{formatDate(new Date(biggestTransaction.date))}</b><br />
            {biggestTransaction.description}<br />
            {formatNumber(biggestTransaction.amount)} {currency}<br />
            {this.getCategoryForTransaction(biggestTransaction, categoryData).primaryName}<br />
          </div>
          <div>
            <h4>Top spending spots</h4>
            <h5>First</h5>
            <b>{topSpots["first"].spot}</b><br />
            <b>{topSpots["first"].count} transactions.</b><br />
            <h5>Second</h5>
            <b>{topSpots["second"].spot}</b><br />
            <b>{topSpots["second"].count} transactions.</b><br />
            <h5>Third</h5>
            <b>{topSpots["third"].spot}</b><br />
            <b>{topSpots["third"].count} transactions.</b><br />
          </div>
        </div>
      );
    }
  }

  getContent() {
    const currency = this.state.data ? this.state.data.response.userData.profile.currency : '';
    const transactionList = this.getTransactionDataFromApiResponse(currency);

    if (transactionList) {
      return (
        <Row>
          <Col lg={{size: 6, offset: 3}}>
            {transactionList}
          </Col>
        </Row>
      );
    } else if (this.state.error) {
      return '';
    } else {
      return <Spinner width='50px' image={'./spinner.png'} />;
    }

  }

  render() {

    let header = '';

    if (!this.state.error) {
      header = <Header text="Your bank was successfully connected!" emoji="tada" />;
    } else {
      header = <Header text="Something went wrong" emoji="sad" />;
    }
    const content = this.getContent();

    return (
      <div>
        {header}

        {content}

        <p style={{fontSize: '18px', paddingTop: '40px'}}>{this.state.errorMessage}</p>
        <Button style={{margin: '30px'}} href="/">Take me back</Button>

      </div>

    );
  }
}

export default Main;
