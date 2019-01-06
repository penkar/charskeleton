// @flow
import React from 'react';
import CharacterState from '../state/CharacterState';

type Props = {
  children:Element,
  title:String,
}

export default class Parameters extends React.Component<Props> {
  render() {
    return (
      <div className="Parameters">
        <div>Component: {this.props.title}</div>
        <hr/>
        { this.props.children }
        <hr/>
        
        <div>Example JSON:</div>
        <div>
          <pre>
            <code>
              { JSON.stringify(CharacterState.getLibraryCharacterInfo, null, 2) }
            </code>
          </pre>
        </div>
      </div>
    );
  }
}