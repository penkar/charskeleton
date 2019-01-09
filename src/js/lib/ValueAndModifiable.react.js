// @flow
import React from 'react';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';
import CheckBox from './VariableInput/CheckBox';
import type {ComponentProps} from '../types';

type Props = {
  disabled:boolean,
  formula:string,
  fieldType:string,
  title:string,
  value:number,
  modifier:?any,
  specialized:boolean,
  ...ComponentProps,
}

@observer class ValueAndModifiable extends React.Component<Props, {}> {
  render() {console.log(this.props);
    const {title, value, modifier, specialized, formula} = this.props;
    return (
      <div className={`ValueAndModifiable`}>
        <CheckBox />
        <div className="title">{title}</div>
        <div className="value">
          <input
            type="number"
            onChange={this._valueChange}
            value={value}></input>
        </div>
        <div className={`modifier ${modifier === null ? "null" : ""}`}>
          <input
            type="number"
            onChange={this._modChange}
            value={modifier || eval(formula.replace('X', value))}/>
        </div>
      </div>
    );
  }
  _modChange = ({target}:Object) => {
    const {value} = target, {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'modifier');
  }
  _valueChange = ({target}:Object) => {
    const {value} = target, {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'value');
  }
}
ValueAndModifiable.defaultProps = {
  disabled:false,
  formula:"",
  fieldType:"",
  title:"",
  value:10,
  modifier:0,
  specialized:false,
}
export default ValueAndModifiable;