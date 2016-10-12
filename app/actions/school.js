/**
 * Created by admin on 09/10/2016.
 */
import axios from 'axios'

export const SAVE_SCHOOL = 'SAVE_SCHOOL';
export const CHANGE_CITY = 'CHANGE_CITY';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : 'api';

export function changeCity(value) {
    return {
        type: CHANGE_CITY,
        value
    };
}

export function saveSchool(formValues) {
    const request = axios.post(`${ROOT_URL}/school/save`, formValues);

    return {
        type: SAVE_SCHOOL,
        payload: request
    }
}