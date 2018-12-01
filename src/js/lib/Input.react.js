//@flow
import React from 'react';
import {observer} from 'mobx-react';
type Props = {
  suggestions:Array,

  modifiable:Boolean,
  raiseLabel:Boolean,

  callback:Function,

  category:String,
  classes:String,
  id:String,
  placeholder:String,
  value:String,
}
type State = {
  focused:Boolean
}

export default @observer class Input extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      focused:false,
    }
  }
  render() {
    const {classes, value, placeholder, modifiable, raiseLabel} = this.props;
    const {focused} = this.state;
    return (
      <div className={`Input ${modifiable ? "" : "disabled"} ${classes !== undefined ? classes : ""} ${focused ? "focused" : ""}`}>
        <input
          type="text"
          value={this.props.value}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChange={this._changeValue} />
        { raiseLabel && placeholder &&
          <span className="placeholder">{placeholder}</span> }
      </div>
    )
  }
  _onFocus = () => {
    this.setState({focused:true});
  }
  _onBlur = () => {
    console.log(49)
    this.setState({focused:false});
  }
  _changeValue = () => {

  }
}
