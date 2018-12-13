import React from 'react';

export default class Result10 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="section-result10">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC' }}>You spend LESS!</h1>
              <h3 style={{ paddingTop: '20px' }}>Seems like fancy something else to drink compared to the average Swede, coolio!</h3>
              <h3>Because you spend...</h3>
            </div>

            <div className="large-12 distance cell">
              <h1>2 424 kr on alcohol</h1>
              <a className="button large" href="result-5">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
