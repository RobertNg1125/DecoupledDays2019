import React from 'react'
import { combineReducers } from 'redux'
import sessions from './sessionsReducer'

const rootReducer = combineReducers({
    sessions
})

export default rootReducer
