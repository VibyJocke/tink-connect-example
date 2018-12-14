import React from 'react';

export default class Result12Result extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));
    console.log(results)

    this.state = {
      accountBalance: results.accountBalance
    };
  }

  prettyPrintNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  render() {
    var numYous = Math.floor(987596680000 / this.state.accountBalance);

    return (
      <div className="section-result12">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{color: '#F9BFAC'}}>{this.prettyPrintNumber(Math.floor(numYous / 1000) * 1000)} of YOU would suffice.</h1>
              <h3 style={{paddingTop: '20px'}}>Anyhow... Let's compare you to some Swedes...</h3>
            </div>

            <div className="large-12 distance cell">
              <a className="button large" href="result-5">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
