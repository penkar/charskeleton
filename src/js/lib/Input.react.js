// @flow
import React from 'react';
import {observer} from 'mobx-react';
import cn from 'classnames';
import CharacterState from '../state/CharacterState';
type Props = {
  suggestions:Array<string>,
  disabled:boolean,
  raiseLabel:boolean,
  category:string,
  classes:string,
  id:string,
  index:number,
  placeholder:string,
  value:string,
  width:string,
}
type State = {
  focused:boolean
}

@observer class Input extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props);
    this.state = {focused:false};
  }
  render() {
    const {classes, value, placeholder, disabled, raiseLabel, width, suggestions} = this.props, {focused} = this.state;
    return (
      <div className={cn('Input', width, disabled, classes, {active:value, focused})}>
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
  _createSuggestions = (suggestions:Array<string>) => {
    if(!suggestions || !suggestions.length) return null;
    return (
      <div className="suggestions">
        { suggestions.map((suggestion, index) =>
          <div className="suggestion" onClick={()=>this._click(suggestion)} key={suggestion}>{suggestion}</div>
        ) }
      </div>
    );
  }
  _onFocus = (focused:boolean = true) => this.setState({focused});
  _onBlur = () => setTimeout(()=>this._onFocus(false), 200);
  _click = (value:string) => {
    const {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'value');
  }
  _changeValue = ({target}:Object) => {
    const {category, index, disabled} = this.props;
    if(!disabled) CharacterState.update(target.value, index, category, 'value');
  }
}
Input.defaultProps = {
  placeholder:"",
  value:"",
  classes:"",
  disabled:false,
  raiseLabel:false,
  id:``,
  suggestions:[],
}
export default Input