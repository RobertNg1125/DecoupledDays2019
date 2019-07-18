import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Animated,
    TouchableWithoutFeedback,
    StyleSheet,
    View, Easing
} from "react-native"
import { checkSession, saveSession, removeSession } from '../../utils/storage'

import Sprite from './images/star40.png'

class Star extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: false,
            animatedSprite: new Animated.Value(0)
        }
    }
    componentDidMount(): void {
        const { sessionId } = this.props
        checkSession(sessionId)
            .then(isChecked => {
                this.setState({ checked: isChecked })
                Animated.timing(this.state.animatedSprite, {
                    toValue: isChecked ? 27 : 0,
                    duration: 0,
                    easing: Easing.linear
                }).start()
            })
    }

    render() {
        return (
            <TouchableWithoutFeedback {...this.props} onPress={() => this._toggleStar(!this.state.checked)}
                                      style={[this.props.style, styles.button]}>
                <View {...this.props} style={[this.props.style, styles.wrapper]}>
                    <Animated.Image source={Sprite}
                                    style={{...styles.sprite,
                                        transform: [{
                                            translateX: this.state.animatedSprite.interpolate({
                                                inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                                                outputRange: [0, -40, -80, -120, -160, -200, -240, -280, -320, -360, -400, -440, -480, -520, -560, -600, -640, -680, -720, -760, -800, -840, -880, -920, -960, -1000, -1040, -1080],
                                            })
                                        }]
                                    }}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    _toggleStar = (check: boolean) => {
        const { sessionId } = this.props
        this.setState({ checked: check })
        if (check) {
            this._doFancyStarAnimation()
            console.log('checked')
            saveSession(sessionId)
                .then(data => console.log('saved checked', data))
        } else {
            this._resetStart()
            console.log('remove')
            removeSession(sessionId)
                .then(data => console.log('removed', data))
        }

        // Update Asyncstorage
    }

    _resetStart = () => {
        Animated.timing(this.state.animatedSprite, {
            toValue: 0,
            duration: 0,
            easing: Easing.linear
        }).start()
    }

    _doFancyStarAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.animatedSprite, {
                toValue: 0,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 1,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 2,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 3,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 4,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 5,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 6,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 7,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 8,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 9,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 10,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 11,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 12,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 13,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 14,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 15,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 16,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 17,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 18,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 19,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 20,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 21,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 22,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 23,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 24,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 25,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 26,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animatedSprite, {
                toValue: 27,
                duration: 0,
                delay: 40,
                easing: Easing.linear
            })
        ]).start()
    }
}

export default Star

Star.propTypes = {
    sessionId: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        height: 40,
        width: 40,
        overflow: 'hidden'
    },
    wrapper: {
        margin: -8,
        height: 40,
        width: 40,
        position: 'relative',
        overflow: 'hidden',
    },
    sprite: {
        position: 'absolute',
        zIndex: -1
    }
})
