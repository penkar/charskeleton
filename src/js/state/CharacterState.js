import {observable, action} from 'mobx';
import stateobject from './stateobject';

class CharacterState {
  @observable name:String = "";
  @observable characterInfo:Array = [];
  constructor() {
    this.characterInfo = stateobject;
  }

  @action update = (value, idx, category) => {
    this.characterInfo.find(char => char.category === category).data[idx].value = value;
  }
}
const CharacterStateInst = new CharacterState
export default CharacterStateInst
