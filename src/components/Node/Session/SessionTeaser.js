import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import { withNavigation } from 'react-navigation'

import typoStyles from '../../../assets/styles/typo'
import { formatTime } from '../../../utils/date'
import { getLevel, getTrack, getType } from '../../../data/mapping'

import * as COLOR from '../../../assets/styles/colors'
import * as SCREEN from '../../../navigation/screenNames'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Star from '../../../components/Star'

class SessionTeaser extends React.PureComponent {
    render() {
        const { node } = this.props
        const { field_time, field_speakers,
            field_session_length
        } = node

        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Star sessionId={node.id}/>
                        <View style={{ paddingTop: 8, marginLeft: 4}}>
                            <Text style={{ ...typoStyles.h3, color: COLOR.PINK, marginBottom: 0 }}>{formatTime(field_time)} <Icon name={'clock-outline'} size={14} color={COLOR.GRAY_2}/></Text>
                        </View>
                    </View>
                    {this._renderMetadata(node)}
                </View>

                {this._renderTitle()}
                {this._renderSpeakers(field_speakers)}
                {!_.isNull(field_session_length) &&
                    this._renderTags(node)}
            </View>
        )
    }

    _renderTitle = () => {
        const { node, navigation } = this.props
        const { title, field_session_length } = node
        const titleComponent = <Text style={{...typoStyles.h4, marginBottom: 12}}>{title}</Text>
        if (!_.isNull(field_session_length)) {
            return (
                <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREEN.SESSION_NODE, { node: node })}>
                    {titleComponent}
                </TouchableWithoutFeedback>
            )
        } else {
            return titleComponent
        }
    }

    _renderMetadata = ({field_room, field_session_length}) => {
        let metaData = (typeof field_room === "string") ? field_room : ''
        if (!_.isNull(field_session_length)) {
            metaData = `${field_room} | ${field_session_length} mns`
        }
        return <Text style={{...typoStyles.small, marginTop: 6}}>{metaData}</Text>
    }

    _renderSpeakers = (speakers) => {
        const render = []
        _.each(speakers, speaker => {
            render.push(
                <Text key={speaker.id} style={typoStyles.body}><Text style={{ color: COLOR.PINK }}>—</Text> {speaker.title}</Text>
            )
        })
        return <View style={{ flex: 1}}>{render}</View>
    }

    _renderTags = ({field_session_level, field_session_type, field_session_track}) => {
        return (
            <View style={styles.footer}>
                <Text style={{...styles.label, backgroundColor: COLOR.VERY_LIGHT_BLUE}}>{getLevel(field_session_level).text}</Text>
                {!_.isNull(field_session_track) &&
                <Text style={styles.label}>{getTrack(field_session_track).text}</Text>}

                {!_.isNull(field_session_type) &&
                <Text style={{...styles.label, marginRight: 0}}>{getType(field_session_type).text}</Text>}

            </View>
        )
    }
}

SessionTeaser.propTypes = {
    node: PropTypes.shape({
        title: PropTypes.string.isRequired,
        field_time: PropTypes.string.isRequired
    })
}

export default withNavigation(SessionTeaser)

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 16,
        marginBottom: 8,
        borderRadius: 8
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    footer: {
        flex: 1,
        marginTop: 12,
        flexDirection: 'row',
    },
    label: {
        //flex: 1,
        ...typoStyles.small,
        color: COLOR.BLUE,
        backgroundColor: COLOR.VERY_LIGHT_BLUE,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 6,
        borderRadius: 4,
        fontSize: 11
    }
})
