/**
 *  HomeHeaderChanelFlatListCell.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-2-8.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

export default class HomeHeaderChanelFlatListCell extends React.PureComponent {
    static defaultProps = {
        id:'',
        title:""
    };

    _onPress = () => {
        // this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <View
                {...this.props}
                onPress={this._onPress}
            >
                <Text>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({


});