import React from 'react';

export default class Result11Result extends React.Component {
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
    var canSplit = this.state.accountBalance >= (2355000 / 2);

    return (
      <div className="section-result11">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              {!canSplit && <div>
                <h1 style={{ color: '#F9BFAC' }}>Nope!</h1>
                <h3 style={{ paddingTop: '20px' }}>Unfortunately you wouldn't be able to keep up with Mr. Sheen.</h3>
              </div>
              }

              {canSplit && <div>
                <h1 style={{ color: '#F9BFAC' }}>Yes!</h1>
                <h3 style={{ paddingTop: '20px' }}>You are eligible to join Mr. Sheen on a good night of partying - enjoying the finer things in life! </h3>
              </div>
              }
              <h3>He can spend 2 355 000 kr on a decent night of partying.</h3>
              <h3>(Because you have a total worth of {this.prettyPrintNumber(Math.floor(this.state.accountBalance))} kr)</h3>
            </div>

            <div className="large-12 distance cell">
              <a className="button large" href="result-12-opts">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
