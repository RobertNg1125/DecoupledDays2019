import React from 'react'
import {
    StyleSheet
} from 'react-native'

import * as FONTS from '../fonts/fontNames'
import * as COLORS from './colors'

const styles = StyleSheet.create({
    h1: {
        fontFamily: FONTS.POPPINS_BOLD,
        fontSize: 28,
        lineHeight: 36,
        color: COLORS.BLUE,
        paddingBottom: 0,
    },
    h2: {
        fontFamily: FONTS.POPPINS_BOLD,
        fontSize: 18,
        lineHeight: 20,
        color: COLORS.BLUE
    },
    h3: {
        fontFamily: FONTS.POPPINS_BOLD,
        fontSize: 16,
        lineHeight: 18,
        color: COLORS.BLACK
    },
    h4: {
        fontFamily: FONTS.POPPINS_MEDIUM,
        fontSize: 16,
        color: COLORS.BLUE
    },
    body: {
        fontFamily: FONTS.POPPINS_REGULAR,
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.BLACK
    },
    small: {
        //fontFamily:FONTS.MULI_REGULAR,
        fontSize: 12,
        color: COLORS.GRAY_2
    }
})

export default styles
