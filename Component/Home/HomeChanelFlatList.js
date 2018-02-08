/**
 *  HomeChanelFlatList.js
 *  RNMeiTuan
 *
 *  Created by SaiDicaprio on 18-2-7.
 *  Copyright (c) 2018 SaiDicaprio. All rights reserved.
 */

import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';


// export default class HomeChanelFlatList extends React.PureComponent {
//     static defaultProps = {
//         data:[{id: 'a'}, {id: 'b'}],
//     };
//
//     state = {
//         selected: (new Map(): Map<string, boolean>)
//     };
//
//     _onPressItem = (id: string) => {
//         // updater functions are preferred for transactional updates
//         this.setState((state) => {
//             // copy the map rather than modifying state.
//             const selected = new Map(this.state.selected);
//             selected.set(id, !selected.get(id)); // toggle
//             return {selected};
//         });
//     };
//
//     _renderItem = ({item}) => (
//         <FlatListCell
//             id={item.id}
//             onPressItem={this._onPressItem}
//             selected={!!this.state.selected.get(item.id)}
//             title={item.key}
//         />
//     );
//
//     render() {
//         return(
//             <FlatList
//                 data={this.props.data}
//                 extraData={this.state}
//                 keyExtractor={this._keyExtractor}
//                 renderItem={this._renderItem}
//             />
//         )
//     }
// }

/** 首页头部频道入口cell */
import HomeHeaderChanelFlatListCell from './HomeHeaderChanelFlatListCell'

export default class HomeChanelFlatList extends React.PureComponent {

    // {key: 'a'}, {key: 'b'}
    static defaultProps = {
        data: [
            {
                id: '0',
                data: 'data1'
            },
            {
                id: '1',
                data: 'data2'
            }
        ],
    };

    // 默认情况下每行都需要提供一个不重复的key属性。
    // 你也可以提供一个keyExtractor函数来生成key
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => (
        <HomeHeaderChanelFlatListCell
            style = {styles.cellStyle}
            id = {item.id}
            title = {item.data}
        />
    );

    _separator = () => {
        return <View style={{height:1,backgroundColor:'gray'}}/>;
    };

    render() {
        return(
            <FlatList
                data={this.props.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ItemSeparatorComponent = {this._separator}
            />
        )
    }
}

const styles = StyleSheet.create({
    cellStyle:{
        flex:1,
        height:44,
        backgroundColor:'white'
    }

});