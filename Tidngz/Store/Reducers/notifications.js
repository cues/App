import { GET_NOTIFICATIONS, LOADER_NOTIFICATIONS, COUNT_NOTIFICATIONS,  REFRESH_NOTIFICATIONS, LOAD_NOTIFICATIONS, UPDATE_NOTIFICATIONS} from '../Actions/action_types';

const initialState = {
    allNotifications         :  [{
                                    key : 1,
                                    notification : {
                                        notifications_id  : 1,
                                        type:'inital'
                                    }
                                }],
    loader                  :  false,
    start                   :  0,
    records_per_page        :  3,
    current_page            :  1,
    total_records           :  null,
    number_of_pages         :  null,
    notification_ids        :  null,
    selectedNotification    :  null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case REFRESH_NOTIFICATIONS :
            return {
                ...state,
                allNotifications         :  [{
                                                key : 1,
                                                notification : {
                                                    notifications_id  : 1,
                                                    type:'inital'
                                                }
                                            }],
                loader             :  false,
                start              :  0,
                records_per_page   :  10,
                current_page       :  1,
                number_of_pages    :  null,
                total_records      :  null,
            }
        case GET_NOTIFICATIONS :
            return {
                ...state,
                allNotifications : state.allNotifications.concat({
                    key           :   `${action.notification.notifications_id}`, 
                    notification  :   action.notification
                }),
            }
        case LOADER_NOTIFICATIONS :
            return {
                ...state,
                loader:true
            }
        case COUNT_NOTIFICATIONS: 
            return {
                ...state,
                total_records         : action.total_records,
                notification_ids      : action.notification_ids,
                number_of_pages       : action.number_of_pages,
            }
        case LOAD_NOTIFICATIONS :
            return {
                ...state,
                current_page : action.current_page,
                start        : action.start
            }
        case UPDATE_NOTIFICATIONS :
            return {
                ...state,
                allNotifications : action.allNotifications
            }
        default:
            return state;
    }

}

export default reducer ;