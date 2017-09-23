import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TabBar from './components/TabBar';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

const store = configureStore();

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TabBar navigator={this.props.navigator}></TabBar>
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