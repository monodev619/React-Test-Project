/**
 * Created by admin on 09/10/2016.
 */
import React from 'react'
import { Route } from 'react-router'
import App from './containers/app'
import School from './containers/schools'

export default (
    <Route component={App}>
        <Route path="/" component={School}></Route>
    </Route>
)