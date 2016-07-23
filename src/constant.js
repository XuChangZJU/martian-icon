/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

const defaultSize = 16;
module.exports = {
	defaultValue: {
		x: 0,
		y: 0,
		width: defaultSize,
		height: defaultSize,
		size: defaultSize,
		color: "#FF630E",
		onDisableColor: "#D3D3D3",
		group: "core",
		name: "password",
		disabled: false,
		touchable: false,
		backgroundColor: 'white',
		underlayColor: 'cyan',
		onPress: () => {
			alert("点击了图标");
		}
	},
	normalizeValue: function(v) {
		if(v.size !== defaultSize && v.width === defaultSize) {
			v.width = v.size;
		}
		if(v.size !== defaultSize && v.height === defaultSize) {
			v.height = v.size;
		}
		if(v.disabled) {
			v.color = v.onDisableColor;
		}
	}
};
