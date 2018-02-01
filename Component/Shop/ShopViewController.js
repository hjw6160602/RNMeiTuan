/**
 *  ShopViewController.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-1-31.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ShopViewController extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    商城
                </Text>
            </View>
        );
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