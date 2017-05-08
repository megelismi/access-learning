export const GET_ALL_QUESTIONS_SUCCESS = "GET_ALL_QUESTIONS_SUCCESS";
export const getAllQuestionsSuccess = questions => ({
  type: GET_ALL_QUESTIONS_SUCCESS,
  questions
});

export const GET_ALL_QUESTIONS_ERROR = "GET_ALL_QUESTIONS_ERROR";
export const getAllQuestionsError = error => ({
  type: GET_ALL_QUESTIONS_ERROR,
  error
});

export const SAVE_USER_DETAILS = "SAVE_USER_DETAILS";
export const saveUserDetails = (name, monster) => ({
  type: SAVE_USER_DETAILS,
  name,
  monster
});

export const TOGGLE_QUESTIONS_MODAL = "TOGGLE_QUESTIONS_MODAL";
export const toggleQuestionsModal = () => ({
  type: TOGGLE_QUESTIONS_MODAL
});

export const TOGGLE_GETTING_STARTED_MODAL = "TOGGLE_GETTING_STARTED_MODAL";
export const toggleGettingStartedModal = () => ({
  type: TOGGLE_GETTING_STARTED_MODAL
});

//server calls

export const getAllQuestions = () => dispatch => fetch("/questions")
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(questions => {
    dispatch(getAllQuestionsSuccess(questions));
  }).catch(error => {
    dispatch(getAllQuestionsError(error));
  });



