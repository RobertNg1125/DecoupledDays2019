import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native'

import Layout from '../../../components/Layout'
import typoStyles from '../../../assets/styles/typo'
import HTML from '../../../components/HTML'
import UserProfile from './images/user.png'
import * as COLOR from "../../../assets/styles/colors";
import {getLevel, getTrack, getType} from "../../../data/mapping";

class SessionNodeScreen extends React.PureComponent {
    render() {
        const { navigation } = this.props
        const { state : { params: { node }}} = navigation

        const { title, body: { value }, field_speakers } = node

        return (
            <Layout>
                <Text style={typoStyles.h1}>{title}</Text>
                {this._renderSpeakers(field_speakers)}
                {this._renderTags(node)}
                <HTML html={value}/>
            </Layout>
        )
    }

    _renderSpeakers = (speakers) => {
        let render = []
        _.each(speakers, speaker => {

            const { field_company } = speaker
            const component = (
                <View key={speaker.id} style={styles.speaker}>
                    <Image source={UserProfile}/>
                    <View style={{ marginLeft: 8, flex: 1, flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...typoStyles.h4}}>{speaker.title}</Text>

                        {!_.isNull(field_company.title) &&
                            <Text style={{...typoStyles.body, flex: 1}}>{field_company.title}</Text>}
                    </View>
                </View>
            )
            render.push(component)
        })

        return render
    }

    _renderTags = ({field_session_level, field_session_type, field_session_track}) => {
        return (
            <View style={styles.footer}>
                <Text style={{...styles.label}}>{getLevel(field_session_level).text}</Text>
                {!_.isNull(field_session_track) &&
                <Text style={styles.label}>{getTrack(field_session_track).text}</Text>}

                {!_.isNull(field_session_type) &&
                <Text style={{...styles.label, marginRight: 0}}>{getType(field_session_type).text}</Text>}

            </View>
        )
    }
}

SessionNodeScreen.propTypes = {}

SessionNodeScreen.defaultProps = {}

export default SessionNodeScreen

const styles = StyleSheet.create({
    speaker: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4,
        marginBottom: 4,
    },
    footer: {
        flex: 1,
        marginBottom: 16,
        flexDirection: 'row',
    },
    label: {
        //flex: 1,
        ...typoStyles.small,
        color: COLOR.BLUE,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 6,
        borderRadius: 4,
        fontSize: 11
    }
})
