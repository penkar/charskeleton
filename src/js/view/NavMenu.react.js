//@flow
import React from 'react';
import {observer} from 'mobx-react';

import UIState from '../state/UIState';


export default @observer class NavMenu extends React.Component {
  render() {
    return (
      <div className={`NavMenu ${UIState.menu ? "open" : ""}`}>
        <div className="right section">
          { UIState.menu && <i className="material-icons" onClick={this._toggleMenu}>account_box</i> }
          <i className="material-icons" onClick={this._toggleMenu}>menu</i>
        </div>

        { UIState.menu && this.props.children }
      </div>
    )
  }
  _toggleMenu(){UIState.menu = !UIState.menu}
}
