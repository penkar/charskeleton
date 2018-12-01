import {observable} from 'mobx';
import HashUtilities from '../utilities';

class UIState {
  constructor() {
    this.hash = HashUtilities.hashToJson();
  }
  @observable hash:Object = {};

}

const UIStateInst = new UIState
export default UIStateInst
