import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import ContactThumbnail from '../components/ContactThumbnail'
import DetailListItem from '../components/DetailListItem'

import { fetchRandomContact } from '../utils/api';

import colors from '../utils/colors'

export default class Profile extends Component {

    static navigationOptions = ({ navigation: {state: { params }}}) => {
        console.log(params)
        const { contact: { name } } = params
        return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: colors.blue,
            }
        }
    }

    state = {
        contact: {},
    }

    async componentDidMount() {
        const contact = await fetchRandomContact()

        this.setState({
            contact
        })
    }

    render() {
        const { navigation: { state: { params } }} =  this.props
        const { contact } = params
        const { avatar, name, phone, cell } = contact

        return (
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <ContactThumbnail avatar={avatar} name={name} phone={phone} />
                </View>
                <View style={styles.detailsSection}>
                    <DetailListItem icon="mail" title="Email" />
                    <DetailListItem icon="phone" title="Work" />
                    <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    }
})