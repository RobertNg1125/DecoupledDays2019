import callApi from '../../middleware/api'
import normalize from 'jsonapi-normalizer'
import _ from 'lodash'

export const FETCH_SESSIONS_BEGIN = 'FETCH_SESSIONS_BEGIN'
export const FETCH_SESSIONS_SUCCESS = 'FETCH_SESSIONS_SUCCESS'
export const FETCH_SESSIONS_FAILURE = 'FETCH_SESSIONS_FAILURE'

export const fetchSessionsBegin = () => ({
    type: FETCH_SESSIONS_BEGIN
})

export const fetchSessionsSuccess = sessions => ({
    type: FETCH_SESSIONS_SUCCESS,
    payload: { sessions }
})

export const fetchSessionsFailure = error => ({
    type: FETCH_SESSIONS_FAILURE,
    payload: { error }
})

/**
 * Fetch data from API .
 * Then manipulate fetched data.
 *
 * @returns {function(*): (Promise<*>|*|Promise<T | never>)}
 */
export function fetchSessions() {
    return dispatch => {
        dispatch(fetchSessionsBegin())

        return callApi('/jsonapi/node/session' +
            '?include=field_speakers,field_speakers.field_company,field_room' +
            '&sort=-field_time'
            )
            .then(json => normalize(json))
            .then(normalizedData => {
                let sessions = normalizedData['entities']['node--session']; // <- it's an object, we need array
                let speakers = normalizedData['entities']['node--speaker'];
                let rooms = normalizedData['entities']['taxonomy_term--rooms'];
                let companies = normalizedData['entities']['node--company'];

                let sessionArray = [];

                // Loop through each session, attach field data (referenced entities) to session node
                _.each(sessions, session => {

                    // Attach node speaker entities into session entity
                    if (session.field_speakers.length > 0) {
                        let session_speakers = []
                        _.each(session.field_speakers, ({id}) => {
                            const speaker = speakers[id]

                            // Attach company
                            if (!_.isEmpty(speaker.field_company)) {
                                const companyId = speaker.field_company.id
                                speaker.field_company = companies[companyId]
                            }
                            session_speakers.push(speaker)
                        })
                        session.field_speakers = session_speakers
                    }

                    // Attach taxonomy term room entity into session entity
                    if (!_.isEmpty(session.field_room)) {
                        const roomTid = session.field_room.id
                        session.field_room = rooms[roomTid].name
                    }
                    sessionArray.push(session)
                });
                return sessionArray
            })
            .then(sessions => dispatch(fetchSessionsSuccess(sessions)))
            .catch(error => dispatch(fetchSessionsFailure(error)))
    }
}

/**
 * Decide if should fetch data or read out from current state
 * In real world app, this might involve checking for cache lifespan or more complex logic
 *
 * @param state
 * @returns {boolean}
 */
export function shouldFetchSessions(state) {
    return state.sessions.nodes.length === 0
}

export function fetchSessionsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchSessions(getState())) {
            return dispatch(fetchSessions())
        }
    }
}
