// // @flow
// import {observable, action} from 'mobx';
// import stateobject from './stateobject';

// const preprocessArray = (array:Array<Any>):Array => {
//   return array.map(({data, width, alignment, category, maptype, standardwidth}, index) => {
//     switch (maptype) {
//       case 'InputFieldContainer':
//         data = data.map(({placeholder, value, disabled, classes, id, suggestions, raiseLabel}, idx) => ({
//           placeholder:placeholder||"",
//           value:value||"",
//           classes:classes||"",
//           disabled:disabled||false,
//           raiseLabel:raiseLabel||true,
//           id:id||`${category}_${idx}`,
//           suggestions:suggestions||[],
//         }));
//         break;
//       case 'KeyValues':
//         data = data.map(({fieldtype, title, value, classes, id}, idx) => ({
//           fieldtype:fieldtype||"text",
//           title:title||"",
//           classes:classes||"",
//           value:value||0,
//           id:id||`${category}_${idx}`,
//         }));
//         break;
//       case 'ValueAndModifiableRange':
//         data = data.map(({title, value, modifier, specialized, formula, classes, id}, idx) => ({
//           title:title||"",
//           classes:classes||"",
//           specialized:specialized||"",
//           formula:formula||"",
//           value:value||10,
//           modifier:modifier||null,
//           specialized:specialized||false,
//           id:id||`${category}_${idx}`,
//         }));
//         break;
//       case 'VariableInputsRange':
//       default:
//         console.log(data);
//         break;
//     }
//     return ({data, width, alignment, category, maptype, standardwidth});
//   });
// }

// class CharacterState {
//   @observable name:String = "";
//   @observable characterInfo:Array = [];
//   constructor() {
//     this.characterInfo = preprocessArray(stateobject);
//   }

//   @action update = (value, idx, category, field) => {
//     this.characterInfo.find(char => char.category === category).data[idx][field] = value;
//   }
// }
// const CharacterStateInst = new CharacterState
// export default CharacterStateInst
