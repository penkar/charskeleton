// @flow
import {observable, action} from 'mobx';
// // import stateobject from './stateobject';

class CharacterState {
  @observable name:string = "";
  @observable characterInfo:Array<Object> = [];
  @action update = (value:string, idx:number, category:string, field:string) => {
    const parameter = this.characterInfo.find(char => char.category === category);
    parameter.data[idx][field] = value;
  }
}

const CharacterStateInst = new CharacterState
export default CharacterStateInst
