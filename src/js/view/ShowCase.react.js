//@flow
import React from 'react';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';
import Components from '../lib/index.js';

import VariableInput from '../lib/VariableInput/index.js'

export default @observer class ShowCase extends React.Component {
  render() {
    const charInfo = CharacterState.characterInfo;
    return (
      <div className="ShowCase">
        { charInfo.map((category, i) =>
          React.createElement(Components[category.maptype], {...category, key:i})) }
        <VariableInput.CheckBox />
      </div>
    )
  }
}
