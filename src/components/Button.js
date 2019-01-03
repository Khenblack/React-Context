import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value.language === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(value) =>
          <button className={`ui button ${value.color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    )
  }
}

export default Button;