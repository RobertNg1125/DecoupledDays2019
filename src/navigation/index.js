import React from 'react'
import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import * as TAB from './tabNames'
import * as COLOR from '../assets/styles/colors'

import Bootstrap from '../screens/bootstrap'
import HomeStack from './stacks/home'
import ScheduleStack from './stacks/schedule'
import MyListStack from './stacks/mylist'
import InfoStack from './stacks/info'

const AppStack = createBottomTabNavigator({
    [TAB.HOME]: HomeStack,
    [TAB.SCHEDULE]: ScheduleStack,
    [TAB.My_LIST]: MyListStack,
    [TAB.INFO]: InfoStack
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state

            var iconName
            switch (routeName) {
                case TAB.HOME:
                    iconName = `home`
                    break
                case TAB.My_LIST:
                    iconName = `star`
                    break
                case TAB.SCHEDULE:
                    iconName = `calendar`
                    break
                case TAB.SESSION:
                    iconName = `list`
                    break
                case TAB.INFO:
                    iconName = `info`
                    break
            }
            return <Icon name={iconName} size={20} color={tintColor}/>
        },
    }),
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: COLOR.LIGHT_BLUE,
        style: {
            backgroundColor: COLOR.BLUE,
            paddingTop: 6,
        },
        labelStyle: {
        }
    },
})

const switchStack = createSwitchNavigator({
    Bootstrap: Bootstrap,
    AppStack: AppStack
}, {
    initialRouteName: 'Bootstrap'
})

export default createAppContainer(switchStack)
