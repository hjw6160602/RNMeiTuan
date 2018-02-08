/**
 *  MainViewController.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-1-17.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React, {Component} from 'react';
// 从0.44版本开始，Navigator被从核心组件库中剥离到了deprecated-custom-components的单独模块中
import { Navigator } from 'react-native-deprecated-custom-components'

import TabNavigator from 'react-native-tab-navigator'
import {
    StyleSheet,
    Platform,
    Image,
} from 'react-native';

import HomeViewController from '../Home/HomeViewController';
import ShopViewController from '../Shop/ShopViewController';
import ProfileViewController from '../Profile/ProfileViewController';
import MoreViewController from '../More/MoreViewController';

export default class MainViewController extends Component {
    state = {
        selectedTab:'home',// 默认是第一个
    };

    render(){
        return(
            <TabNavigator>
                {/*--首页--*/}
                {this.addChildViewController('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', HomeViewController)}
                {/*--商家--*/}
                {this.addChildViewController('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', ShopViewController)}
                {/*--我的--*/}
                {this.addChildViewController('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', ProfileViewController)}
                {/*--更多--*/}
                {this.addChildViewController('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', MoreViewController)}
            </TabNavigator>
        )
    }

    // 每一个TabBarItem
    addChildViewController(title, iconName, selectedIconName, selectedTab, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标
                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badgeText}
            >
                <Navigator
                    initialRoute={{name:title,component:component}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },

    selectedTitleStyle:{
        color:'#ef5100'
    }
});

