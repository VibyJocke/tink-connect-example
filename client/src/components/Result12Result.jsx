import React from 'react';

export default class Result12Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="section-result12">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style="color: #F9BFAC;">1 323 383 of YOU would suffice.</h1>
              <h3 style="padding-top: 20px;">Anyhow... Let's compare you to some Swedes...</h3>
            </div>

            <div className="large-12 distance cell">
              <a className="button large" href="result-5">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
