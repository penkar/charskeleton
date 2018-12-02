//@flow
import React from 'react';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';
type Props = {
  suggestions:Array,
  disabled:Boolean,
  raiseLabel:Boolean,
  callback:Function,
  category:String,
  classes:String,
  id:String,
  placeholder:String,
  value:String,
  width:String,
}
type State = {
  focused:Boolean
}

export default @observer class Input extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props)
    this.state = {
      focused:false,
    }
  }
  render() {
    const {classes, value, placeholder, disabled, raiseLabel, width} = CharacterState.props;
    const {focused} = this.state;
    return (
      <div className={`Input ${width ? width : ""} ${disabled ? "disabled" : ""} ${classes !== undefined ? classes : ""} ${value ? "active" : ""} ${focused ? "focused" : ""}`}>
        <input
          disabled={disabled}
          type="text"
          value={value}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChange={this._changeValue} />
        { raiseLabel && placeholder &&
          <span className="placeholder">{placeholder}</span> }
        { false && value &&
          <span className="label">{value}</span> }
      </div>
    );
  }
  _onFocus = () => this.setState({focused:true});
  _onBlur = () => this.setState({focused:false});
  _changeValue = ({target}) => !CharacterState.props.disabled && CharacterState.update(target.value, 1, 2);
}
