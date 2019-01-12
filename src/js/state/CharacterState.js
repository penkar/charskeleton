// @flow
import {observable, action, computed} from 'mobx';
// import stateobject from './stateobject';

class CharacterState {
  @observable name:string = "";
  @observable characterInfo:Array<Object> = [];
  skeleton:Object = {};

  @action update = ({value, idx, category, field}:Object) => {
    const parameter = this.characterInfo.find(char => char.category === category);
    parameter.data[idx][field] = value;
  }
  @action setLibraryCharacterInfo(snippet:Object) {
    this.characterInfo = [snippet];
  }
  @action setSkeleton(skeleton:Object) {
    this.skeleton = skeleton;
  }
  @computed get getLibraryCharacterInfo() {
    return this.characterInfo[0] || {};
  }
}

const CharacterStateInst = new CharacterState
export default CharacterStateInst
