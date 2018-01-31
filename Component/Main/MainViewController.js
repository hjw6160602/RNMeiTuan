/**
 *  MainViewController.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-1-17.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'

export default class MainViewController extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'home'
        };

    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <TabNavigator>
                    <TabNavigator.Item
                        title='首页'
                        renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                        onPress={() => {}}
                    />
                    <TabNavigator.Item
                        title='商家'
                    />
                    <TabNavigator.Item
                        title='我的'
                    />
                    <TabNavigator.Item
                        title='更多'
                    />
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    iconStyle:{

    }

});

