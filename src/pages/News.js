import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// import { fetchNews } from '../redux/actions/News';

class News extends Component {
    renderRow = (item) => {
        return (
            <TouchableOpacity onPress={() => this.goDetail(item)}>
                <View style={styles.item}>
                    <View style={styles.sum}>
                        <Image style={styles.thumb} source={{ uri: item.urlToImage }} />
                        <View style={styles.title}>
                            <Text style={{ fontSize: 16, color: 'blue' }}>
                                {item.title}
                            </Text>
                            <Text style={{ fontSize: 12, color: '#000000' }}>
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

    renderList(data) {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

        return (
            <ListView
                dataSource={ds.cloneWithRows(data)}
                renderRow={(item) => { return this.renderRow(item); }}>
            </ListView>
        )
    }

    goDetail(item) {
        //this.props.onShowDetail(item);
    }

    render() {
        const { isFetching, data } = this.props;

        if (data !== null) {
            let d = data;
        }

        return (
            <View style={styles.container}>
                {isFetching && <Text>Loading News</Text>}

                {!isFetching && data !== null && data.articles && this.renderList(data.articles)}

                {!isFetching && data === null && <Text>No News</Text>}
            </View>
        )
    }

    componentDidMount() {
        //this.props.dispatch(fetchNews(API_BBC_NEWS));
    }
}

function mapStateToProps(state) {
    const newState = {
        isFetching: state.News.isFetching,
        data: state.News.data,
        msg: state.News.msg || null
    };

    return newState;
}

export default connect(mapStateToProps)(News);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        flexDirection: 'column',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderColor: 'silver',
        backgroundColor: '#F6F6F6',
        margin: 3
    },
    sum: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 0.3,
        margin: 3
    },
    thumb: {
        width: 50,
        height: 50,
    },
    title: {
        marginLeft: 6
    },
    description: {
        flex: .7,
        margin: 3
    }
}) 