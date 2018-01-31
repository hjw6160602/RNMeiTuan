/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform ,
    StyleSheet,
    View
} from 'react-native';
import MainViewController from "./Component/Main/MainViewController";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
