/**
 * Created by Administrator on 2016/9/8.
 */
"use strict";
const defaultColor = require('../constant').defaultValue.color;

module.exports = {
	"add":  [
		{
			type: "line",
			value: {
				x1: 7.968,
				y1: 0.427,
				x2: 7.968,
				y2: 15.573
			},
			props: {
				strokeWidth: 1
			}
		},
		{
			type: "line",
			value: {
				x1: 15.541,
				y1: 7.823,
				x2: 0.395,
				y2: 7.823
			},
			props: {
				strokeWidth: 1
			}
		}
	],
	"right": [
		{
			type: "line",
			value: {
				x1:	0.571,
				y1: 7.839,
				x2: 6.402,
				y2: 12.484
			},
			props: {
				strokeWidth: 1
			}
		},
		{
			type: "line",
			value: {
				x1: 6.402,
				y1: 12.484,
				x2: 15.428,
				y2: 4.541
			},
			props: {
				strokeWidth: 1
			}
		}
	],
	"right2": [
		{
			type: "line",
			value: {
				x1:	4.697,
				y1: 7.737,
				x2: 7.322,
				y2: 9.828
			},
			props: {
				strokeWidth: 0.75
			}
		},
		{
			type: "line",
			value: {
				x1: 7.322,
				y1: 9.828,
				x2: 11.385,
				y2: 6.253
			},
			props: {
				strokeWidth: 0.75
			}
		},
		{
			type: "circle",
			value: {
				cx: 8.041,
				cy: 8.04,
				r: 7.5
			},
			props: {
				strokeWidth: 0.5
			}
		}
	],
	"key": [
		{
			type: "line",
			value: {
				x1: 8.114,
				y1: 7.413,
				x2: 8.114,
				y2: 14.286
			},
			props: {
				strokeWidth: 1
			}
		},
		{
			type: "line",
			value: {
				x1: 8,
				y1: 12.828,
				x2: 7.008,
				y2: 12.828
			},
			props: {
				strokeWidth: 1
			}
		},
		{
			type: "line",
			value: {
				x1: 7.892,
				y1: 10.85,
				x2: 6.436,
				y2: 10.85
			},
			props: {
				strokeWidth: 1
			}
		}
	],
	"wrong2": [
		{
			type: "line",
			value: {
				x1:	15.086,
				y1: 1.2,
				x2: 1.2,
				y2: 15.086
			},
			props: {
				strokeWidth: 1
			}
		},
		{
			type: "line",
			value: {
				x1: 15.086,
				y1: 15.086,
				x2: 1.2,
				y2: 1.2
			},
			props: {
				strokeWidth: 1
			}
		}
	],
	"slaveKey": [
		{
			type: "circle",
			value: {
				cx: 8,
				cy: 8,
				r: 8
			}
		}
	],
	"dirty": [
		{
			type: "polygon",
			value: [[16, 16],[0, 16], [16, 0]],
			props: {
				strokeWidth: 1
			}
		}
	],
	"key-house": [
		{
			type: "polyline",
			value: [[-10.19,-3.64],[-10.42,-3.43], [-10.21,-3.66]],
			props: {
				strokeWidth: 1
			}
		},
		{
			type: "polyline",
			value: [[-9.95,-3.42],[-10.19,-3.64], [-10.17,-3.66 ]],
			props: {
				strokeWidth: 1
			}
		}
	],
	"key-bleConnecting": [
		{
			type: "polygon",
			value: [[4.687,8.029], [2.616,9.35], [2.616,6.66]],
			props: {
				fill: defaultColor
			}
		},
		{
			type: "polygon",
			value: [[11.158,7.98], [13.229,6.66], [13.229,9.35]],
			props: {
				fill: defaultColor
			}
		}
	],
	"order-success": [
		{
			type: "polyline",
			value: [[9.08,12.304], [10.3,13.523], [13.107,10.752]]
		}
	],
	"order-failure": [
		{
			type: "line",
			value: {
				x1:	9.364,
				y1: 13.681,
				x2: 12.599,
				y2: 10.482
			},
		},
		{
			type: "line",
			value: {
				x1:	12.599,
				y1: 13.681,
				x2: 9.364,
				y2: 10.482
			},
		}
	]
}
