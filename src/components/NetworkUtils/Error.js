import React from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    StyleSheet,
    View
} from "react-native"

import typoStyles from '../../assets/styles/typo'

const NetworkErrorComponent = ({message}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={typoStyles.h3}>Error</Text>
            <Text style={typoStyles.body}>{message}</Text>
        </View>
    )
}

export default NetworkErrorComponent

NetworkErrorComponent.propTypes = {
    message: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})