import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './redux/user';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(promiseMiddleware());
export default createStore(reducer, composeWithDevTools(middleware));