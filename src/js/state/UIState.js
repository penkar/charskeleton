// @flow
import {observable, action} from 'mobx'
import HashUtilities from '../utilities';

class UIState {
  constructor() {
    this.hash = HashUtilities.hashToJson();
    document.addEventListener('hashchange', this.hashChange)
  }
  @observable menu:boolean = false;
  @observable signedin:boolean = false;
  
  @observable hash:Object = {};
  @action hashChange() {
    this.hash = HashUtilities.hashToJson();
  }
}

const UIStateInst = new UIState
export default UIStateInst
