/**
 * Created by admin on 09/10/2016.
 */
import {CHANGE_CITY} from '../actions/school'

const initialState = { city: null, school: null };

export default function (state = initialState, action = {}) {
    let error;

    switch (action.type) {
        case CHANGE_CITY:
            return {...state, city: action.value };
        default:
            return state;
    }
}