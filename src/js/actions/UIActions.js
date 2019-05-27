// @flow
import * as Constants from '../constants/UIConstants';

export const toggleMenu = () => ({type:Constants.TOGGLE_MENU});

type ChangeView = {type:string, view:string};
export const changeView = ({target}:Object):ChangeView => {
  const view = target.getAttribute('view');
  return {
    type: Constants.CHANGE_VIEW,
    view: view,
  }
}