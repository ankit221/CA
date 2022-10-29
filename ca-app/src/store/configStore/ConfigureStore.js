import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from '../reducer/AppReducer'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export const history = createBrowserHistory();
export const allowBack = false;

const reducer = rootReducer(history);
const middleware = routerMiddleware(history);
const composeEnhancers = composeWithDevTools({});

var store = null;

export function configureStore() {
    store = store || createStore(
        reducer,
        composeEnhancers(applyMiddleware(middleware, thunk))
    );
    return {store};
}