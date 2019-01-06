// @flow
import {observable, action, computed} from 'mobx';
// import stateobject from './stateobject';

class CharacterState {
  @observable name:string = "";
  @observable characterInfo:Array<Object> = [];
  @action update = (value:string, idx:number, category:string, field:string) => {
    const parameter = this.characterInfo.find(char => char.category === category);
    console.log('update', value, idx, category, field);
    parameter.data[idx][field] = value;
  }
  @action setLibraryCharacterInfo = (snippet:Object) => {
    this.characterInfo = [snippet];
  }
  @computed get getLibraryCharacterInfo() {
    return this.characterInfo[0] || {};
  }
}

const CharacterStateInst = new CharacterState
export default CharacterStateInst
