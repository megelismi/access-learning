import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import { loadState, saveState } from './localStorage';

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(reducer, persistedState, composeEnhancers(
  applyMiddleware(thunk, logger)
));

store.subscribe(() => {
  saveState({
    monster: store.getState().monster,
    userName: store.getState().userName
  });
});


export default store;
