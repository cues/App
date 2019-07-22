import { GET_NOTIFICATIONS, LOADER_NOTIFICATIONS, COUNT_NOTIFICATIONS , REFRESH_NOTIFICATIONS, LOAD_NOTIFICATIONS, UPDATE_NOTIFICATIONS} from './action_types';


export const get_notifications = notification => {
    return {
        type         : GET_NOTIFICATIONS,
        notification : notification,
    }
}

export const count_notifications = (total_records, notification_ids,  number_of_pages) => {
    // console.warn(notification_ids)
    return {
        type                  : COUNT_NOTIFICATIONS,
        total_records         : total_records,
        notification_ids      : notification_ids,
        number_of_pages       : number_of_pages,
    }
}

export const loader_notifications = () => {
    return {
        type : LOADER_NOTIFICATIONS
    }
};



export const refresh_notifications = () => {
    return {
        type : REFRESH_NOTIFICATIONS,
    }
}



export const load_notifications = (current_page, start) => {
    return {
        type            :   LOAD_NOTIFICATIONS,
        current_page    :   current_page,
        start           :   start
    }
}


export const update_notifications = allNotifications => {
    return {
        type           :  UPDATE_NOTIFICATIONS,
        allNotifications :  allNotifications
    }
}




