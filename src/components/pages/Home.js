import React, { Component } from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchNews } from '../../redux/actions/News';
import { API_BBC_NEWS } from '../../config/Constants'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            data: null,
            msg: null
        }
    }

    render() {
        const { isFetching, data } = this.state;

        if (data !== null) {
            let d = data;
        }
        return (
            <View style={styles.container}>
                {isFetching && <Text>Home Page</Text>}

                {!isFetching && data !== null && data.articles.length > 0 &&
                    <ListView
                        dataSource={data}>
                    </ListView>
                }

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
    return {
        isFetching: state.News.isFetching,
        data: state.News.data,
        msg: state.News.msg || null
    };
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
