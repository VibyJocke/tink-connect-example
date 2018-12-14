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
    return (
      <div className="section-result13">

        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{color: '#F9BFAC', fontSize: '90px'}}>You & the average Swede</h1>
              <h3 style={{paddingTop: '20', paddingBottom: '100px'}}>Let's deep dive to your spending compared to the average Swede.</h3>
            </div>


            <div className="large-1 text-center align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>You</h4>
              <h5>X kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>Swede</h4>
              <h5>12 324 kr</h5>
            </div>



            <div className="large-1 text-center large-offset-1 align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>You</h4>
              <h5>X kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>Swede</h4>
              <h5>10 980 kr</h5>
            </div>



            <div className="large-1 text-center  large-offset-1 align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>You</h4>
              <h5>X kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>Swede</h4>
              <h5>2 496 kr</h5>
            </div>



            <div className="large-1 text-center  large-offset-1 align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>You</h4>
              <h5>X kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <h4 style={{paddingTop: '20px'}}>Swede</h4>
              <h5>2 304 kr</h5>
            </div>



            <div className="large-2 text-center cell">
              <h4 style={{paddingTop: '20px'}} className="label-category">Restaurants & Cafés</h4>
            </div>

            <div className="large-2 large-offset-1 text-center cell">
              <h4 style={{paddingTop: '20px'}} className="label-category">Vacation / Holidays</h4>
            </div>

            <div className="large-2 large-offset-1 text-center cell">
              <h4 style={{paddingTop: '20px'}} className="label-category">Sports & Activities</h4>
            </div>

            <div className="large-2 large-offset-1 text-center cell">
              <h4 style={{paddingTop: '20px'}} className="label-category">Culture & Entertainment</h4>
            </div>


            <div className="large-12 text-right cell">
              <a className="button large" href="result-5">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
