import React from 'react';

export default class Result10 extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));
    console.log(results)

    this.state = {
        alcoholSpend: results.alcoholSpend
    };
  }

  render() {
  const alcoholAvg = 3804;
  const alcoholSpend = this.state.alcoholSpend;
  var messageTitle = "You spend " + alcoholSpend > alcoholAvg ? "MORE!" : "LESS!";
  var messageBody =
    "Seems like you "
    + (alcoholSpend > alcoholAvg
    ? "enjoy socializing in bars more than"
    : "fancy something else to drink compared to")
    + " the average Swede, cool!";

    return (
      <div className="section-result10">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC' }}>{messageTitle}</h1>
              <h3 style={{ paddingTop: '20px' }}>{messageBody}</h3>
              <h3>Because you spend...</h3>
            </div>

            <div className="large-12 distance cell">
              <h1>{Math.floor(this.state.alcoholSpend)} kr on alcohol</h1>
              <a className="button large" href="result-11">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
