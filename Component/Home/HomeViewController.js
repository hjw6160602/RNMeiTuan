/**
 *  HomeViewController.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-1-31.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import HomeDetailViewController from './HomeDetailViewController';

export default class HomeViewController extends Component {
    render() {
        return <View style={styles.container}>
            <TouchableOpacity onPress={() => this.pushToDetail()}>
                <Text style={styles.welcome}>
                    首页
                </Text>
            </TouchableOpacity>
        </View>;
    }

    pushToDetail() {
        this.props.navigator.push({
            component: HomeDetailViewController, //要跳转的控制器
            title: '详情页'
        })
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});