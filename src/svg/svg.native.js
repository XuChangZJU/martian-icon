/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

import React, {Component} from "react";
import {ART as ReactART, TouchableHighlight, View} from "react-native";
const {
	Group,
	Shape,
	Surface
} = ReactART;

import {defaultValue, normalizeValue} from "../constant";
import merge from "lodash/merge";

class Svg extends Component {
	render() {
		const setting = merge({}, defaultValue, this.props);
		normalizeValue(setting);

		const widthScale = setting.width / defaultValue.width;
		const heightScale = setting.height / defaultValue.height;
		const scale = (widthScale > heightScale) ? heightScale : widthScale;			// 一般都是放大吧，制作的默认尺寸是16
		let paths;

		switch (setting.group.toLowerCase().trim()) {
			case "core":
				paths = require("../path/core")[setting.name];
				break;
			default:
				throw new Error("找不到对应的group名：" + setting.group);
		}

		if(!paths) {
			throw new Error("在group " + setting.group + "下找不到对应的icon名：" + setting.name);
		}

		let shapes = [];
		paths.forEach(
			(path, idx) => {
				shapes.push(
					(
						<Shape fill={setting["color" + idx] || setting.color} stroke={setting["stroke" + idx] || setting.stroke} strokeWidth={setting["strokeWidth" + idx] || setting.strokeWidth}
							   d={path} key={idx}/>
					)
				)
			}
		);

		let on
		if(setting.touchable) {
			return (
				<TouchableHighlight style={{backgroundColor: setting.backgroundColor}} underlayColor={setting.underlayColor} onPress={setting.onPress}>
					<View>
						<Surface width={setting.width} height={setting.height}>
							<Group scale={scale}>
								{shapes}
							</Group>
						</Surface>
					</View>
				</TouchableHighlight>
			);
		}
		return (
			<Surface width={setting.width} height={setting.height}>
				<Group scale={scale}>
					{shapes}
				</Group>
			</Surface>
		);
	}
}

module.exports = Svg;
