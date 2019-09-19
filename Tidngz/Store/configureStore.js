import { createStore , combineReducers , compose } from 'redux';
import mainReducer from './Reducers/main';
import loginReducer from './Reducers/login';
import articlesReducer from './Reducers/articles';
import searchReducer from './Reducers/search';
import accountReducer from './Reducers/account';
import commentsReducer from './Reducers/comments';
import notificationsReducer from './Reducers/notifications';
import themesReducer from './Reducers/themes';
import weatherReducer from './Reducers/weather';
import addArticlesReducer from './Reducers/Add/articles';
import addVideosReducer from './Reducers/Add/videos';
import addClassifiedReducer from './Reducers/Add/classified';

const reducers = combineReducers({
    main             : mainReducer,
    login            : loginReducer,
    articles         : articlesReducer,
    search           : searchReducer,
    account          : accountReducer,
    comments         : commentsReducer,
    notifications    : notificationsReducer,
    themes           : themesReducer,
    weather          : weatherReducer,
    addArticles      : addArticlesReducer,
    addVideos        : addVideosReducer,
    addClassified    : addClassifiedReducer,
});

let composeEnhancers = compose;
composeEnhancers = __DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose


const configureStore = () => {
    return createStore(reducers , composeEnhancers());
}

export const store = configureStore();

export default configureStore;

