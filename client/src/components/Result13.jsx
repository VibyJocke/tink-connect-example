import React from 'react';

export default class Result12Result extends React.Component {
  constructor(props) {
    super(props);

    var results = JSON.parse(localStorage.getItem('result'));
    var res2 = JSON.parse(localStorage.getItem('result'));
    console.log(results)

    this.state = {
      min: 5,
      max: 5,
      sweCulture: 2394,
      sweFood: 12324,
      sweSports: 2496,
      sweVacay: 10980,
      youVsAverageSwede: results.youVsAverageSwede,
      normalizedVsAvgSwede: res2.youVsAverageSwede
    };
    // console.log(this.state);
    this.findMinMax();
    console.log(this.state);
    this.normalizeAvgs();
    // console.log(this.state);
  }

  prettyPrintNumber(x) {
    return Math.floor(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  findMinMax() {
    var arr = [
      this.state.sweCulture,
      this.state.youVsAverageSwede['Culture & Events'],
      this.state.sweFood,
      this.state.youVsAverageSwede['Restaurants & Café'],
      this.state.sweSports,
      this.state.youVsAverageSwede['Sports & Fitness'],
      this.state.sweVacay,
      this.state.youVsAverageSwede['Vacation'],
    ];
    this.state.min = Math.min(...arr);
    this.state.max = Math.max(...arr);
  }

  normalizeAvgs() {
    this.state.normalizedVsAvgSwede['Culture & Events'] = this.normalize(this.state.youVsAverageSwede['Culture & Events']);
    this.state.normalizedVsAvgSwede['Restaurants & Café'] = this.normalize(this.state.youVsAverageSwede['Restaurants & Café']);
    this.state.normalizedVsAvgSwede['Sports & Fitness'] = this.normalize(this.state.youVsAverageSwede['Sports & Fitness']);
    this.state.normalizedVsAvgSwede['Vacation'] = this.normalize(this.state.youVsAverageSwede['Vacation']);
  }

  normalize(num) {
    return ((num - this.state.min) / (this.state.max - this.state.min)) * 250;
  }

  render() {
    var culture = this.state.youVsAverageSwede['Culture & Events'];
    var normCulture = this.state.normalizedVsAvgSwede['Culture & Events'];
    var sweCulture = this.normalize(this.state.sweCulture);
    var food = this.state.youVsAverageSwede['Restaurants & Café'];
    var normFood = this.state.normalizedVsAvgSwede['Restaurants & Café'];
    var sweFood = this.normalize(this.state.sweFood);
    var sports = this.state.youVsAverageSwede['Sports & Fitness'];
    var normSports = this.state.normalizedVsAvgSwede['Sports & Fitness'];
    var sweSports = this.normalize(this.state.sweSports);
    var vacay = this.state.youVsAverageSwede['Vacation'];
    var normVacay = this.state.normalizedVsAvgSwede['Vacation'];
    var sweVacay = this.normalize(this.state.sweVacay);

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
                <svg height={normFood} viewBox={"0 0 40 " + normFood} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + normFood + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(food)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweFood} viewBox={"0 0 40 " + sweFood} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweFood + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(this.state.sweFood)} kr</h5>
            </div>


            <div className="large-1 text-center large-offset-1 align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={normVacay} viewBox={"0 0 40 " + normVacay} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + normVacay + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(vacay)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweVacay} viewBox={"0 0 40 " + sweVacay} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweVacay + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(this.state.sweVacay)} kr</h5>
            </div>


            <div className="large-1 text-center  large-offset-1 align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={normSports} viewBox={"0 0 40 " + normSports} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + normSports + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(sports)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweSports} viewBox={"0 0 40 " + sweSports} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweSports + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(this.state.sweSports)} kr</h5>
            </div>


            <div className="large-1 text-center  large-offset-1 align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={normCulture} viewBox={"0 0 40 " + normCulture} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + normCulture + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>You</h4>
              <h5>{this.prettyPrintNumber(culture)} kr</h5>
            </div>

            <div className="large-1 text-center align-self-bottom cell">
              <div className="large-1 align-self-bottom cell">
                <svg height={sweCulture} viewBox={"0 0 40 " + sweCulture} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + sweCulture + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
              </div>
              <h4 style={{ paddingTop: '20px' }}>Swede</h4>
              <h5>{this.prettyPrintNumber(this.state.sweCulture)} kr</h5>
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
              <a className="button large" href="end">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
