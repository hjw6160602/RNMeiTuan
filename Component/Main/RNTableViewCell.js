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
    Image,
    Switch,
    Platform,
    StyleSheet,
    TouchableOpacity
} from  'react-native';


export default class RNTableViewCell extends Component {

    //不报警告的正确写法 如果直接写 props:{} 会报警告
    static defaultProps = {
        title: "",  // 标题
        isSwitch: false, // 是否展示开关
        rightTitle: ''
    };

    propTypes: {
        title: Component.propTypes.string.isRequired,
    };

    state = {
        isOn:false
    };

    render(){
        return (
            <TouchableOpacity>
                <View style={styles.containerStyle}>
                    {/* 左边title部分 */}
                    <Text style={ {marginLeft: 8} }>
                        {this.props.title}
                    </Text>

                    {/* 右边的箭頭或者是Switch開關 */}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        )
    }
    renderRightView() {
        // 判断
        if (this.props.isSwitch){ // true
            return(
                <Switch value={this.state.isOn === true}
                        onValueChange={()=>{this.setState({isOn: !this.state.isOn})}}
                        style={{marginRight:8}}
                />
            )
        } else{
            return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}}
                           style={styles.accessoryIndicatorStyle}/>
                </View>
            )
        }
    }

    rightTitle(){
        if(this.props.rightTitle.length > 0){
            return(
                <Text style={ {color:'gray', marginRight:8} }>
                    {this.props.rightTitle}
                </Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        height:Platform.OS === 'ios' ? 44: 38,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 垂直居中
        alignItems:'center'
    },

    accessoryIndicatorStyle:{
        width:8,
        height:13,
        marginRight:8
    }

});