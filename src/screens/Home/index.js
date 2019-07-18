import React from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Image,
    View
} from "react-native"

import Layout from '../../components/Layout'
import typoStyles from '../../assets/styles/typo'

import Background from './images/Background.png'
import DDLogoSymbol from './images/DDLogoSymbol.png'
import DD2019logo from './images/DD2019logo.png'
import Drop1 from './images/Drop1.png'
import Drop2 from './images/Drop2.png'
import Drop3 from './images/Drop3.png'
import Drop4 from './images/Drop4.png'
import Drop5 from './images/Drop5.png'

import Oval1 from './images/Oval1.png'
import Oval2 from './images/Oval2.png'
import Oval3 from './images/Oval3.png'
import Oval4 from './images/Oval4.png'
import Oval5 from './images/Oval5.png'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const HomeScreen = () => {
    return (
        <Layout containerStyle={{ padding: 0}}>
            <ImageBackground source={Background} style={styles.background}>
                <View style={{ flex: 1, marginHorizontal: 32, marginTop: 120, marginBottom: 70, justifyContent: 'space-between', zIndex: 2}}>
                    <View style={{}}>
                        <Text style={{...typoStyles.h2, color: 'white'}}>{`July 17-18`.toUpperCase()}</Text>
                        <Image source={DD2019logo}/>
                    </View>
                    <Image source={DDLogoSymbol} style={{ alignSelf: 'center'}}/>
                </View>

                <View style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 1}}>
                    <Image source={Drop1} style={[styles.drop, {top: 60, left: 10}]}/>
                    <Image source={Drop2} style={[styles.drop, {top: 80, right: 50}]}/>
                    <Image source={Drop3} style={[styles.drop, {top: 250, left: 220}]}/>
                    <Image source={Drop4} style={[styles.drop, {top: 80, left: 50}]}/>
                    <Image source={Drop5} style={[styles.drop, {top: 210, right: 30}]}/>

                    <Image source={Oval1} style={[styles.drop, {top: 230, right: 60}]}/>
                    <Image source={Oval2} style={[styles.drop, {top: 180, right: 30}]}/>
                    <Image source={Oval3} style={[styles.drop, {top: 45, left: 35}]}/>
                    <Image source={Oval4} style={[styles.drop, {top: 50, right: 50}]}/>
                    <Image source={Oval5} style={[styles.drop, {top: 70, right: 20}]}/>
                </View>
            </ImageBackground>
        </Layout>
    )
}

export default HomeScreen

HomeScreen.propTypes = {

}

const styles = StyleSheet.create({
    background: {
        height: HEIGHT,
        width: WIDTH
    },
    drop: {
        position: 'absolute'
    }
})
