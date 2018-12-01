//@flow
import React from 'react';
import {observer} from 'mobx-react';

export default @observer class ShowCase extends React.Component {
  render() {
    return (
      <div className="ShowCase">
        { this.props.children }
      </div>
    )
  }
}
