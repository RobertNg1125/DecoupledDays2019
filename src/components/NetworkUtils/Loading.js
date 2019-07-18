import React from 'react'
import {
    Text,
    StyleSheet,
    View
} from "react-native"

import typoStyles from '../../assets/styles/typo'

const NetworkLoadingComponent = (props) => {
    return (
        <View {...props} style={[props.style, styles.wrapper]}>
            <Text style={typoStyles.body}>Loading ...</Text>
        </View>
    )
}

export default NetworkLoadingComponent

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})