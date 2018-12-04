import React from 'react';
import {observer} from 'mobx-react';
import CharacterState from '../state/CharacterState';

export default @observer class KeyValue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {focused:false}
  }
  render() {
    return (
      <div className={`KeyValue ${this.props.classes}`}>
        <div className="title">{this.props.title}</div>
        <div className={`value ${this.state.focused ? "focused" : ""}`}>
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
  _change = ({target}) => {
    const {value} = target, {category, index, disabled} = this.props;
    CharacterState.update(value, index, category, 'value');
  }
  _focus = () => this.setState({focused: true});
  _blur = () => setTimeout(()=>this.setState({focused:false}), 200);
}
