import * as actions from './actions/actions';

const stateReducer = (state = {
  questionsModalOpen: false,
  gettingStartedModal: false,
  questions: []
}, action) => {
  switch (action.type) {

    case actions.GET_ALL_QUESTIONS_SUCCESS:
      return Object.assign({}, state,
      { questions: action.questions, selectedQuestion: action.questions[0] });

    case actions.SAVE_USER_DETAILS:
     return Object.assign({}, state, { userName: action.name, monster: action.monster[0] });

    case actions.TOGGLE_QUESTIONS_MODAL:
      return Object.assign({}, state, { questionsModalOpen: !state.questionsModalOpen });

    case actions.TOGGLE_GETTING_STARTED_MODAL:
      return Object.assign({}, state,
      { gettingStartedModal: !state.gettingStartedModal });

    default:
      return state;

  }
};

export default stateReducer;
