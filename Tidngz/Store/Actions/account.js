import { ACCOUNT_PLACES } from './action_types';

export const account_places = (count, result) => {
    return {
        type : ACCOUNT_PLACES,
        count : count, 
        result : result
    }
} 
