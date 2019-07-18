import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import Layout from '../../components/Layout'
import _ from 'lodash'

import { fetchSessions } from '../../redux/actions/sessionActions'
import { getSessions } from '../../utils/storage'
import NetworkError from "../../components/NetworkUtils/Error";
import NetworkLoading from "../../components/NetworkUtils/Loading";
import SessionTeaser from '../../components/Node/Session/SessionTeaser'
import typoStyles from '../../assets/styles/typo'

class MyListScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedSessions: [],
            allSessions: []
        }

        this.props.navigation.addListener('didFocus', () => this._loadData())
    }
    componentDidMount(): void {
        this._loadData()
    }

    _loadData = () => {
        this.props.dispatch(fetchSessions())
        getSessions()
            .then(savedSessions => this.setState({savedSessions: savedSessions}))
    }

    _filterData = () => {
        const { sessions } = this.props
        const savedSessions = this.state.savedSessions

        return _.filter(sessions, session => {
            return _.indexOf(savedSessions, session.id) >= 0
        })
    }

    render() {
        const { loading, error } = this.props
        let content = null
        if (error) {
            content = <NetworkError message={error.toString()} />
        } else if (loading) {
            content = <NetworkLoading/>
        } else {
            const data = this._filterData()

            if (_.isEmpty(data)) {
                content = <Text style={typoStyles.body}> Such an empty list 🤷‍</Text>
            } else {
                content = <FlatList data={data}
                                    renderItem={({item}) => <SessionTeaser node={item}/>}
                                    keyExtractor={(item, index) => item.id}
                />
            }
        }
        return (
            <Layout onRefresh={this._loadData}>
                {content}
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    sessions: state.sessions.nodes,
    loading: state.sessions.loading,
    error: state.sessions.error
})

export default connect(mapStateToProps)(MyListScreen)
