import React from 'react'
import { Text } from 'react-native'
import {createStackNavigator} from "react-navigation";
import SessionScreen from "../../screens/Session/Index";
import Icon from 'react-native-vector-icons/Ionicons'

import * as SCREEN from "../screenNames";
import SessionNodeScreen from "../../screens/entities/Session";
import UserScreen from "../../screens/entities/User";
import defaultNavigationOptions from '../styles'

const SessionStack = createStackNavigator({
    [SCREEN.SCHEDULE]: {
        screen: SessionScreen,
        navigationOptions: {
            headerLeft: null
        }
    },
    [SCREEN.SESSION_NODE]: {
        screen: SessionNodeScreen,
        navigationOptions: { title: 'Session'}
    },
    [SCREEN.USER_FULL]: {
        screen: UserScreen,
        navigationOptions: { title: 'Speaker'}
    }
}, {
    defaultNavigationOptions: ({navigation}) => {
        return {
            ...defaultNavigationOptions,
            headerLeft: <Icon name={'ios-arrow-back'}
                             size={24}
                             style={{marginHorizontal: 16}}
                             onPress={() => navigation.goBack()}/>
        }
    }
})

export default SessionStack