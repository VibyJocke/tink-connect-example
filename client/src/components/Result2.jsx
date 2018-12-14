import React from 'react';

export default class Result2 extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));

    console.log(results);

    this.state = {
      largestTransaction: Math.abs(results.largestTransaction.amount)
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
              <h1 style={{fontSize: '17rem'}}>{Math.floor(this.state.largestTransaction)} kr</h1>
              <p>You purchased something really expensive. Nice. It’s quality over quantity.</p>
              <a className="button large" href="result-3">Continue</a>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
