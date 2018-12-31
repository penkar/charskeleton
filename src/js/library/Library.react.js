import React from 'react';
import Parameters from './Parameters';
import NavMenu from '../view/NavMenu';
import InputFieldContainer from '../lib/InputFieldContainer';
import ValueAndModifiableRange from '../lib/ValueAndModifiableRange';
import KeyValues from '../lib/KeyValues';

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key:'keyvalues',
    };
  }
  render() {
    return (
      <div className="Library">
        <NavMenu>
          <a onClick={()=>this.setState({key:'input'})}>Inputs</a>
          <a onClick={()=>this.setState({key:'keyvalues'})}>Key - Values</a>
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
      case "valueandmodifiable":
        content = <ValueAndModifiableRange {...valuemodifiable}/>, title = "Value Modifiable", jsonStructure = valuemodifiable;
        break;
      case "keyvalues":
        content = <KeyValues {...keyvalues}/>, title = "Value Modifiable", jsonStructure = keyvalues;
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
}, valuemodifiable = {
  width:6,
  standardwidth:'fifth',
  category:'abilities',
  maptype:'ValueAndModifiableRange',
  alignment:'row',
  data:[{
    title:"Strength",
    value:8,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Dexterity",
    value:10,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Constitution",
    value:12,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Intelligence",
    value:14,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Wisdom",
    value:15,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Charisma",
    value:16,
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  }]
}, keyvalues = {
  width:2,
  category:'inspirations',
  maptype:'KeyValues',
  standardwidth:'fifth',
  alignment:'col',
  data:[{
    fieldtype:'number',
    title:"Inspiration",
    value:0,
    id:"inspiration",
  },{
    fieldtype:'number',
    title:"Proficiency",
    value:0,
    id:"proficiency",
  }]
}