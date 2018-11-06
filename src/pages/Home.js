import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// import { fetchNews } from './redux/actions/News';

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
        this.props.onShowDetail(item);
    }

    render() {
        const { isFetching, data } = this.props;

        if (data !== null) {
            let d = data;
        }

        return (
            <View style={styles.container}>
                <Text>{`Home Page`}</Text>
            </View>
        )
    }

    componentDidMount() {
        //this.props.fetchNews();
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

export default connect(mapStateToProps)(Home);

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
