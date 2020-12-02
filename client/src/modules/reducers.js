import { combineReducers } from 'redux';
import { authReducer } from './account';
import { geneeReducer } from './genee';
import { websocketReducer } from './websocket';

const rootReducer = combineReducers({
  auth: authReducer,
  websocket: websocketReducer,
  genee: geneeReducer
});

export default rootReducer;
