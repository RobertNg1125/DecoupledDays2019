import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    Text,
    View,
    FlatList
} from 'react-native'
import { withNavigation } from 'react-navigation'

import {
    fetchSessions
} from '../../redux/actions/sessionActions'
import {
    NetworkError,
    NetworkLoading
} from '../../components/NetworkUtils'

import Layout from '../../components/Layout'
import typoStyles from '../../assets/styles/typo'
import SessionTeaser from '../../components/Node/Session/SessionTeaser'

class ScheduleWrapper extends React.PureComponent {
    componentDidMount(): void {
        const { sessions } = this.props
        if (sessions.length === 0) {
            this.props.dispatch(fetchSessions())
        }
    }

    render() {
        const { sessions, loading, error, date } = this.props

        // Filter sessions from state by date
        const sessionsByDate = _.filter(sessions,
            ({field_time}) => field_time.indexOf(date) !== -1)

        // Reverse order because of JSON:API issue
        const sortedSessionsByDate = _.reverse(sessionsByDate)

        let content = null
        if (error) {
            content = <NetworkError message={error.toString()} />
        } else if (loading) {
            content = <NetworkLoading/>
        } else {
            content =
                <FlatList data={sortedSessionsByDate}
                          renderItem={({item}) => <SessionTeaser node={item} />}
                          keyExtractor={(item) => item.id}
                />
        }

        return (
            <Layout onRefresh={this._loadData}
                     title={this.props.title}>
                <Text style={{...typoStyles.h1, marginBottom: 16}}>{this.props.title}</Text>
                {content}
            </Layout>
        )
    }
}

ScheduleWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string
}

const mapStateToProps = state => ({
    sessions: state.sessions.nodes,
    loading: state.sessions.loading,
    error: state.sessions.error,
})

export default withNavigation(connect(mapStateToProps)(ScheduleWrapper))
