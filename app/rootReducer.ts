import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import sidebar from 'app-store/reducers/sidebar.reducer';
// eslint-disable-next-line import/no-cycle

function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    sidebar,
  });
}

export default createRootReducer;

export type RootState = typeof createRootReducer;
