import { CLASSIFIED_ADD_CONTENT , CLASSIFIED_ADD_LINK , CLASSIFIED_ADD_EMAIL , CLASSIFIED_ADD_CONTACT , CLASSIFIED_ADD_CONTACT_2 } from '../action_types';

export const add_classified_content = text => {
    return {
        type : CLASSIFIED_ADD_CONTENT,
        text : text
    }
}