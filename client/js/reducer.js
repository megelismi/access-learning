import * as actions from "./actions/actions";

const stateReducer = (state = {
  questionsModalOpen: false
}, action) => {
  switch (action.type) {

    case actions.TOGGLE_QUESTIONS_MODAL: 
      return Object.assign({}, state, { questionsModalOpen: !state.questionsModalOpen });

    default:
      return state;
      
  }
};

export default stateReducer;
