import React from 'react';
import AuthorizationLink from './AuthorizationLink';
import StartButton from './StartButton';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    var staticResult = {
      topThreeVendors: {
        first: { spot: 'Burger King', count: 23 },
        second: { spot: 'McDonald\'s', count: 43 },
        third: { spot: 'Max', count: 11 },
      },
      numberOfTransactionsAtTopVendor: 43,
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
      visible: false,
      buttonText: 'Get your financial year breakdown'
    };
  }

  componentDidMount() {
    window.addEventListener('message', this.responseCallback, false);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.responseCallback, false);
  }

  responseCallback = (event) => {
    if (
      !event
      || !event.data
      || event.origin !== 'https://oauth.tink.se'
    ) {
      return;
    }
    const {
      history,
      updateData,
    } = this.props;
    const {
      data,
      type,
      error,
    } = JSON.parse(event.data);
    if (type === 'code') {
      this.props.history.push('callback?code=' + data);
    }
    // TODO handle error
    // } else if (error && error.status === 'USER_CANCELLED') {
    //   history.push('/');
    // } else {
    //   console.log('Something went wrong');
    // }
  };

  showIframe = () => {
    this.setState(
      {
        visible: !this.state.visible,
        buttonText: !this.state.visible ? 'Cancel' : 'Get your financial year breakdown'
      }
    );
  }

  render() {
    const {
      locale,
      market,
      visible,
      buttonText
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
              {
                visible && <AuthorizationLink
                  scope="accounts:read,transactions:read,investments:read,user:read"
                  market={market} locale={locale}
                />
              }

              {
                visible === false && <div className="card-dark text-center">
                  <img src="example-1.png" alt="" style={{ paddingBottom: '30px' }} />
                  <h4>Largest transaction of the year</h4>
                  <p>What purchase was larger than the rest?</p>
                </div>
              }

              {
                visible === false && <div className="card-dark text-center" style={{ marginTop: '30px' }}>
                  <img src="example-2.png" alt="" style={{ paddingBottom: '30px' }} />
                  <h4>Your favourite vendor</h4>
                  <p>Do you have a favorite restaurant that you often visit?</p>
                </div>
              }

            </div>
          </div>
          <StartButton onClick = {this.showIframe} buttonText = {buttonText}/>
        </div>
      </div>
    );
  }
}
