// @flow
import React from 'react';
import cn from 'classnames';
type Props = {
  callback:Function,
  id:string,
  value:boolean,
}
type State = {
  selected:boolean,
}

class CheckBox extends React.Component<Props, State> {
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
    );
  }
}
CheckBox.defaultProps = {
  callback:()=>null,
  id:"",
  value:false,
}
export default CheckBox