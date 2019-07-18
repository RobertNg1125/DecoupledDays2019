import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import typoStyles from '../../../assets/styles/typo'
import Star from '../../../components/Star'

import * as COLOR from '../../../assets/styles/colors'
import * as SCREEN from '../../../navigation/screenNames'

const SessionListItem = ({session, navigation}) => {
    const { title, field_room, field_speakers, id } = session

    return (
        <View style={{ paddingVertical: 8, flexDirection: 'row'}}>
            <Star sessionId={id}/>
            <View style={{marginLeft: 8, flex: 1}}>
                <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SESSION_NODE, {type: 'session', uuid: session.id})}>
                    <Text style={{...typoStyles.body}}>{title}</Text>
                </TouchableOpacity>

                <Text style={{...typoStyles.small, color: '#222222'}}>{field_speakers}</Text>

                {!_.isEmpty(field_room) &&
                <View style={styles.attributeWrapper}>
                    <Icon name={'map-marker'} size={16} color={COLOR.BLUE}/>
                    <Text style={{...typoStyles.small, color: '#505D68'}}>{field_room.name}</Text>
                </View>}
            </View>

        </View>
    )
}

SessionListItem.propTypes = {
    session: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}

export default withNavigation(SessionListItem)

const styles = StyleSheet.create({
    timeslotWrapper: {
        marginBottom: 12,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 4,
    },
    attributeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    attributeText: {
        ...typoStyles.body,
        marginLeft: 2,
    },
})