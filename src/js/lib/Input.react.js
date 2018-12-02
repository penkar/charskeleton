// @flow
import React from 'react';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';
type Props = {
  suggestions:Array,
  disabled:Boolean,
  raiseLabel:Boolean,
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
    super(props);
    this.state = {focused:false};
  }
  render() {
    const {classes, value, placeholder, disabled, raiseLabel, width, suggestions} = this.props, {focused} = this.state;
    return (
      <div className={`Input ${width ? width : ""} ${disabled ? "disabled" : ""} ${classes !== undefined ? classes : ""} ${value ? "active" : ""} ${focused ? "focused" : ""}`}>
        <input
          disabled={disabled}
          type="text"
          value={value}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChange={this._changeValue} />
        { raiseLabel && placeholder && <span className="placeholder">{placeholder}</span> }
        { this._createSuggestions(suggestions) }
      </div>
    );
  }
  _createSuggestions = (suggestions:Array<String>) => {
    if(!suggestions.length) return null;
    return (
      <div className="suggestions">
        { suggestions.map((suggestion, index) =>
          <div className="suggestion" onClick={()=>this._click(suggestion)} key={suggestion}>{suggestion}</div>
        ) }
      </div>
    );
  }
  _onFocus = (focused = true) => this.setState({focused});
  _onBlur = () => setTimeout(()=>this._onFocus(false), 200);
  _click = (value) => {
    const {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'value');
  }
  _changeValue = ({target}) => {
    const {category, index, disabled} = this.props;
    if(!disabled) CharacterState.update(target.value, index, category, 'value');
  }
}
