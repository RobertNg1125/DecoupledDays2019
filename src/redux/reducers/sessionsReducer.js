import {
    FETCH_SESSIONS_BEGIN,
    FETCH_SESSIONS_SUCCESS,
    FETCH_SESSIONS_FAILURE
} from '../actions/sessionActions'

const initial = {
    loading: false,
    error: null,
    nodes: [],
    lastFetch: 0
}

export default function sessionsReducer(state = initial, action) {
    switch (action.type) {
        case FETCH_SESSIONS_BEGIN:
            // Mark the state as "loading", show a spinner
            // And reset any error
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_SESSIONS_SUCCESS:
            // Fetch successfully
            return {
                ...state,
                loading: false,
                nodes: action.payload.sessions,
                lastFetch: Date.now()
            }
        case FETCH_SESSIONS_FAILURE:
            // Request failed, so we save the error, so that we can display it somewhere
            // Stop the loading and reset the nodes array
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                nodes: []
            }
        default:
            return state
    }
}