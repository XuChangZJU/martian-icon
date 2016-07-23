/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

import {
	Alert,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	Dimensions
} from "react-native";

import React, {
	Component
} from "react";

let MtGrid = require('martian-ui').MtGrid;

const iconGroup = [
	{
		name: "core",
		icons: require("martian-icon/src/path/core"),
		desc: "核心模块中所用的Icon"
	},
	{
		name: "todo",
		desc: "下一个icon组"
	},
	{
		name: "todo",
		desc: "下一个icon组"
	}
];

const length = (Dimensions.get("window").width - 60)/3;
const styles = StyleSheet.create({
	groupItem: {
		width: length,
		height: length,
		// backgroundColor: require("martian-icon/src/constant").defaultValue.color,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "stretch"
	},
	groupItemTitle: {
		fontSize: 30,
		color: "white",
		textAlign: 'center'
	},
	groupItemDesc: {
		fontSize: 14,
		color: "whitesmoke",
		marginLeft: 10,
		marginRight: 10,
		height: 40
	}
});


const defaultColor = require("martian-icon/src/constant").defaultValue.color;

function renderGroupItem(item, idx) {

	function groupClicked() {
		if(item.icons) {
			this.props.navigator.push({
				title: "图标列表",
				view: require("./IconList"),
				props: {
					icons: item.icons,
					name: item.name
				}
			});
		}
		else {
			alert("该图标组尚未实现");
		}
	}

	return (
		<TouchableHighlight style={{backgroundColor: defaultColor}} underlayColor={'cyan'} onPress={groupClicked.bind(this)} key={idx}>
			<View style={styles.groupItem} >
				<View style={{flex: 1, justifyContent: "center"}}>
					<Text style={styles.groupItemTitle}>{item.name}</Text>
				</View>
				<Text style={styles.groupItemDesc} numOfLines={2}>{item.desc}</Text>
			</View>
		</TouchableHighlight>
	);
}

class IconGroup extends Component {
	render() {
		return (
			<MtGrid items={iconGroup} styleRow={{
					marginTop: 20
				}}  itemsPerRow={3} renderItem={renderGroupItem.bind(this)}/>
		);
	}
}

module.exports = IconGroup;
