import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';

export default class Message extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Message Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}) 