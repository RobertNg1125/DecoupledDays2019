import React from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    Linking,
    Dimensions
} from "react-native"
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import * as COLOR from '../../assets/styles/colors'
import Map from "./images/map.png";

const WIDTH = Dimensions.get('window').width

class Location extends React.PureComponent {
    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableWithoutFeedback onPress={this._openMap}>
                    <View style={styles.textWrapper}>
                        <Icon name={'location-pin'} size={24} color={COLOR.LIGHT_BLUE}/>
                        <View style={styles.info}>
                            <Text style={styles.location}>John Jay College of Criminal Justice</Text>
                            <Text style={styles.address}>524 W 59th St, New York, NY 10019</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this._openMap}>
                    <Image source={Map} style={{ width: WIDTH - 32, height: (WIDTH - 32) * 0.627, marginBottom: 32}}/>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    _openMap = () => {
        const mapURL = 'https://www.google.com/maps/place/524+W+59th+St,+New+York,+NY+10019,+USA/data=!4m2!3m1!1s0x89c2585955cedda1:0xdc09b5fd14ae9008?sa=X&ved=2ahUKEwjDj_TzzLnjAhV8Ap0JHTJzBJ4Q8gEwAHoECAoQAQ'
        Linking.canOpenURL(mapURL)
            .then((supported) => {
                if (!supported) {
                    console.log("Can't handle url: " + mapURL);
                } else {
                    return Linking.openURL(mapURL);
                }
            })
            .catch((err) => console.error('An error occurred', err));
    }
}

export default Location

Location.propTypes = {

}

const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 16,
    },
    info: {
        flex: 1,
        marginLeft: 8,
    },
    location: {
        fontSize: 14
    },
    address: {
        color: COLOR.LIGHT_BLUE,
        fontSize: 14
    }
})
