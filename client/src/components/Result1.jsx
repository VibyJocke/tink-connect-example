import React from 'react';

export default class Result1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numTransactions: 4123
    };
  }

  render() {
    return (
      <div className="section-result1">

        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ opacity: '0.2' }}>Transactions</h1>
            </div>

            <div className="large-6 cell">
              <img src="result-1.png" alt="" style={{ paddingTop: '150px' }} />
            </div>

            <div className="large-6 distance cell">
              <h1 style={{ fontSize: '17rem' }}>{this.state.numTransactions}</h1>
              <p>The amount of transactions you made during 2018. That’s an average of <strong>{this.state.numTransactions / 365} per day</strong>. Impressive!</p>
              <a className="button large" href="result-2">Continue</a>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
