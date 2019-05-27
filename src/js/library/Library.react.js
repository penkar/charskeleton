// @flow
import React from 'react';
import {connect} from 'react-redux';
import * as UIActions from '../actions/UIActions';
import Parameters from './Parameters';

import NavMenu from '../view/NavMenu';
import InputFieldContainer from '../lib/InputFieldContainer';
import TextAreas from '../lib/TextAreas';
import ValueAndModifiableRange from '../lib/ValueAndModifiableRange';
import KeyValues from '../lib/KeyValues';

const mapStateToProps = (state, ownProps) => {
  return state;
}
const mapDispatchToActions =  (dispatch, ownProps) => {
  return ({
    dispatch,
    UIActions,
  });
}


type State = {key:string,}
type Props = {
  dispatch:Function,
  UIActions:Object,
  UIState:Object,
  CharacterState:Object,
}

class Library extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props);
    this.state = { key:'valuemodifiable'};
  }
  render() {
    const UIAction = this.props.UIActions;
    return (
      <div className="Library">
        <NavMenu {...this.props.UIState} actions={UIAction}>
          <a view='input' onClick={UIActions.changeView}>Inputs</a>
          <a view='keyvalues' onClick={UIActions.changeView}>Key - Values</a>
          <a view='textareas' onClick={UIActions.changeView}>Text Areas</a>
          <a view='valuemodifiable' onClick={UIActions.changeView}>Value and Modifiable</a>
          <a view='styleparams' onClick={UIActions.changeView}>Style Parameters</a>
        </NavMenu>

        { this._content() }
      </div>
    );
  }

  _content = () => {
    return null;
    // let content, title;
    // console.log(this.state.key);
    // switch (this.state.key) {
    //   case "textareas":
    //     content = <TextAreas {...charprops}/>, title = "Text Areas"; break;
    //   case "input":
    //     content = <InputFieldContainer {...charprops}/>, title = "Input"; break;
    //   case "valuemodifiable":
    //     content = <ValueAndModifiableRange {...charprops}/>, title = "Value Modifiable"; break;
    //   case "keyvalues":
    //   default:
    //     content = <KeyValues {...charprops}/>, title = "Value Modifiable"; break;
    // }

    // return (
    //   <Parameters title={title}>
    //     { content }
    //   </Parameters>
    // )
  }
}

export default connect(mapStateToProps, mapDispatchToActions)(Library)

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