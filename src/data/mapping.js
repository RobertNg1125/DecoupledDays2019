import * as COLOR from "../assets/styles/colors";

export const getLevel = (level) => {
    let option = {
        backgroundColor: COLOR.GRAY_2,
    }
    switch (level) {
        case 'session-level-beginner':
            option = Object.assign(option, { text: 'Beginner'})
            break
        case 'session-level-intermediate':
            option = Object.assign(option, { text: 'Intermediate'})
            break
        case 'session-level-advanced':
            option = Object.assign(option, { text: 'Advanced'})
            break
        default:
            option = Object.assign(option, { text: 'Intermediate'})
            break
    }
    return option
}

export const getTrack = (track) => {
    let option = {
        backgroundColor: COLOR.GRAY_2,
    }
    switch (track) {
        case 'session-track-javascript':
            option = Object.assign(option, { text: 'Javascript & JAMStack'})
            break
        case 'session-track-headless':
            option = Object.assign(option, { text: 'Headless CMS'})
            break
        case 'session-track-drupal':
            option = Object.assign(option, { text: 'Decoupled Drupal'})
            break
        case 'session-track-people':
            option = Object.assign(option, { text: 'People & Community'})
            break
        case 'session-track-buisiness':
            option = Object.assign(option, { text: 'Business/CXO'})
            break
        default:
            option = Object.assign(option, { text: track})
            break
    }
    return option
}

export const getType = (type) => {
    let option = {
        backgroundColor: COLOR.GRAY_2,
    }
    switch (type) {
        case 'session-type-concept':
            option = Object.assign(option, { text: 'Concept'})
            break
        case 'session-type-hands-on':
            option = Object.assign(option, { text: 'Hands on'})
            break
        case 'session-type-case-study':
            option = Object.assign(option, { text: 'Case study'})
            break
        case 'session-type-people':
            option = Object.assign(option, { text: 'People & Community'})
            break
        case 'session-type-business':
            option = Object.assign(option, { text: 'Business/CXO'})
            break
        default:
            option = Object.assign(option, { text: type})
            break
    }
    return option
}