import React from 'react';

export default class Result8 extends React.Component {
  constructor(props) {
    super(props);

    var topCategory = JSON.parse(localStorage.getItem('result')).topCategory;
    console.log(topCategory)

    this.state = {
      name: topCategory.first.category,
      class: this.getClass(topCategory.first.category),
      amount: Math.floor(topCategory.first.amount)
    };
  }

  prettyPrintNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  getClass(name) {
    if(name === 'Health & Beauty') return 'beauty'
    else if(name === 'Home') return 'home'
    else if(name === 'Leisure') return 'leisure'
    else if(name === 'Property') return 'property'
    else if(name === 'Food & Drinks') return 'restaurants'
    else if(name === 'Shopping') return 'shopping'
    else if(name === 'Transport') return 'transport'
    else return 'shopping'
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
              <h1 style={{ fontSize: '19rem' }}>{this.prettyPrintNumber(this.state.amount)} kr</h1>
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
