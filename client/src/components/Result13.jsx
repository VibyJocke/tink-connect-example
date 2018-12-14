import React from 'react';

export default class Result12Result extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));
    console.log(results)

    this.state = {
      youVsAverageSwede: results.youVsAverageSwede
    };
  }

  prettyPrintNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  normalize(num) {
    return Math.floor(num / 60); //TODO make a less naive normalizer
  }

  render() {
    var culture = this.normalize(this.state.youVsAverageSwede['Culture & Events']);
    var sweCulture = this.normalize(2394);
    var food = this.normalize(this.state.youVsAverageSwede['Restaurants & Café']);
    var sweFood = this.normalize(12324);
    var sports = this.normalize(this.state.youVsAverageSwede['Sports & Fitness']);
    var sweSports = this.normalize(2496);
    var vacay = this.normalize(this.state.youVsAverageSwede['Vacation']);
    var sweVacay = this.normalize(10980);

    return (
      <div className="section-result13">

        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC', fontSize: '90px' }}>You & the average Swede</h1>
              <h3 style={{ paddingTop: '20', paddingBottom: '100px' }}>Let's deep dive to your spending compared to the average Swede.</h3>
            </div>


            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={food} viewBox={"0 0 40 " + food} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + food + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(food * 60)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweFood} viewBox={"0 0 40 " + sweFood} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweFood + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(sweFood * 60)} kr</h5>
            </div>


            <div className="large-1 text-center large-offset-1 align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={vacay} viewBox={"0 0 40 " + vacay} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + vacay + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(vacay * 60)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweVacay} viewBox={"0 0 40 " + sweVacay} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweVacay + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(sweVacay * 60)} kr</h5>
            </div>


            <div className="large-1 text-center  large-offset-1 align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sports} viewBox={"0 0 40 " + sports} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sports + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(sports * 60)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweSports} viewBox={"0 0 40 " + sweSports} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweSports + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(sweSports * 60)} kr</h5>
            </div>


            <div className="large-1 text-center  large-offset-1 align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={culture} viewBox={"0 0 40 " + culture} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + culture + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(culture * 60)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweCulture} viewBox={"0 0 40 " + sweCulture} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweCulture + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(sweCulture * 60)} kr</h5>
            </div>


            <div className="large-2 text-center cell">
              <h4 style={{ paddingTop: '20px' }} className="label-category">Restaurants & Cafés</h4>
            </div>

            <div className="large-2 large-offset-1 text-center cell">
              <h4 style={{ paddingTop: '20px' }} className="label-category">Vacation / Holidays</h4>
            </div>

            <div className="large-2 large-offset-1 text-center cell">
              <h4 style={{ paddingTop: '20px' }} className="label-category">Sports & Activities</h4>
            </div>

            <div className="large-2 large-offset-1 text-center cell">
              <h4 style={{ paddingTop: '20px' }} className="label-category">Culture & Entertainment</h4>
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
