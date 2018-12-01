// @flow
import React from 'react';
import {observer} from 'mobx-react';

import UIState from './state/UIState';

import ShowCase from './view/ShowCase';
import NavMenu from './view/NavMenu';

import Components from './lib';

const props = {
  modifiable:true,
  placeholder:"Placeholder",
  callback:(textvalue, id, category)=> {},
  id:"ID0001",
  category:"ID fields",
  value:"Checkob",
  suggestions:[],
  raiseLabel:true,
  classes:"",
}

export default @observer class CharSkeleton extends React.Component<{}> {
  render() {
    return (
      <div className="CharSkeleton">
        <NavMenu>
        </NavMenu>
        <ShowCase>
          <Components.Input {...props} />
        </ShowCase>
      </div>
    )
  }
}
