// @flow
import React from 'react';
import cn from 'classnames';

type Props = {
  suggestions:Array<string>,
  disabled:boolean,
  raiseLabel:boolean,
  category:string,
  classes:string,
  id:?string,
  index:number,
  placeholder:string,
  value:string,
  width:string,
}
type State = {
  focused:boolean
}

class Input extends React.Component<Props, State> {
  static defaultProps = {
    placeholder:"",
    value:"",
    classes:"",
    disabled:false,
    raiseLabel:false,
    id:``,
    suggestions:[],
  }

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
  }
  _changeValue = ({target}:Object) => {
    const {category, index, disabled} = this.props;
  }
}

export default Input