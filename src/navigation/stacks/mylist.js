import {createStackNavigator} from "react-navigation";
import MyListScreen from "../../screens/MyList";
import defaultNavigationOptions from '../styles'

const MyListStack = createStackNavigator({
    Main: {
        screen: MyListScreen,
        navigationOptions: { title: 'My List' }
    }
}, {
    defaultNavigationOptions: defaultNavigationOptions
})
export default MyListStack