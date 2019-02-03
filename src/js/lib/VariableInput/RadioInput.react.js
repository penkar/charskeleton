// @flow
import React from 'react';
import cn from 'classnames';
type Props = {
  value:Boolean,
  idx:String,
  category:String,
  field:String,
}
type State = {
  checked:Boolean,
}

export default class RadioInput extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props);this.state={checked:true}
  }
  render() {
    return (
      <div className="RadioInput">
        <div className="label">
          <i className={cn("material-icons", {checked:!this.props.value})}>radio_button_unchecked</i>
          <i className={cn("material-icons", {checked: this.props.value})}>radio_button_checked</i>
        </div>
        <div className="component" onClick={()=>this.setState({checked: !this.state.checked})}></div>
      </div>
    )
  }
  _onClick = () => {
    const value = !this.props.value, {idx, category, field} = this.props;
  }
}
