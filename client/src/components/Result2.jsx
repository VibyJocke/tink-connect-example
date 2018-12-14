import React from 'react';

export default class Result2 extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));

    console.log(results);

    this.state = {
      largestTransaction: Math.abs(results.largestTransaction.amount),
      transaction: results.largestTransaction,
    };
  }

  prettyPrintNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  render() {
    var transaction = this.state.transaction;
    var date = new Date(transaction.originalDate).toUTCString().replace(":00:00 GMT", "PM");
    var largestPurchase = this.prettyPrintNumber(Math.floor(this.state.largestTransaction));
    return (
      <div className="section-result2">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ opacity: '0.2' }}>Highest transaction</h1>
            </div>

            <div className="large-8 distance cell">
              <h1 style={{fontSize: '14rem'}}>{largestPurchase} kr</h1>
              <p>You did purchase something really expensive. Nice. It’s quality over quantity.</p>
              <a className="button large" href="result-3">Continue</a>
            </div>

            <div className="large-4 distance3 cell">
              <div className="card-dark">
                <p>You made the purchase of <strong>{largestPurchase} kr</strong> at <strong>{transaction.formattedDescription}</strong> on <strong>{date}</strong>.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
