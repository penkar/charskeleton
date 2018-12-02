import {observable, action} from 'mobx';
import stateobject from './stateobject';

const preprocessArray = (array) => {
  return array.map(({data, width, alignment, category, maptype, standardwidth}, index) => {
    switch (maptype) {
      case 'InputFieldContainer':
      default:
        data = data.map(({placeholder, value, disabled, classes, id, suggestions, raiseLabel}, idx) => ({
          placeholder:placeholder||"",
          value:value||"",
          disabled:disabled||false,
          classes:classes||"",
          id:id||`${category}_${idx}`,
          suggestions:suggestions||[],
          raiseLabel:raiseLabel||true,
          classes:classes||""
        }));
        break;
    }
    return ({data, width, alignment, category, maptype, standardwidth});
  })

}

class CharacterState {
  @observable name:String = "";
  @observable characterInfo:Array = [];
  constructor() {
    this.characterInfo = preprocessArray(stateobject);
  }

  @action update = (value, idx, category) => {
    this.characterInfo.find(char => char.category === category).data[idx].value = value;
  }
}
const CharacterStateInst = new CharacterState
export default CharacterStateInst
