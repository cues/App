import { createStore , combineReducers , compose } from 'redux';
import mainReducer from './Reducers/main';
import loginReducer from './Reducers/login';
import articlesReducer from './Reducers/articles';
import searchReducer from './Reducers/search';
import commentsReducer from './Reducers/comments';
import themesReducer from './Reducers/themes';
import weatherReducer from './Reducers/weather';

const reducers = combineReducers({
    main             : mainReducer,
    login            : loginReducer,
    articles         : articlesReducer,
    search           : searchReducer,
    comments         : commentsReducer,
    themes           : themesReducer,
    weather          : weatherReducer
});

let composeEnhancers = compose;
composeEnhancers = __DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose


const configureStore = () => {
    return createStore(reducers , composeEnhancers());
}

export const store = configureStore();

export default configureStore;

