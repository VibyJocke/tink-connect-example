import React from 'react';

class StartButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      console.log(this.props);
        return (
          <div className="large-12 cell">
            <a className="button large"
               onClick={this.props.onClick}
               style={
                 {
                   marginTop: '-130px',
                   width: '51%'
                 }
               }>
              {this.props.buttonText}
            </a>
          </div>
        )
    }
}

export default StartButton;
