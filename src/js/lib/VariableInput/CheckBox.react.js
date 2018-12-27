import React from 'react';
import cn from 'classnames';
type Props = {
  callback:Function,
  value:String,
  id:String,
}

export default class CheckBox extends React.Component {
  constructor(props:Object) {
    super(props)
    this.state={selected:true}
  }
  render() {
    return (
      <div className={cn("CheckBox", {selected: this.state.selected})}>
        <div className={cn("cover")} />
        <i className='material-icons'>done</i>
        <input type="checkbox" value={this.state.selected} onClick={()=>this.setState({selected:!this.state.selected})}/>
      </div>
    )
  }
}
