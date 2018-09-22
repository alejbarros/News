import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers/index';
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory';
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));