import React from 'react';

export default class Result1 extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));

    this.state = {
      largestTransaction: results.largestTransaction.amount
    };
  }

  render() {
    return (
      <div className="section-result2">

        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{opacity: '0.2'}}>Highest transaction</h1>
            </div>

            <div className="large-12 distance cell">
              <h1 style={{fontSize: '17rem'}}>{this.state.largestTransaction}</h1>
              <p>You purchased something really expensive. Nice. It’s quality over quantity.</p>
              <a className="button large" href="result-3">Continue</a>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
