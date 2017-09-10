import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import TabBar from './components/TabBar';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TabBar navigator={this.props.navigator}></TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    }
}) 