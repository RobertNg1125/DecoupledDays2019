import {createStackNavigator} from "react-navigation";
import HomeScreen from '../../screens/Home'
import defaultNavigationOptions from '../styles'
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const HomeStack = createStackNavigator({
    Main: {
        screen: HomeScreen,
        navigationOptions: { header: null, headerBackTitle: null }
    },
})

export default HomeStack
