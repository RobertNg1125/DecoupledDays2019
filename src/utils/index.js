import {
    Platform,
    Dimensions
} from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height

export const isIPhoneX = () => {
    return Platform.OS === 'ios' && SCREEN_HEIGHT >= 812
}