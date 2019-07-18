import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'

const KEY_SESSIONS = '@key_sessions'

/**
 * Append a session into saved list.
 *
 * @param sessionId
 * @returns {Promise<*|void>}
 */
export const saveSession = async (sessionId) => {
    try {
        let sessions = await getSessions() || []
        sessions.push(sessionId)
        await AsyncStorage.setItem(KEY_SESSIONS, JSON.stringify(_.uniq(sessions)))
        return await getSessions()
    } catch (e) {
        // saving error
        console.log('Error saving', e)
    }
}

/**
 * Check if a sessionId is already in the saved list.
 *
 * @param sessionId
 * @returns {Promise<boolean>}
 */
export const checkSession = async (sessionId) => {
    let sessions = await getSessions()
    return _.indexOf(sessions, sessionId) >= 0
}

/**
 * Get all the saved sessions.
 *
 * @returns {Promise<any>}
 */
export const getSessions = async () => {
    try {
        const value = await AsyncStorage.getItem(KEY_SESSIONS)
        if(value !== null) {
            return JSON.parse(value)
        }
    } catch(e) {
        console.log('Error getting all session', e)
    }
}

/**
 * Remove a session from the saved list.
 *
 * @param sessionId
 * @returns {Promise<any>}
 */
export const removeSession = async (sessionId) => {
    try {
        const sessions = await getSessions()
        let index = _.indexOf(sessions, sessionId)
        if (index >= 0) {
            sessions.splice(index, 1)
            await AsyncStorage.setItem(KEY_SESSIONS, JSON.stringify(_.uniq(sessions)))
            return await getSessions()
        }
    } catch (e) {
        console.log('Error removing session', e)
    }
}
