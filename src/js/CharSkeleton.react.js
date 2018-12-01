import React from 'react';
import {observer} from 'mobx-react';
import UIState from './state/UIState';

export default @observer class CharSkeleton extends React.Component {
  render() {
    return (
      <div className="CharSkeleton">
      </div>
    )
  }
}
