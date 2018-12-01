import {observable} from 'mobx'

class CharacterState {
  @observable name:String = ""
}
const CharacterStateInst = new CharacterState
export default CharacterStateInst
