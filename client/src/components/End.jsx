import React from 'react';

export default class End extends React.Component {
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
    var accountBalance = this.state.accountBalance;
    var burritos = Math.floor(accountBalance / 60);
    var grona = Math.floor(accountBalance / 400);
    var islands = (accountBalance / 370000).toFixed(2);
    var butler = Math.floor(accountBalance / 1600);
    var tink = (accountBalance / 5400000).toFixed(2);
    return (
      <div className="section-result-end">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F89572' }}>Thanks for 2018!</h1>
              <h2 style={{ paddingTop: '20px', color: '#000' }}>Why don't you treat yourself in 2019?</h2>
              <h3 style={{ paddingTop: '20px', color: '#000' }}>With the money you have, you could get {burritos} burritos 🌯, go to Gröna Lund {grona} times 🎪, buy {islands} private Islands in Maine 🏝, hire a private butler for {butler} hours 🤵, or probably most importantly: buy {tink} domains called "tink.com" 💻 </h3>
            </div>

            <div className="large-12 distance cell">
              <a className="button large" href="result-1.html">Restart</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
