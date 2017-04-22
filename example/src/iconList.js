/**
 * Created by Administrator on 2016/7/23.
 */
"use strict";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Dimensions,
    ScrollView
} from "react-native";

import React, {
    Component
} from "react";

let MtGrid = require('martian-ui').MtGrid;
let MtIcon = require("martian-icon");


const length = (Dimensions.get("window").width - 20)/3;
const styles = StyleSheet.create({
    groupItem: {
        width: length,
        height: length,
        // backgroundColor: require("martian-icon/src/constant").defaultValue.color,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch"
    },
    icon: {
        fontSize: 30,
        color: "white",
        textAlign: 'center'
    },
    itemName: {
        fontSize: 14,
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        textAlign: 'center'
    }
});

function renderListItem(item, idx) {

    function itemClicked() {
        this.props.navigator.push({
            title: "图标详情",
            view: require("./IconDetail"),
            props: {
                group: this.props.name,
                name: item.name
            }
        });
    }

    return (
        <TouchableHighlight style={{backgroundColor: "white"}} underlayColor={'cyan'} onPress={itemClicked.bind(this)} key={idx}>
            <View style={styles.groupItem} >
                <View style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
                    <MtIcon group={this.props.name} name={item.name} size={70}/>
                </View>
                <Text style={styles.itemName} numOfLines={2}>{item.name}</Text>
            </View>
        </TouchableHighlight>
    );
}

class IconList extends Component {
    render() {
        const iconList = [];
        for(let i in this.props.icons) {
            iconList.push({
                name: i,
                path: this.props.icons[i]
            });
        }

        return (
            <ScrollView>
                <MtGrid items={iconList} styleRow={{
					marginTop: 20
				}}  itemsPerRow={3} renderItem={renderListItem.bind(this)}/>
            </ScrollView>
        );
    }
}

module.exports = IconList;

