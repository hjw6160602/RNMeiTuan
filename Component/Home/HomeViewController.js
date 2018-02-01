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
    TextInput,
    Image,
    Platform,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import HomeDetailViewController from './HomeDetailViewController';

let {width, height} = Dimensions.get('window');

export default class HomeViewController extends Component {
    render() {
        return <View style={styles.container}>
            {/*首页的导航条*/}
            {this.renderNaviBar()}
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

    renderNaviBar() {
        return(<View style={styles.navBarStyle}>
            <Text style={{color:'white'}}>上海</Text>
            <TextInput
                placeholder="输入商家、品类、商圈"
                style={styles.topInputStyle}
            />
            {/*右边*/}
            <View style={styles.rightNavViewStyle}>
                <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                </TouchableOpacity>
            </View>
        </View>)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    navBarStyle:{ // 导航条样式
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',

        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    navRightImgStyle:{ // 设置图片的大小
        width:Platform.OS === 'ios' ? 28: 24,
        height:Platform.OS === 'ios' ? 28: 24
    },

    topInputStyle:{ // 设置输入框
        width:width * 0.71,
        height:Platform.OS === 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop: Platform.OS === 'ios' ? 18 : 0,

        // 设置圆角
        borderRadius:17,

        // 内左边距
        paddingLeft:10
    },

    rightNavViewStyle:{
        flexDirection:'row',
        // backgroundColor:'blue',
        height:64,
        // 设置侧轴的对齐方式
        alignItems:'center'
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});