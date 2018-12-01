import {observable, action} from 'mobx'
import HashUtilities from '../utilities';

class UIState {
  constructor() {
    this.hash = HashUtilities.hashToJson();
    document.addEventListener('hashchange', this.hashChange)
  }
  @observable menu:Boolean = false;
  @observable signedin:Boolean = false;
  
  @observable hash:Object = {};
  @action hashChange() {
    this.hash = HashUtilities.hashToJson();
  }
}

const UIStateInst = new UIState
export default UIStateInst
