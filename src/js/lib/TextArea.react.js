// @flow
import React from 'react';
import cn from 'classnames';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';

type Props = {
  category:string,
  index:number,
  width:string,
  title:string,
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
    CharacterState.update(value, index, category, 'value');
  }
}
TextArea.defaultProps = {
  category:"",
  index:0,
  width:"",
  title:"",
}
export default TextArea;