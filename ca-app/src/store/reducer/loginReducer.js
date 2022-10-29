import {CA_LOGIN} from '../actions/Action';


export default function loginReducer (state, action) {
    switch (action.type) {
        case CA_LOGIN:
            return{
                ...state,
                data: action
            }
    
        default:
            return {...state};
    }
}