import { HEADLINE } from '../action_types';

export const headline = headline => {
    return {
        type : HEADLINE,
        headline : headline
    }
}