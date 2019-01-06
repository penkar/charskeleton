//@flow
import React from 'react';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';
import Components from '../lib/index.js';

type Props = {}
export default @observer class ShowCase extends React.Component<Props> {
  render() {
    const charInfo = CharacterState.characterInfo;
    return (
      <div className="ShowCase">
        { charInfo.map((category, i) =>
          React.createElement(Components[category.maptype], {...category, key:i})) }
      </div>
    );
  }
}
