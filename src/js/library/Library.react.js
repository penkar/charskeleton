// @flow
import React from 'react';
import Parameters from './Parameters';

import CharacterState from '../state/CharacterState';
import NavMenu from '../view/NavMenu';
import InputFieldContainer from '../lib/InputFieldContainer';
import TextAreas from '../lib/TextAreas';
import ValueAndModifiableRange from '../lib/ValueAndModifiableRange';
import KeyValues from '../lib/KeyValues';

type State = {
  key:string,
}

export default class Library extends React.Component<{}, State> {
  constructor(props:Object) {
    super(props);
    window.char = CharacterState;
    this.state = { key:'keyvalues', };
  }
  componentWillMount() {
    CharacterState.setLibraryCharacterInfo(keyvalues);
  }
  render() {
    return (
      <div className="Library">
        <NavMenu>
          <a onClick={()=>this._swapKey('input')}>Inputs</a>
          <a onClick={()=>this._swapKey('keyvalues')}>Key - Values</a>
          <a onClick={()=>this._swapKey('valueandmodifiable')}>Value and Modifiable</a>
          <a onClick={()=>this._swapKey('styleparams')}>Style Parameters</a>
        </NavMenu>

        { this._content() }
      </div>
    );
  }

  _swapKey = (key:string) => {
    switch (key) {
      case 'textareas':
        CharacterState.setLibraryCharacterInfo(textareas); break;
      case 'input':
        CharacterState.setLibraryCharacterInfo(input); break;
      case 'keyvalues':
        CharacterState.setLibraryCharacterInfo(keyvalues); break;
      case 'valueandmodifiable':
      default:
        CharacterState.setLibraryCharacterInfo(valuemodifiable); break;
    }
    this.setState({key}); 
  }

  _content = () => {
    let content, title;
    const charprops = CharacterState.getLibraryCharacterInfo;
    switch (this.state.key) {
      case "textareas":
        content = <TextAreas {...charprops}/>, title = "Text Areas"; break;
      case "input":
        content = <InputFieldContainer {...charprops}/>, title = "Input"; break;
      case "valueandmodifiable":
        content = <ValueAndModifiableRange {...charprops}/>, title = "Value Modifiable"; break;
      case "keyvalues":
      default:
        content = <KeyValues {...charprops}/>, title = "Value Modifiable"; break;
    }

    return (
      <Parameters title={title}>
        { content }
      </Parameters>
    )
  }
}


const textareas = {
  maptype:'TextAreas', /* */
  width:5, /* */
  standardwidth:'fifth',  /* */
  category:'textareas',
  alignment:'row',
  data:[{
    title:'Personality Traits',
    placeholder:'',
    value:'Vitae urna non lectus quis tellus ultricies, ac mi et, massa ipsum integer urna vestibulum. Porta turpis, tempus convallis lectus ullamcorper. Cursus pulvinar sit, id turpis.',
  },{
    title:'Ideals',
    placeholder:'',
    value:'Elementum turpis, praesent elit, porttitor sollicitudin congue, nulla vel, vestibulum vehicula amet neque. Vel aenean ac mauris libero. Varius elementum, integer lacus donec elit, suscipit morbi rhoncus.',
  },{
    title:'Bonds',
    placeholder:'',
    value:'Justo suscipit nulla, maecenas nulla sed nostra massa. Congue ut, aut lacinia id, lectus orci phasellus porta vivamus quam maecenas, sit nonummy fermentum libero urna adipiscing amet.',
  },{
    title:'Flaws',
    placeholder:'',
    value:'Elit urna vivamus pretium, pede mauris a, elit dui elit odio. Ullamcorper integer urna nostra ad pharetra eget, ligula velit odio et torquent nec dignissim, quisque curabitur nunc in laoreet urna, feugiat tristique quis nulla. Enim ac.',
  },],
}, input = {
  maptype:'InputFieldContainer', /* Name of the Field that will be used (Will point to sub Inputs.) */
  width:5, /* How many fields will appear in one row or column. */
  standardwidth:'fifth', /* TODO: Make something more extensible than set CSS for widths. */
  category:'basicinfo', /* KeyName for this field. Should not be repeated. */
  alignment:'row', /* Alignment for the row content (row or column) */
  data:[{
    placeholder:"Character Name",
    value:"Light Scratch",
  },{
    placeholder:"Class & Level",
    value:"Paladin",
    suggestions:["Paladin", "Ranger", "Rogue", "Wizard", "Monk", "Sorcerer", "Barbarian"],
  },{
    placeholder:"Background",
    value:"",
  },{
    placeholder:"Player Name",
    value:"",
  },{
    placeholder:"Faction",
    value:"",
  },{
    placeholder:"Race",
    value:"",
  },{
    placeholder:"Alignment",
    value:"",
  },{
    placeholder:"EXP",
    value:"",
  },{
    placeholder:"DCI Number",
    value:"",
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
    fieldtype:'number',
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Dexterity",
    value:10,
    fieldtype:'number',
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Constitution",
    value:12,
    fieldtype:'number',
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Intelligence",
    value:14,
    fieldtype:'number',
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Wisdom",
    value:15,
    fieldtype:'number',
    modifier:null,
    specialized:false,
    formula:"Math.floor((X - 10) / 2)",
  },{
    title:"Charisma",
    value:16,
    fieldtype:'number',
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
    title:"Inspiration",
    value:0,
    fieldtype:'number',
  },{
    title:"Proficiency",
    value:0,
    fieldtype:'number',
  }]
}