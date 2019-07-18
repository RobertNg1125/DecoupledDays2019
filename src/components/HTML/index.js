import React from 'react'
import PropTypes from 'prop-types'
import {
    Linking,
    StyleSheet
} from 'react-native'

import HTML from 'react-native-render-html'
import * as FONT from '../../assets/fonts/fontNames'
import * as COLOR from '../../assets/styles/colors'

import typoStyles from '../../assets/styles/typo'

const HTMLElement = ({html}) => {
    return (
        <HTML html={html} baseFontStyle={styles.baseFont}
              // listsPrefixesRenderers={{
              //     ul: () => null // Remove the liststyle
              // }}
              tagsStyles={{
                  p: {...typoStyles.body, marginBottom: 10},
                  br: {display: 'none'},
                  h2: {...typoStyles.h2, marginTop: 8, marginBottom: 8},
                  h3: {...typoStyles.h3, fontSize: 14, marginBottom: 8},
                  ul: {paddingLeft: 8, marginBottom: 0, marginTop: 8},
                  li: {fontSize: 14, marginBottom: 0},
                  a: {color: COLOR.PINK}
              }}
              imagesMaxWidth={400}
              onLinkPress={(evt, href) => { Linking.openURL(href)}}
        />
    )
}

export default HTMLElement

HTMLElement.propTypes = {
    html: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    baseFont: {
        ...typoStyles.body,
        fontSize: 16,
        color: COLOR.BLACK
    }
})
