import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Store/configureStore';
import App from './App';
import { name as appName } from './app.json';


const React_Native_Redux = () => (
    <Provider store = {store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => React_Native_Redux);

