import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

import Layout from '../../components/Layout'
import HTML from '../../components/HTML'
import Location from './Location'

import DDLogoWithText from './images/dd-with-text.png'

class InfoScreen extends React.PureComponent {
    render() {
        const intro = `
            <div class="container">
            <h2>The only conference on the future of CMS, headlessCMS, and decoupledCMS.</h2>
            <p>In its third year after a successful debut in 2017, <strong>Decoupled Days</strong> is a conference for architects, developers, and businesspeople involved in implementing decoupled CMS architectures. The 2019 edition is scheduled for <strong>July 17–18, 2019</strong> in <strong>New York City</strong>.</p>
            <p>Decoupled architectures use a CMS (Drupal, WordPress, etc) as a content service for other non-CMS applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.</p>
            </div>  
        `
        return (
            <Layout>
                <View style={styles.infoWrapper}>
                    <Image source={DDLogoWithText}/>
                    <Location/>
                    <HTML html={intro}/>

                </View>
            </Layout>
        )
    }
}

export default InfoScreen

const styles = StyleSheet.create({
    infoWrapper: {
        flex: 1,
        marginBottom: 16,
    },
})
