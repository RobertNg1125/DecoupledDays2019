import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    Text,
    StyleSheet,
    View
} from "react-native"
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import typoStyles from "../../../assets/styles/typo";
import * as SCREEN from '../../../navigation/screenNames'
import * as COLOR from '../../../assets/styles/colors'
import { openURL } from '../../../utils/link'

import HTML from "../../HTML";
import SpeakerCard from "../../User/Card";

const NodeSession = ({ node, author, navigation }) => {
    if (_.isNull(node) || _.isNull(author)) return null

    const { title, body, field_speakers, field_slides } = node

    const { name,
        id,
        field_company_organization,
        field_job_title,
        user_picture
    } = author

    const avatarUri = _.isEmpty(user_picture)
        ? null
        : user_picture.meta.imageDerivatives.links.speaker_small.href

    return (
        <View style={styles.wrapper}>
            <Text style={typoStyles.h1}>{title}</Text>

            <SpeakerCard name={name}
                         jobTitle={field_job_title}
                         organization={field_company_organization}
                         avatarUri={avatarUri}
                         imageSize={50}
                         onPress={() => navigation.navigate(SCREEN.USER_FULL, { uuid: author.id})}
                         wrapperStyle={{ marginVertical: 16, alignItems: 'flex-start'}}
            />

            <HTML html={body.value}/>

            {field_slides && <View style={{ flexDirection: 'row', marginTop: 8}}>
                <Icon name={'note'} size={14} color={COLOR.PINK} />
                <Text style={{...typoStyles.body, color: COLOR.PINK, marginLeft: 8}}>{field_slides.uri}</Text>
            </View>}
        </View>
    )
}

export default withNavigation(NodeSession)

NodeSession.propTypes = {
    node: PropTypes.shape({}),
    author: PropTypes.shape({})
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})