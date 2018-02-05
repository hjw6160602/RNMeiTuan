/**
 *  RNTableViewCell.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-2-5.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Platform,
} from  'react-native';


export default class RNTableViewCell extends Component {

    //不报警告的正确写法 如果直接写 props:{} 会报警告
    static defaultProps = {
        title: "",  // 标题
    };

    propTypes: {
        title: Component.propTypes.string.isRequired,
    };

    state = {
        isOn:false
    };

    render(){
        return (<View style={styles.containerStyle}>
            {/* 左边title部分 */}
            <Text style={ {marginLeft: 8} }>
                {this.props.title}
            </Text>

        </View>)
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        height:Platform.OS === 'ios' ? 40: 30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 垂直居中
        alignItems:'center'
    },

});

