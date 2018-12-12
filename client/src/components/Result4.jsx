import React from 'react';

export default class Result1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numTransactions: 43
    };
  }

  render() {
    return (
      <div className="section-result2">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{opacity: '0.2'}}>Quiz</h1>
            </div>

            <div className="large-12 distance text-center cell">
              <h2>Can you guess how many transactions you made at McDonalds?</h2>
            </div>

            <div className="large-2 large-offset-3  text-center cell">
              <a className="button large hollow" href="result-5">{this.state.numTransactions}</a>
            </div>

            <div className="large-2  text-center cell">
              <a className="button large hollow" href="result-5">{this.state.numTransactions / 2}</a>
            </div>

            <div className="large-2  text-center cell">
              <a className="button large hollow" href="result-5">{this.state.numTransactions * 2}</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
