// @flow
import React from 'react';

import UIState from '../state/UIState';
type Props = {
  children:Object,
}

export default class NavMenu extends React.Component<Props> {
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
    );
  }
  _toggleMenu(event:Object){
    event.stopPropagation && event.stopPropagation();
    UIState.menu = !UIState.menu;
  }
}
