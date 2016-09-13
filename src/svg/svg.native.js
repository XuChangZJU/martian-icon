/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

import React, {Component} from "react";
import {ART as ReactART, TouchableHighlight, View} from "react-native";
const {
	Group,
	Shape,
	Path,
	Text,
	Transform,
	Surface
} = ReactART;

import {defaultValue, normalizeValue} from "../constant";
import merge from "lodash/merge";
import assign from "lodash/assign";

class Svg extends Component {
	render() {
		const setting = merge({}, defaultValue, this.props);
		normalizeValue(setting);

		const widthScale = setting.width / defaultValue.width;
		const heightScale = setting.height / defaultValue.height;
		const scale = (widthScale > heightScale) ? heightScale : widthScale;			// 一般都是放大吧，制作的默认尺寸是16
		let paths, texts, draws;

		switch (setting.group.toLowerCase().trim()) {
			case "core":
				paths = require("../path/core")[setting.name];
				texts = require("../text/core")[setting.name];
				draws = require("../draw/core")[setting.name];
				break;
			case "rent":
				paths = require("../path/rent")[setting.name];
				texts = require("../text/rent")[setting.name];
				draws = require("../draw/rent")[setting.name];
				break;
			default:
				throw new Error("找不到对应的group名：" + setting.group);
		}

		if(!paths) {
			throw new Error("在group " + setting.group + "下找不到对应的icon名：" + setting.name);
		}

		let shapes = [], idxTotal = 0;
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
		idxTotal += shapes.length;

		if(texts) {
			texts.forEach(
				(text, idx) => {
					shapes.push(
						<Text fill={setting["color" + (idxTotal + idx)] || setting.color} transform={new Transform(text.transform)} font={text.font} children={text.text} key={idxTotal+idx}/>
					);
				}
			);
			idxTotal += texts.length;
		}


		if(draws) {
			draws.forEach(
				(draw, idx) => {
					let path;
					const value = draw.value;
					switch(draw.type.toLowerCase()) {
						case "circle":
							path = Path().moveTo(value.cx, value.cy - value.r).arc(0, value.r * 2, value.r).arc(0, value.r * -2, value.r).close();
							break;
						case "line":
							path = Path().moveTo(value.x1, value.y1).lineTo(value.x2, value.y2).close();
							break;
						case "polyline":
							path = Path().moveTo(value[0][0], value[0][1]);
                            for(let i = 1; i < value.length; i ++) {
                                path.lineTo(value[i][0], value[i][1]);
                            }
                            path.close();
                            break;
						default:
							throw new Error("不支持的draw类型【" + draw.type + "】");
					}
					const props = assign({}, draw.props, {
                        stroke: setting["color" + (idxTotal + idx)] || setting.color || setting.drawStroke,
                        strokeWidth: setting["strokeWidth" + (idxTotal + idx)] || setting.strokeWidth || setting.drawStrokeWidth
                    });
					shapes.push(
						<Shape {...props}
							d={path} key={idxTotal + idx}/>
					)
				}
			)
		}

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
