import {createStackNavigator} from "react-navigation";
import InfoScreen from "../../screens/Info";
import defaultNavigationOptions from '../styles'

const InfoStack = createStackNavigator({
    Main: {
        screen: InfoScreen,
        navigationOptions: { title: 'Info'}
    }
}, {
    defaultNavigationOptions: defaultNavigationOptions,
})

export default InfoStack