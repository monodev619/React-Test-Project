/**
 * Created by admin on 09/10/2016.
 */
'use strict'

import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {routerReducer as routing} from 'react-router-redux'
import school from './school'

const rootReducer = combineReducers({
    routing,
    form: formReducer,
    school
});

export default rootReducer