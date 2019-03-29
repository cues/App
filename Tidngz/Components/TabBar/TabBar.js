import { Platform, StatusBar } from 'react-native'
import { tabBarType } from '../../Store/Actions/index';


import { store } from '../../Store/configureStore';

// // const hideTabBar = () => {
// //         dispatch.this_tabBarAnimation()
// //         setTimeout(() => {
// //             dispatch.this_tabBarVisible()
// //         },500)
// //     }

// // const showTabBar = () => {
// //         dispatch.this_tabBarVisible()
// //         dispatch.this_tabBarAnimation()
// //     }


export const tabBarType_Article = () => {
    store.dispatch(tabBarType('article'));
}

export const tabBarType_Normal = () => {
    store.dispatch(tabBarType('normal'));
}

export const tabBarType_Menu = () => {
    store.dispatch(tabBarType('menu'));
}

export const hideStatusBar = () => {
          Platform.OS == 'ios' ?  StatusBar.setHidden(true, 'slide') : null ;
    }

export const showStatusBar = () => {
        Platform.OS == 'ios' ?  StatusBar.setHidden(false, 'slide') : null ;
    }


