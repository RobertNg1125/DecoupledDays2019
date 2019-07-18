import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    ScrollView,
    StyleSheet,
    RefreshControl,
    SafeAreaView,
} from 'react-native'

import * as COLOR from '../../assets/styles/colors'

const Layout = ({children, onRefresh, containerStyle}) => {
    const [refreshing] = useState(false)

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing}
                                onRefresh={onRefresh}/>
            }>
                <View style={[styles.container, { padding: 16 }, containerStyle]}>
                    {children}
                </View>
            </ScrollView>
        </View>
    )
}

export default Layout

Layout.propTypes = {
    onRefresh: PropTypes.func,
    containerStyle: PropTypes.object
}

Layout.defaultProps = {
    //noPadding: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.VERY_LIGHT_BLUE
    },
})
