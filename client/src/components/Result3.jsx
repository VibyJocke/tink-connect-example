import React from 'react';

export default class Result1 extends React.Component {
  constructor(props) {
    super(props);

    var vendors = JSON.parse(localStorage.getItem('result')).topThreeVendors;

    this.state = {
      topVendors: [vendors.second, vendors.first, vendors.third]
    };
  }

  render() {
    return (
      <div className="section-result2">

        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{opacity: '0.2'}}>Favorite vendor</h1>
            </div>

            <div className="large-4 distance cell">

              <div className="card-dark text-center">
                <img src="2.png" alt="" style={{paddingBottom: '40px'}} />
                <h4>{this.state.topVendors[1]}</h4>
                <p>This was your second favorite place to purchase.</p>
              </div>

            </div>

            <div className="large-4 distance cell">

              <div className="card-dark text-center">
                <img src="1.png" alt="" style={{paddingBottom: '40px'}} />
                <h4>{this.state.topVendors[0]}</h4>
                <p>This was your favorite to purchase in 2018. Want it to be a tradition for 2019?</p>
              </div>

            </div>

            <div className="large-4 distance cell">

              <div className="card-dark text-center">
                <img src="3.png" alt="" style={{paddingBottom: '40px'}} />
                <h4>{this.state.topVendors[2]}</h4>
                <p>This was your second favorite place to purchase.</p>
              </div>

            </div>

            <div className="large-12 distance text-center cell">
              <a className="button large" href="result-4">Continue</a>
            </div>

          </div>
        </div>
      </div>
      );
  }
}
