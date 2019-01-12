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
    this.state = { key:'valuemodifiable'};
  }
  componentWillMount() {
    CharacterState.setLibraryCharacterInfo(valuemodifiable);
    CharacterState.setSkeleton(Skeleton);
  }
  render() {
    return (
      <div className="Library">
        <NavMenu>
          <a onClick={()=>this._swapKey('input')}>Inputs</a>
          <a onClick={()=>this._swapKey('keyvalues')}>Key - Values</a>
          <a onClick={()=>this._swapKey('textareas')}>Text Areas</a>
          <a onClick={()=>this._swapKey('valuemodifiable')}>Value and Modifiable</a>
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
    console.log(this.state.key);
    switch (this.state.key) {
      case "textareas":
        content = <TextAreas {...charprops}/>, title = "Text Areas"; break;
      case "input":
        content = <InputFieldContainer {...charprops}/>, title = "Input"; break;
      case "valuemodifiable":
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

class Skeleton {
  strength:number = 10;
  strengthModifier:?number = null
  strMod = () => {
    return this.strengthModifier || Math.floor((this.strength - 10) / 2);
  }
}

const textareas = {
  maptype:'TextAreas', /* */
  orientation:'horizontal',
  alignment:'row',
  width:5, /* */
  styleWidth:'fifth',  /* */
  category:'textareas',
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
  orientation:'horizontal',
  alignment:'row', /* Alignment for the row content (row or column) */
  width:5, /* How many fields will appear in one row or column. */
  styleWidth:'fifth', /* TODO: Make something more extensible than set CSS for widths. */
  category:'basicinfo', /* KeyName for this field. Should not be repeated. */
  data:[{
    placeholder:"Character Name",
    value:"Light Scratch",
    raiseLabel:true,
  },{
    placeholder:"Class & Level",
    value:"Paladin",
    suggestions:["Paladin", "Ranger", "Rogue", "Wizard", "Monk", "Sorcerer", "Barbarian"],
    raiseLabel:true,
  },{
    placeholder:"Background",
    value:"",
    raiseLabel:true,
  },{
    placeholder:"Player Name",
    value:"",
    raiseLabel:true,
  },{
    placeholder:"Faction",
    value:"",
    raiseLabel:true,
  },{
    placeholder:"Race",
    value:"",
    raiseLabel:true,
  },{
    placeholder:"Alignment",
    value:"",
    raiseLabel:true,
  },{
    placeholder:"EXP",
    value:"",
    raiseLabel:true,
  },{
    placeholder:"DCI Number",
    value:"",
    raiseLabel:true,
  }],
}, valuemodifiable = {
  maptype:'ValueAndModifiableRange',
  orientation:'horizontal',
  alignment:'row',
  width:6,
  styleWidth:'fifth',
  category:'abilities',
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
  maptype:'KeyValues',
  orientation:'horizontal',
  alignment:'col',
  width:2,
  styleWidth:'fifth',
  category:'inspirations',
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