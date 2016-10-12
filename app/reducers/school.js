/**
 * Created by admin on 09/10/2016.
 */
import {CHANGE_CITY, SAVE_SCHOOL} from '../actions/school'

const initialState = { city: null, school: null };

export default function (state = initialState, action = {}) {
    let error;

    switch (action.type) {
        case CHANGE_CITY:
            return {...state, city: action.value };
        case SAVE_SCHOOL:
            console.log(action);
        default:
            return state;
    }
}