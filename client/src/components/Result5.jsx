import React from 'react';

export default class Result1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {
        numPurchases: 83,
        description: 'McDonalds'
      }
    };
  }

  render() {
    return (
      <div class="section-result5">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F89572' }}>Quiz</h1>
            </div>

            <div className="large-6 distance cell">
              <h4 style={{ color: '#FAB097' }}>Whoa...! You made a total purchases at {this.state.transaction.description} of</h4>
              <h1 style={{ color: '#262626', fontSize: '17rem' }}>{this.state.transaction.numPurchases}</h1>
            </div>

            <div className="large-4 large-offset-2 cell" style={{ marginTop: '- 100px' }}>
              <img src="hands.png" />
            </div>

            <div className="large-6 cell">
              <a class="button secondary large" href="result-6">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
