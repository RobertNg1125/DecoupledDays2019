import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import AppNavigator from './navigation'

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}
