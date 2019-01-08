// @flow
import React from 'react';
import {observer} from 'mobx-react';
import cn from 'classnames';
import CharacterState from '../state/CharacterState';
type Props = {
  classes:string,
  title:string,
  fieldtype:string,
  value:string|number,
  disabled:boolean,
  index:number,
  category:string,
}
type State = {
  focused:boolean,
}

export default @observer class KeyValue extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props)
    this.state = {focused:false}
  }
  render() {
    const focused = this.state.focused;
    return (
      <div className={`KeyValue ${this.props.classes}`}>
        <div className="title">{this.props.title}</div>
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
