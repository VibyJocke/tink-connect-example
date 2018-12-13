import React from 'react';

export default class Result9 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
<div className="section-result9">
  <div className="grid-container">
      <div className="grid-x grid-padding-x">

        <div className="large-12 cell">
          <h1 style={{color: '#F9BFAC'}}>Compared to a Swede</h1>
          <h3 style={{paddingTop: '20px'}}>The average Swede spends 3 804kr on alcohol yearly.</h3>
          <h3>Do you think you spend MORE or LESS than the average Swede on alcohol?</h3>
        </div>

        <div className="large-12 distance cell">
          <h2>I believe I spend...</h2>
          <a className="button large hollow" href="result-10">More</a><a className="button large hollow" style={{marginLeft: '50px'}} href="result-10">Less</a>
        </div>

      </div>
    </div>
  </div>
  );
  }
}
