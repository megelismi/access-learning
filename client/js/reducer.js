import * as actions from "./actions/actions";

const stateReducer = (state = {
  questionsModalOpen: false, 
  questions: [], 
}, action) => {
  switch (action.type) {

    case actions.GET_ALL_QUESTIONS_SUCCESS:
      return Object.assign({}, state, { questions: action.questions, selectedQuestion: action.questions[0] });

    case actions.TOGGLE_QUESTIONS_MODAL: 
      return Object.assign({}, state, { questionsModalOpen: !state.questionsModalOpen });

    default:
      return state;
      
  }
};

export default stateReducer;
