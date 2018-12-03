import React from 'react';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';

type Props = {
  title:String,
  value:Number,
  modifier:Any,
  specialized:Boolean,
  formula:String,
}

export default class ValueAndModifiable extends React.Component<Props, {}> {
  render() {
    const {title, value, modifier, specialized, formula} = this.props;
    return (
      <div className={`ValueAndModifiable`}>
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
        <div className="specialized">{specialized}</div>
      </div>
    );
  }
  _modChange = ({target}) => {
    const {value} = target, {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'modifier');
  }
  _valueChange = ({target}) => {
    const {value} = target, {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'value');
  }
}
