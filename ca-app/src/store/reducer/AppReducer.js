import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import { connectRouter } from 'connected-react-router';

const allReducers = (history) => 
    combineReducers({
        router: connectRouter(history),
        login: loginReducer
    })


const rootReducer = (history) => (state, action) => {
    return allReducers(history)(state, action)
}
export default rootReducer;