/**
 *  MoreViewController.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-1-31.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


import RNTableViewCell from '../Main/RNTableViewCell'

export default class MoreViewController extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ScrollView>

                    <View style={{marginTop:8}}>
                        <RNTableViewCell
                            title = "扫一扫"
                        />
                    </View>
                    <View style={{marginTop:8}}>
                        <RNTableViewCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <RNTableViewCell
                            title="消息提醒"
                        />
                        <RNTableViewCell
                            title="邀请好友使用码团"
                        />
                        <RNTableViewCell
                            title="清空缓存"
                            rightTitle="1.99M"
                        />
                    </View>

                    <View style={{marginTop:8}}>
                        <RNTableViewCell
                            title="问卷调查"
                        />
                        <RNTableViewCell
                            title="支付帮助"
                        />
                        <RNTableViewCell
                            title="网络诊断"
                        />
                        <RNTableViewCell
                            title="关于码团"
                        />
                        <RNTableViewCell
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop:8}}>
                        <RNTableViewCell
                            title="精品应用"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return(
            <View style={styles.navigationBarStyle}>
                <Text style={styles.titleStyle}>
                    更多
                </Text>
                <TouchableOpacity onPress={ ()=>{alert('点了!')} } style={styles.navBarItemStyle} >
                <Image source={{uri: 'icon_mine_setting'}} style={styles.navBarImgStyle} />
                </TouchableOpacity>
            </View>
        )
    }

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },

    navigationBarStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },

    titleStyle: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },

    navBarItemStyle: {
        position:'absolute',
        top: Platform.OS === 'ios' ? 28 : 8,
        right: 8,
        width: 24,
        height: 24
    },

    navBarImgStyle: {
        width:24,
        height:24
    }
});