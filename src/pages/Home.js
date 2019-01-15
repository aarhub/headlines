import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { doFetchNews } from '../redux/actions/News';

class Home extends Component {
    renderRow = (item) => {
        return (
            <TouchableOpacity onPress={() => this.goDetail(item)}>
                <View style={styles.item}>
                    <View style={styles.sum}>
                        <Image style={styles.thumb} source={{ uri: item.urlToImage }} />
                        <View style={styles.title}>
                            <Text style={{ flex: 1, fontSize: 16, color: 'blue' }}>
                                {item.title}
                            </Text>
                            <Text style={{ flex: 1, fontSize: 12, color: '#000000' }}>
                                {item.author}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderList() {
        const { isFetching, result } = this.props; console.log(isFetching);
        if (isFetching) {
            return <Text>loading data...</Text>
        }

        return (
            <FlatList
                dataSource={result && result.articles}
                renderItem={(item) => {
                    console.log(item);
                    return this.renderRow(item);
                }}>
            </FlatList>
        )
    }

    goDetail(item) {
        this.props.onShowDetail(item);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderList()}
            </View>
        )
    }

    componentDidMount() {
        this.props.doFetchNews();
    }
}

function mapStateToProps(state) {
    const newState = {
        isFetching: state.doHandleRequestNews.isFetching,
        result: state.doHandleRequestNews.result,
    };

    return newState;
}

export default connect(mapStateToProps, { doFetchNews })(Home);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        flexDirection: 'column',
        alignItems: 'center'
    },
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderColor: 'silver',
        backgroundColor: '#F6F6F6',
        padding: 10,
        margin: 3,
        marginLeft: 5,
        marginRight: 5
    },
    sum: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 0.3
    },
    thumb: {
        width: 50,
        height: 50,
    },
    title: {
        marginLeft: 6
    },
    description: {
        flex: .7
    }
}) 
