import { combineReducers } from 'redux';
import sushiReducer from './sushiReducer';
import walletReducer from './walletReducer';

const rootReducer = combineReducers({
  sushi: sushiReducer,
  wallet: walletReducer
})

export default rootReducer;
