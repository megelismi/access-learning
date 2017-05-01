
export const TOGGLE_QUESTIONS_MODAL = "TOGGLE_QUESTIONS_MODAL";
export const toggleQuestionsModal = () => ({
  type: TOGGLE_QUESTIONS_MODAL
});

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

export const getAllQuestions = () => dispatch => {
  return fetch("/questions")
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
};

