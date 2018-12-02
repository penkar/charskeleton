import {observable, action} from 'mobx'

const props = {
  disabled:false,
  placeholder:"Placeholder",
  callback:(textvalue, id, category)=> {},
  id:"ID0001",
  category:"ID fields",
  value:"Checkob",
  suggestions:[],
  raiseLabel:true,
  classes:"",
  width:"third",
}

class CharacterState {
  @observable name:String = "";
  @observable props:Object = props;

  @action update = (value, id, category) => {
    this.props.value = value;
  }
}
const CharacterStateInst = new CharacterState
export default CharacterStateInst
