import React from 'react';

export default class Result11Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="section-result11">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC' }}>Nope!</h1>
              <h3 style={{ paddingTop: '20px' }}>Unfortunately you wouldn't be able to keep up with Mr. Sheen.</h3>
              <h3>He can spend 2 355 000 kr on a decent night of partying.</h3>
              <h3>(And you have a total worth of 425 039 kr)</h3>
            </div>

            <div className="large-12 distance cell">
              <a className="button large" href="result-12-opts">Continue</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
