import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { formatDate, formatNumber } from '../utils/Format';

class Main extends React.Component {
  state = {
    code: '',
    token: '',
    data: undefined,
  };

  results = {
    topThreeVendors: {},
    largestTransaction: 0,
    numberOfTransactions: 0,
    totalSpend: 0,
    topCategory: {},
    transactionsPerMonth: {},
    alcoholSpend: 0
  };

  monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  topThreeResult = {};
  topCategoryResult = {};

  getData = async (code) => {
    const response = await fetch('/code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code }),
    });

    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    const code = new URLSearchParams(this.props.location.search).get('code');
    const error = new URLSearchParams(this.props.location.search).get('error');
    const message = new URLSearchParams(this.props.location.search).get('message');

    this.setState({ code: code, error: error, errorMessage: message });

    if (code) {
      this.getData(code)
        .then(res => this.setState({ data: res }))
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
          <div style={{ margin: '30px' }}>
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
          <div style={{ margin: '30px' }}>
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
          <div style={{ margin: '30px' }}>
            {portfolios}
          </div>
        </div>
      );
    }
  }

  updateLargestTransaction(transaction) {
    if (!this.results.largestTransaction
      || Math.abs(this.results.largestTransaction.amount) < Math.abs(transaction.amount)) {
      this.results.largestTransaction = transaction;
    }
  }

  getCategoryForTransaction(transaction, categoryData) {
    return categoryData.find(category => category.id === transaction.categoryId);
  }

  updateSpendingPerMonth(transaction) {
    var transactionAmount = Math.abs(transaction.amount);
    var date = new Date(transaction.date);
    this.results.transactionsPerMonth[this.monthNames[date.getMonth()]] ?
      this.results.transactionsPerMonth[this.monthNames[date.getMonth()]] += transactionAmount :
      this.results.transactionsPerMonth[this.monthNames[date.getMonth()]] = transactionAmount;
  }

  isNonBoringTransaction(transaction, category) {
    return category.type !== "INCOME"
      && category.code !== "expenses:home.mortgage"
      && category.code !== "expenses:home.rent"
      && category.code !== "expenses:home.utilities"
      && category.code !== "exponses:home.incurences-fees"
      && category.code.indexOf("transfers") === -1
      && !transaction.description.match(/.*(save|spar).*/i);
  }

  isExpense(transaction, category) {
    return category.type !== "EXPENSE";
  }

  isDrinkingRelatedTransaction(transaction, category) {
    return category.code === "exponses:food.bars"
      || transaction.description.match(/.*(systembolaget).*/i);
  }

  updateTopCategory(transaction, category) {
    var transactionAmount = Math.abs(transaction.amount);
    var categoryName = category.primaryName;
    if (this.isDrinkingRelatedTransaction(transaction, category)) {
      categoryName = "Drinking";
    }
    if (categoryName === 'Home Improvements' || categoryName === 'Household & Services') {
        categoryName = 'Home'
    }
    if (categoryName === 'Other') {
        return;
    }

    this.topCategoryResult[categoryName] ?
      this.topCategoryResult[categoryName] += transactionAmount
      : this.topCategoryResult[categoryName] = transactionAmount;

     if (categoryName === 'Drinking') {
        this.results.alcoholSpend = this.topCategoryResult[categoryName];
     }

    var sortable = [];
    for (var spot in this.topCategoryResult) {
      sortable.push([spot, this.topCategoryResult[spot]]);
    }

    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });
    for (var i = 0; sortable.length > 3 && i < 3; ++i) {
      this.results.topCategory[this.indexToString(i)] = { category: sortable[i][0], amount: sortable[i][1] };
    }
  }

  updateTopThreeVendors(transaction, category) {
    this.topThreeResult[transaction.description] ?
      this.topThreeResult[transaction.description] += 1
      : this.topThreeResult[transaction.description] = 1;

    var sortable = [];
    for (var spot in this.topThreeResult) {
      sortable.push([spot, this.topThreeResult[spot]]);
    }

    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });

    for (var i = 0; sortable.length > 3 && i < 3; ++i) {
      this.results.topThreeVendors[this.indexToString(i)] = { "spot": sortable[i][0], "count": sortable[i][1] };
    }
  }

  indexToString(index) {
    switch (index) {
      case 0:
        return "first";
      case 1:
        return "second";
      case 2:
        return "third";
      default:
        return "unknown";
    }
  }

  calculateStatistics(transactionData, categoryData) {
    for (var i = 0; i < transactionData.length; ++i) {
      var transaction = transactionData[i].transaction;
      var transactionCategory = this.getCategoryForTransaction(transaction, categoryData);
      if (this.isNonBoringTransaction(transaction, transactionCategory)) {
        this.updateLargestTransaction(transaction);
        this.updateTopThreeVendors(transaction);
        this.updateTotalSpend(transaction);
        this.updateTopCategory(transaction, transactionCategory);
        this.updateNumberOfTransactions();
      }
      if (this.isExpense(transaction, transactionCategory)) {
        this.updateSpendingPerMonth(transaction);
      }
    }
  }

  updateNumberOfTransactions() {
    this.results.numberOfTransactions += 1;
  }

  updateTotalSpend(transaction) {
    this.results.totalSpend += transaction.amount;
  }

  getTransactionDataFromApiResponse(currency) {
    const data = this.state.data;
    if (!data || !data.response || !data.response.transactionData || !data.response.categoryData) {
      return undefined;
    } else if (data.response.transactionData.count === 0) {
      return (
        <div>
          <h4 className="pink">Some of your transactions</h4>
          <div style={{ margin: '30px' }}>
            <p>You don’t seem to have any transactions.</p>
          </div>
        </div>
      );
    } else {
      var categoryData = data.response.categoryData;
      var transactionData = data.response.transactionData.results;
      this.calculateStatistics(transactionData, categoryData);
      localStorage.setItem('result', JSON.stringify(this.results));
      this.props.history.push('result-1')
    }
  }

  getContent() {
    const currency = this.state.data ? this.state.data.response.userData.profile.currency : '';
    const transactionList = this.getTransactionDataFromApiResponse(currency);

    if (transactionList) {
      return '';
    } else if (this.state.error) {
      return (
        <div className="grid-x grid-padding-x">

          <div className="large-12 text-center cell">
            <h3 style={{ paddingTop: '20px' }}>Failed to fetch you data <span role="img">😞</span></h3>
          </div>

          <Button style={{ margin: '30px' }} href="/">Take me back</Button>

        </div>
      );
    } else {
      return (
        <div className="grid-x grid-padding-x">

          <div className="large-12 text-center cell">
            <img alt="" src="hands.gif" width="500px" />
          </div>

          <div className="large-12 text-center cell">
            <h1 style={{ opacity: '0.2' }}>Loading...</h1>
            <h3 style={{ paddingTop: '20px' }}>Please wait a moment while we generate your results.</h3>
          </div>

        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.getContent()}
      </div>
    );
  }
}

export default Main;
