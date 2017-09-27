import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchNews } from '../../redux/actions/News';
import { API_BBC_NEWS } from '../../config/Constants'

class Home extends Component {
    renderList(data) {
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

        return (
            <ListView
                dataSource={ds.cloneWithRows(data)}
                renderRow={(item) => {
                    return (
                        <Text>{item.title}</Text>
                    )
                }}>
            </ListView>
        )
    }

    render() {
        const { isFetching, data } = this.props;

        if (data !== null) {
            let d = data;
        }

        return (
            <View style={styles.container}>
                {isFetching && <Text>Home Page</Text>}

                {!isFetching && data !== null && data.articles && this.renderList(data.articles)}

                {!isFetching && data === null &&
                    <Text>
                        No News
                    </Text>
                }
            </View>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchNews(API_BBC_NEWS));
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}) 
