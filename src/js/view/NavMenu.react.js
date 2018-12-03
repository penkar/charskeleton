// @flow
import React from 'react';
import {observer} from 'mobx-react';
import UIState from '../state/UIState';

export default @observer class NavMenu extends React.Component {
  render() {
    const menu = UIState.menu;
    return (
      <div
        className={`NavMenu ${menu ? "open" : ""}`}
        onClick={() => (menu && this._toggleMenu({}))}>
        <div className="relevant">
          <div className="right section">
            { menu && <i className="material-icons">account_box</i> }
            <i className="material-icons" onClick={this._toggleMenu}>menu</i>
          </div>

          { menu && this.props.children }
        </div>
      </div>
    )
  }
  _toggleMenu(e){
    e.stopPropagation && e.stopPropagation();
    UIState.menu = !UIState.menu;
  }
}
