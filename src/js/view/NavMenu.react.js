// @flow
import React from 'react';
import cn from 'classnames';
type Props = {
  menu:boolean,
  children:Object,
  action:Object,
}

export default class NavMenu extends React.Component<Props> {
  render() {
    const menu = this.props.menu;
    console.log(this.props);
    return (
      <div
        className={cn(`NavMenu`, {menu})}
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
  _toggleMenu = () => {
    this.props.actions.toggleMenu();
  }
}
