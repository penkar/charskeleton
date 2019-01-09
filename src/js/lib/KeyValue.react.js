// @flow
import React from 'react';
import {observer} from 'mobx-react';
import cn from 'classnames';
import CharacterState from '../state/CharacterState';
import type {ComponentProps} from '../types.js';
type Props = {
  classes:string,
  title:string,
  fieldtype:string,
  value:string|number,
  disabled:boolean,
  ...ComponentProps,
}
type State = {
  focused:boolean,
}

@observer class KeyValue extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props)
    this.state = {focused:false}
  }
  render() {
    const focused = this.state.focused, {title} = this.props;
    return (
      <div className={`KeyValue`}>
        <div className="title">{title}</div>
        <div className={cn('value', {focused})}>
          <input
            type={this.props.fieldtype}
            onFocus={this._focus}
            onBlur={this._blur}
            onChange={this._change}
            value={this.props.value} />
        </div>
      </div>
    );
  }
  _change = ({target}:Object) => {
    const value = target.value, {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'value');
  }
  _focus = () => this.setState({focused: true});
  _blur = () => setTimeout(()=>this.setState({focused:false}), 200);
}
KeyValue.defaultProps = {
  classes:"",
  title:"",
  fieldtype:"",
  value:"",
  disabled:false,
}
export default KeyValue;