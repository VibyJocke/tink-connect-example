import React from 'react';
import AuthorizationLink from './AuthorizationLink';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    var staticResult = {
      topThreeVendors: {
        first: 'Burger King',
        second: 'McDonald\'s',
        third: 'Max',
      },
      largestTransaction: {
        amount: 75349,
        category: 'Transport',
        name: 'Stockholm Bilhandel'
      },
      numberOfTransactions: 4123,
      topCategory: {},
      transactionsPerMonth: {},
    }

    localStorage.setItem('result', JSON.stringify(staticResult));

    this.state = {
      market: 'SE',
      locale: 'en_US',
    };
  }

  render() {
    const {
      locale,
      market,
    } = this.state;
    return (
      <div className="section-hero">

        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-6 cell">
              <h1>Your financial year</h1>
              <h2>— a breakdown</h2>
            </div>

            <div className="large-4 large-offset-1 cell">

              <div className="card-dark text-center">
                <img src="example-1.png" alt="" style={{ paddingBottom: '30px' }} />
                <h4>Largest transaction of the year</h4>
                <p>What purchase was larger than the rest?</p>
              </div>

              <div className="card-dark text-center" style={{ marginTop: '30px' }}>
                <img src="example-2.png" alt="" style={{ paddingBottom: '30px' }} />
                <h4>Your favourite vendor</h4>
                <p>Do you have a favorite restaurant that you often visit?</p>
              </div>

            </div>
          </div>
          <AuthorizationLink
            scope="accounts:read,transactions:read,investments:read,user:read"
            market={market} locale={locale}
          />
        </div>
      </div>
    );
  }
}
