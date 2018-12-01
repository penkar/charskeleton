// @flow
import React from 'react';
import {observer} from 'mobx-react';

import UIState from './state/UIState';

import ShowCase from './view/ShowCase';
import NavMenu from './view/NavMenu';

export default @observer class CharSkeleton extends React.Component<{}> {
  render() {
    return (
      <div className="CharSkeleton">
        <NavMenu />
        <ShowCase />
      </div>
    )
  }
}
