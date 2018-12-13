import React from 'react';

export default class Result5 extends React.Component {
  constructor(props) {
    super(props);

    var result = JSON.parse(localStorage.getItem('result'))

    this.state = {
      topVendor: result.topThreeVendors.first
    };
  }

  render() {
    return (
      <div className="section-result5">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F89572' }}>Quiz</h1>
            </div>

            <div className="large-6 distance cell">
              <h4 style={{ color: '#FAB097' }}>Whoa...! You made a total purchases at {this.state.topVendor.spot} of</h4>
              <h1 style={{ color: '#262626', fontSize: '17rem' }}>{this.state.topVendor.count}</h1>
            </div>

            <div className="large-4 large-offset-2 cell" style={{ marginTop: '- 100px' }}>
              <img alt="" src="hands.png" />
            </div>

            <div className="large-6 cell">
              <a className="button secondary large" href="result-6">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
