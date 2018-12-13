import React from 'react';

export default class Result6 extends React.Component {
  constructor(props) {
    super(props);

    var result = JSON.parse(localStorage.getItem('result')).transactionsPerMonth;
    console.log(result.transactionsPerMonth)

    const noData = 5;

    this.state = {
        months: [
            result['January'] ? this.normalize(result['January']) : noData,
            result['February'] ? this.normalize(result['February']) : noData,
            result['Mars'] ? this.normalize(result['Mars']) : noData,
            result['April'] ? this.normalize(result['April']) : noData,
            result['May'] ? this.normalize(result['May']) : noData,
            result['June'] ? this.normalize(result['June']) : noData,
            result['July'] ? this.normalize(result['July']) : noData,
            result['August'] ? this.normalize(result['August']) : noData,
            result['September'] ? this.normalize(result['September']) : noData,
            result['October'] ? this.normalize(result['October']) : noData,
            result['November'] ? this.normalize(result['November']) : noData,
            result['December'] ? this.normalize(result['December']) : noData,
        ]
    };
  }

  normalize(num) {
    return num / 250; //TODO make a less naive normalizer
  }

  render() {
    var normalizedMonth = Array.from(this.state.months.values())

    var bars2 = normalizedMonth.map((size) =>
      <div className="large-1 align-self-bottom cell">
        <svg height={size} viewBox={"0 0 40 " + size} width="40" xmlns="http://www.w3.org/2000/svg"><path d={"m0 0h40v" + size + "h-40z"} fill="#f89572" fillRule="evenodd" /></svg>
      </div>
    );

    return (
      <div className="section-result6">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC' }}>Monthly expenses</h1>
              <h3 style={{ paddingTop: '20px' }}>This is how you spent your money over the months</h3>
            </div>

            {bars2}

            <div className="large-12 text-right cell">
              <a className="button secondary large" href="result-7">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
