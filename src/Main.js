import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TabBar from './components/TabBar';
import Detail from './components/pages/Detail';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

const store = configureStore();
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
            <Provider store={store}>
                <View style={styles.container}>
                    <TabBar navigator={screens}></TabBar>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    }
}) 