// @flow
import React from 'react';
import {observer} from 'mobx-react';

import UIState from './state/UIState';
import CharacterState from './state/CharacterState';

import ShowCase from './view/ShowCase';
import NavMenu from './view/NavMenu';
import Components from './lib';

export default @observer class CharSkeleton extends React.Component<{}> {
  render() {
    return (
      <div className="CharSkeleton">
        <NavMenu>
        </NavMenu>
        <ShowCase>
          <Components.Input />
        </ShowCase>
      </div>
    )
  }
}
