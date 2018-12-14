import React from 'react';

export default class Result12Opts extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));
    console.log(results)

    this.state = {
      accountBalance: results.accountBalance
    };
  }

  render() {
    var numYous = Math.floor(987596680000 / this.state.accountBalance);

    return (
      <div className="section-result12">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC' }}>You and Jeff Bezos</h1>
              <h3 style={{ paddingTop: '20px' }}>The Amazon CEO is the world's richest person.</h3>
              <h3>His net worth is around 987 596 680 000 kr.</h3>
              <h3>Do you know how many YOU it would take to be richer than him?</h3>
            </div>

            <div className="large-12 distance cell">
              <a className="button large hollow" href="result-12-res">{Math.floor(numYous / 1000) * 1000}</a>
              <a className="button large hollow" style={{ marginLeft: '50px' }} href="result-12-res">{Math.floor((numYous * 1.32) / 1000) * 1000}</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
