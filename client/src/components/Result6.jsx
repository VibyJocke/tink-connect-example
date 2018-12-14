import React from 'react';

export default class Result6 extends React.Component {
  constructor(props) {
    super(props);

    var result = JSON.parse(localStorage.getItem('result')).transactionsPerMonth;
    console.log(result.transactionsPerMonth)

    const noData = 5;

    this.state = {
        min: 5,
        max: 5,
        months: [
            result['January'] ? result['January'] : noData,
            result['February'] ? result['February'] : noData,
            result['Mars'] ? result['Mars'] : noData,
            result['April'] ? result['April'] : noData,
            result['May'] ? result['May'] : noData,
            result['June'] ? result['June'] : noData,
            result['July'] ? result['July'] : noData,
            result['August'] ? result['August'] : noData,
            result['September'] ? result['September'] : noData,
            result['October'] ? result['October'] : noData,
            result['November'] ? result['November'] : noData,
            result['December'] ? result['December'] : noData,
        ]
    };
    this.findMinMax();
    console.log(this.state);
    this.normalizeMonths();
    console.log(this.state);
  }

  findMinMax() {
    this.state.max = Math.max(...this.state.months);
    this.state.min = Math.min(...this.state.months);
  }

  normalizeMonths() {
    for (var i = 0; i < this.state.months.length; i++) {
      this.state.months[i] = this.normalize(this.state.months[i]);
    }
  }

  normalize(num) {
    return ((num - this.state.min) / (this.state.max - this.state.min)) * 450;
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
