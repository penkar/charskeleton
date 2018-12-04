import React from 'react';
type Props = {
  callback:Function,
  value:String,
  id:String,
}

export default class CheckBox extends React.Component {
  render() {
    return (
      <div className="CheckBox">
        <input type="checkbox" />
      </div>
    )
  }
}
