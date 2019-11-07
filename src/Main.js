import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabBar from './pages/TabBar';
import Detail from './pages/detail';

const screens = StackNavigator({
    Bars: { screen: TabBar },
    Detail: { screen: Detail }
})

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TabBar navigator={screens}></TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
}) 