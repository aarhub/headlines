import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, Switch } from 'react-native';

import { getWidth } from '../../utils/px2dp';

export default class My extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image style={styles.thumb} source={{ uri: 'https://avatars0.githubusercontent.com/u/3346188?s=400&u=3bdc5b7acec5a8e27a78e1c0f9ed3173c2be9164&v=4' }} />
                    <View style={styles.title}>
                        <Text style={{ flex: 1, fontSize: 20, color: '#FFFFFF', marginTop: 3 }}>
                            {`F.Achilles`}
                        </Text>
                    </View>
                </View>

                <View style={styles.settings}>
                    <View style={styles.item}>
                        <View style={styles.social}>
                            <Image style={styles.social} />
                            <Image />
                            <Image />
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Text>{`Auto Update`}</Text>
                        <Switch />
                    </View>
                    <View style={styles.sources}>
                        {this.constructSources()}
                    </View>
                </View>
            </View>
        )
    }

    constructSources = () => {
        const shit = [
            { name: 'Github', imgUrl: '' }, { name: 'Twitter', imgUrl: '' }, { name: 'Facebook', imgUrl: '' },
            { name: 'Google', imgUrl: '' }];

        return shit.map((item, index) => {
            return (
                <View key={item.name} style={{ width: 80, height: 100, backgroundColor: 'yellow', marginBottom: 5 }}>
                    <Text>{item.name}</Text>
                </View>
            )
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'silver',
        height: '100%'
    },
    profile: {
        width: '100%',
        height: getWidth() / 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'rgb(0,152,249)'
    },
    thumb: {
        width: 80,
        height: 80,
        marginTop: getWidth() / 4,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FFFFFF'
    },
    title: {
    },
    settings: {
        width: getWidth() - 40,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -20,
    },
    item: {
        backgroundColor: '#F6F6F6',
        height: 30,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    sources: {
        backgroundColor: '#F6F6F6',
        borderRadius: 5,
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}) 