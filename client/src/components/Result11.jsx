import React from 'react';

export default class Result11 extends React.Component {
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
              <h1 style={{color: '#F9BFAC'}}>You & Charlie Sheen</h1>
              <h3 style={{paddingTop: '20px'}}>
                Charlie Sheen knows how to throw a party. So you know, Charlie Sheen is known to have trashed a luxury hotel room, paid ex-porn stars to attend and then give away convertible Bentleys to attendees. <br />This was a Monday.
              </h3>
              <h3>
                Do you think you could afford to split the bill with Charlie for a night of partying?
              </h3>
            </div>

            <div className="large-12 distance cell">
              <a className="button large hollow" href="result-12">Yes</a>
              <a className="button large hollow" style={{marginLeft: '50px'}} href="result-12">No</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
