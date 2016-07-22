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
		group: "core",
		name: "password"
	},
	normalizeValue: function(v) {
		if(v.size !== defaultSize && v.width === defaultSize) {
			v.width = v.size;
		}
		if(v.size !== defaultSize && v.height === defaultSize) {
			v.height = v.size;
		}
	}
};
