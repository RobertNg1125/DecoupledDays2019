import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    StyleSheet
} from 'react-native'

import * as COLORS from '../../assets/styles/colors'

import DrupalNorthLogo from './images/drupal-north.png'
import HamburgerMenu from './images/hamburger.png'

class Header extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight>
                    <Image source={DrupalNorthLogo}/>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Image source={HamburgerMenu}/>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: COLORS.GRAY_1,
        borderBottomWidth: 1
        //backgroundColor: '#cecece'
    },
})
