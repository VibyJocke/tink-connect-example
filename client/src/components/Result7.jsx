import React from 'react';

export default class Result7 extends React.Component {
  constructor(props) {
    super(props);

    var result = JSON.parse(localStorage.getItem('result'))

    this.state = {
      topCategories: result.topCategory,
      randomizedCategories: this.randomizeCategories(result.topCategory)
    };

    console.log(this.state);
  }

  randomizeCategories(topCategories) {
    var categories = [
      {
        category: topCategories.first.category,
        img: this.getCategoryImageName(topCategories.first.category)
      },
      {
        category: topCategories.second.category,
        img: this.getCategoryImageName(topCategories.second.category)
      },
      {
        category: topCategories.third.category,
        img: this.getCategoryImageName(topCategories.third.category)
      }
    ];
    return this.shuffle(categories);
  }

  getCategoryImageName(category) {
    var categoryFixed = category.toLowerCase();
    categoryFixed = categoryFixed.replace('&', '');
    categoryFixed = categoryFixed.replace('  ', '');
    categoryFixed = categoryFixed.replace(' ', '');
    var iconName = "icon-" + categoryFixed + "@2x.png";
    return iconName;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    return (
      <div className="section-result7">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC' }}>Favourite category</h1>
              <h3 style={{ paddingTop: '20px' }}>Which category did you spend the most on?</h3>
            </div>

            <div className="large-4 text-center cell"><a href="result-8" style={{ color: '#fff' }}>
              <div className="card-light">
                <img alt="" src={this.state.randomizedCategories[0].img} />
                <h3 style={{ paddingTop: '30px' }}>{this.state.randomizedCategories[0].category}</h3>
              </div></a>
            </div>

            <div className="large-4 text-center cell"><a href="result-8" style={{ color: '#fff' }}>
              <div className="card-light">
                <img alt="" src={this.state.randomizedCategories[1].img} />
                <h3 style={{ paddingTop: '30px' }}>{this.state.randomizedCategories[1].category}</h3>
              </div></a>
            </div>

            <div className="large-4 text-center cell"><a href="result-8" style={{ color: '#fff' }}>
              <div className="card-light">
                <img alt="" src={this.state.randomizedCategories[2].img} />
                <h3 style={{ paddingTop: '30px' }}>{this.state.randomizedCategories[2].category}</h3>
              </div></a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
