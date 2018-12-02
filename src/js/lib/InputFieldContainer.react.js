import React from 'react';
import {observer} from 'mobx-react';
import Input from './Input';
type Props = {
  category:String,
}
export default @observer class InputFieldContainer extends React.Component<Props, {}> {
  render() {
    const {width, alignment, data} = this.props;
    const rows = [];
    for(let i = 0; i < data.length; i+= width) {
      rows.push(
        <div className={`container ${alignment}`} key={i}>
          { data.slice(i,i+ width).map((field, index) => this._createInput(field, index + i)) }
        </div>
      );
    }

    return (
      <div className={`InputFieldContainer ${alignment}`}>
        { rows }
      </div>
    )
  }
  _createInput = (field, index) => {
    const {category, standardwidth} = this.props;
    return <Input {...field} width={standardwidth} key={index} category={category} index={index}/>
  }
}
