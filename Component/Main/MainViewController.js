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
    Platform,
    Image,
} from 'react-native'


let HomeViewController = require('../Home/HomeViewController');
let ShopViewController = require('../Shop/ShopViewController');
let ProfileViewController = require('../Profile/ProfileViewController');
let MoreViewController = require('../More/MoreViewController');

export default class MainViewController extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'home'
        };
    }

    render(){
        return(
            <TabNavigator>
                {/*首页*/}
                <TabNavigator.Item
                    title='首页'
                    renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                    onPress={() => {this.setState({selectedTap:'home'})} }
                    selected={this.state.selectedTab === 'home'} >
                    <HomeViewController/>
                </TabNavigator.Item>
                {/*商家*/}
                <TabNavigator.Item
                    title='商家'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={() => {this.setState({selectedTap:'shop'})} }
                    selected={this.state.selectedTab === 'shop'}>
                    <ShopViewController/>
                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    title='我的'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={() => {this.setState({selectedTap:'profile'})} }
                    selected={this.state.selectedTab === 'profile'}>
                    <ProfileViewController/>
                </TabNavigator.Item>
                {/*更多*/}
                <TabNavigator.Item
                    title='更多'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={() => {this.setState({selectedTap:'more'})} }
                    selected={this.state.selectedTab === 'more'} >
                    <MoreViewController/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});

