import React from 'react';
import Parameters from './Parameters';
import NavMenu from '../view/NavMenu';
import InputFieldContainer from '../lib/InputFieldContainer';

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key:'input',
    };
  }
  render() {
    return (
      <div className="Library">
        <NavMenu>
          <a onClick={()=>this.setState({key:'input'})}>Inputs</a>
          <a onClick={()=>this.setState({key:'keyvalue'})}>Key - Values</a>
          <a onClick={()=>this.setState({key:'valueandmodifiable'})}>Value and Modifiable</a>
          <a onClick={()=>this.setState({key:'styleparams'})}>Style Parameters</a>
        </NavMenu>

        { this._content() }
      </div>
    );
  }
  _content = () => {
    let content, title, jsonStructure;
    switch (this.state.key) {
      case "input":
        content = <InputFieldContainer {...input}/>, title = "Input", jsonStructure = input;
        break;
      default:
        content = null, title = null, jsonStructure = null;
        break;
    }

    return (
      <Parameters title={title} jsonStructure={jsonStructure}>
        { content }
      </Parameters>
    )
  }
}


const input = {
  maptype:'InputFieldContainer', /* Name of the Field that will be used (Will point to sub Inputs.) */
  width:5, /* How many fields will appear in one row or column. */
  standardwidth:'fifth', /* TODO: Make something more extensible than set CSS for widths. */
  category:'basicinfo', /* KeyName for this field. Should not be repeated. */
  alignment:'row', /* Alignment for the row content (row or column) */
  data:[{
    placeholder:"Character Name",
    value:"Light Scratch",
    id:"charname",
  },{
    placeholder:"Class & Level",
    value:"Paladin",
    id:"class",
    suggestions:["Paladin", "Ranger", "Rogue", "Wizard", "Monk", "Sorcerer", "Barbarian"],
  },{
    placeholder:"Background",
    id:"background",
  },{
    placeholder:"Player Name",
    id:"name",
  },{
    placeholder:"Faction",
    id:"faction",
  },{
    placeholder:"Race",
    id:"race",
  },{
    placeholder:"Alignment",
    id:"alignment",
  },{
    placeholder:"EXP",
    id:"exp",
  },{
    placeholder:"DCI Number",
    id:"dci",
  }],
}