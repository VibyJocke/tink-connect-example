import React from 'react';

export default class Result8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Home',
      class: 'home',
      amount: 48349
      //        { name: 'Beauty', class: 'beauty' },
      //        { name: 'Home', class: 'home' },
      //        { name: 'Leisure', class: 'leisure' },
      //        { name: 'Property', class: 'property' },
      //        { name: 'Restaurants', class: 'restaurants' },
      //        { name: 'Shopping', class: 'shopping' },
      //        { name: 'Transport', class: 'transport' },
    };
  }

  render() {
    return (
      <div className={"section-result8-" + this.state.class}>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F89572' }}>Favourite category</h1>
            </div>

            <div className="large-12 distance cell">
              <h2>{this.state.name}, where you spent</h2>
              <h1 style={{ fontSize: '19rem' }}>{this.state.amount} kr</h1>
            </div>

            <div className="large-12 text-right cell">
              <a className="button secondary large" href="result-9">Continue</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
