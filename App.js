/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import MainViewController from "./Component/Main/MainViewController";

export default class App extends Component<{}> {
    render() {
        return(
            <View style={styles.container}>
                <MainViewController/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 整体的样式
    container: {
        flex:1,
        backgroundColor: '#F5FCFF'
    }
});
