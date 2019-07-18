import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    Easing,
    Animated,
} from 'react-native'
import DecoupledDays from './images/dd2019.png'

import Layer1 from './images/dd-layer-1.png'
import Layer2 from './images/dd-layer-2.png'
import Layer3 from './images/dd-layer-3.png'
import Layer4 from './images/dd-layer-4.png'
import EvolvingWeb from './images/ew.png'

import * as COLOR from '../../assets/styles/colors'
import typoStyles from '../../assets/styles/typo'

class BootstrapScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        this._bootstrapAsync()
    }

    /**
     * Entry point of the app, handle push notification listener, async actions
     *
     * @returns {Promise<void>}
     * @private
     */
    _bootstrapAsync = () => {
        this.props.navigation.navigate('AppStack');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.logoWrapper}>
                    <Image source={Layer4} style={{...styles.logoLayer, }}/>
                    <Image source={Layer3} style={{...styles.logoLayer, }}/>
                    <Image source={Layer2} style={{...styles.logoLayer, }}/>
                    <Image source={Layer1} style={{...styles.logoLayer, }}/>
                </View>
                <View style={styles.copyright}>
                    <Text style={typoStyles.small}>App by</Text>
                    <Image source={EvolvingWeb}/>
                    <Text style={typoStyles.small}>using React Native</Text>
                </View>
            </View>
        );
    }
}

export default BootstrapScreen

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    copyright: {
        position: 'absolute',
        bottom: 80,
        alignItems: 'center'
    },
    logoWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'yellow'
    },
    logoLayer: {
        position: 'absolute'
    }
})
