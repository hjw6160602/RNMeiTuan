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
            {/*左边的定位城市*/}
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.cityTxtViewStyle}>
                    <Text style={{color:'white'}}>
                        齐齐哈尔
                    </Text>
                </View>
            </TouchableOpacity>

            {/*中间的输入框*/}
            <TextInput
                placeholder="输入商家、品类、商圈"
                style={styles.topInputStyle}
            />

            {/*右边的两个BarButtonItem*/}
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

let width = Dimensions.get('window').width;
let itemHeight
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    navBarStyle:{ // 导航条样式
        // 根据不同平台设置其高度
        height: Platform.OS === 'ios' ? 64 : 44,
        // 设置NavigationBar的背景颜色
        backgroundColor:'rgba(255,96,0,1.0)',
        // 设置主轴的方向
        flexDirection:'row',
        // 设置侧轴的对齐方式: 垂直居中
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-space-between'
    },

    cityTxtViewStyle: {
        marginLeft:8,
        marginTop:20,
        height:40,
        width:80,
        justifyContent: 'center',
        backgroundColor:'blue'
    },

    navRightImgStyle:{ // 设置图片的大小
        width:Platform.OS === 'ios' ? 28: 24,
        height:Platform.OS === 'ios' ? 28: 24
    },

    topInputStyle:{ // 设置输入框
        marginLeft: 8,
        marginRight: 8,
        // width:width * 0.71,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        // 在不同平台上的高度
        height:Platform.OS === 'ios' ? 33 : 30,
        // 背景颜色
        backgroundColor:'white',
        // 设置圆角
        borderRadius:17,
        // 内左边距
        paddingLeft:10
    },

    rightNavViewStyle:{
        flexDirection:'row',
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