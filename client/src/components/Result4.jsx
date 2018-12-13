import React from 'react';

export default class Result4 extends React.Component {
  constructor(props) {
    super(props);

    var result = JSON.parse(localStorage.getItem('result'))

    this.state = {
      topVendor: result.topThreeVendors.first
    };
  }

  render() {
    return (
      <div className="section-result2">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ opacity: '0.2' }}>Quiz</h1>
            </div>

            <div className="large-12 distance text-center cell">
              <h2>Can you guess how many transactions you made at {this.state.topVendor.spot}?</h2>
            </div>

            <div className="large-2 large-offset-3  text-center cell">
              <a className="button large hollow" href="result-5">{this.state.topVendor.count}</a>
            </div>

            <div className="large-2  text-center cell">
              <a className="button large hollow" href="result-5">{((this.state.topVendor.count / (Math.random() + 1) - 1)).toFixed(0)}</a>
            </div>

            <div className="large-2  text-center cell">
              <a className="button large hollow" href="result-5">{((this.state.topVendor.count * (Math.random() + 1)) + 1).toFixed(0)}</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
