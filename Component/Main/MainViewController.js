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
                {/*首页*/}
                <TabNavigator.Item
                    title='首页'
                    renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                    onPress={() => {this.setState({selectedTab:'home'})} }
                    selected={this.state.selectedTab === 'home'} >
                    <Navigator
                        initialRoute={{name:'home', component:HomeViewController}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator) => {
                            let  Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
                </TabNavigator.Item>
                {/*商家*/}
                <TabNavigator.Item
                    title='商家'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={() => {this.setState({selectedTab:'shop'})} }
                    selected={this.state.selectedTab === 'shop'}>
                    <Navigator
                        initialRoute={{name:'shop', component:ShopViewController}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator) => {
                            let  Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    title='我的'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={() => {this.setState({selectedTab:'profile'})} }
                    selected={this.state.selectedTab === 'profile'}>
                    <Navigator
                        initialRoute={{name:'profile', component:ProfileViewController}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator) => {
                            let  Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
                </TabNavigator.Item>
                {/*更多*/}
                <TabNavigator.Item
                    title='更多'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={() => {this.setState({selectedTab:'more'})} }
                    selected={this.state.selectedTab === 'more'} >
                    <Navigator
                        initialRoute={{name:'more', component:MoreViewController}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator) => {
                            let  Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}
                    />
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

