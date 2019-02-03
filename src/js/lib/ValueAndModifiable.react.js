// @flow
import React from 'react';

import CheckBox from './VariableInput/CheckBox';
import type {ComponentProps} from '../types';

type Props = {
  disabled:boolean,
  formula:string,
  fieldType:string,
  id:?string,
  title:string,
  value:number,
  modifier:?any,
  specialized:boolean,
  ...ComponentProps,
}

class ValueAndModifiable extends React.Component<Props, {}> {
  render() {
    const {title, value, modifier, specialized, formula} = this.props;
    return (
      <div className={`ValueAndModifiable col`}>
        <div className="title">{title}</div>
        <div className="row">
          <CheckBox />
          <div className="col">
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
        </div>
      </div>
    );
  }
  _modChange = ({target}:Object) => {
    const {value} = target, {category, index, disabled} = this.props;
  }
  _valueChange = ({target}:Object) => {
    const {value} = target, {category, index, disabled} = this.props;
  }
}
ValueAndModifiable.defaultProps = {
  disabled:false,
  formula:"",
  fieldType:"",
  title:"",
  id:"",
  value:10,
  modifier:0,
  specialized:false,
}
export default ValueAndModifiable;