// @flow
import React from 'react';
import cn from 'classnames';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';
import type {ComponentProps} from '../types';
type Props = {
  title:string,
  id:?string,
  ...ComponentProps,
}
type State = {
  focused:boolean;
}
@observer class TextArea extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props);
    this.state = {
      focused:false,
    }
  }
  render() {
    const {focused} = this.state, {width} = this.props;
    return (
      <div className={cn(`TextArea`, width)}>
        <div className="title">{this.props.title}</div>
        <textarea
          value={this.props.value}
          className={cn('value', {focused})}
          onFocus={this._focus}
          onBlur={this._blur}
          onChange={this._change} />
      </div>
    )
  }
  _focus = () => this.setState({focused:true});
  _blur = () => this.setState({focused:false});
  _change = (event:Object) => {
    const value = event.target.value, {index, category} = this.props;
    CharacterState.update({value, idx:index, category, field:'value'});
  }
}
TextArea.defaultProps = {
  category:"",
  index:0,
  id:"",
  width:"",
  title:"",
}
export default TextArea;