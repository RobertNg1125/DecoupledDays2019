import React from "react"
import {
    createMaterialTopTabNavigator,
    createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons"

import * as COLOR from '../../assets/styles/colors'
import * as FONT from '../../assets/fonts/fontNames'
import * as SCREEN from '../screenNames'

import Day1Screen from '../../screens/Schedule/Day1'
import Day2Screen from '../../screens/Schedule/Day2'
import SessionNodeScreen from '../../screens/entities/Session'

import defaultNavigationOptions from '../styles'

const MaterialTopTabStack = createMaterialTopTabNavigator({
    [SCREEN.SCHEDULE_DAY_1]: {
        screen: Day1Screen,
        navigationOptions: {
            title: 'July 17th',
        }
    },
    [SCREEN.SCHEDULE_DAY_2]: {
        screen: Day2Screen,
            navigationOptions: {
            title: 'July 18th',
        }
    },
}, {
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: COLOR.PINK,
        inactiveTintColor: COLOR.BLUE,
        pressOpacity: 1,
        style: {
            backgroundColor: COLOR.VERY_LIGHT_BLUE,

        },
        labelStyle: {
            fontFamily: FONT.POPPINS_MEDIUM,
            letterSpacing: 0.2
        },
        indicatorStyle: {
            backgroundColor: COLOR.PINK
        }
    }
})
const ScheduleStack = createStackNavigator({
    [SCREEN.SCHEDULE]: {
        screen: MaterialTopTabStack,
        navigationOptions: { title: 'Schedule' }
    },
    [SCREEN.SESSION_NODE]: {
        screen: SessionNodeScreen,
        navigationOptions: { title: 'Session' }
    }
}, {
    defaultNavigationOptions: ({navigation}) => {
        return {
            ...defaultNavigationOptions,
            // headerLeft: <Icon name={'ios-arrow-back'}
            //                   size={24}
            //                   style={{marginHorizontal: 16}}
            //                   onPress={() => navigation.goBack()}/>
        }
    }
})

export default ScheduleStack
