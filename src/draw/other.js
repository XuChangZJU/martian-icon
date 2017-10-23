/**
 * Created by Administrator on 2016/11/30.
 */
"use strict";
const defaultColor = require("../constant").defaultValue.color;
module.exports = {

    "dirty": [
        {
            type: "polygon",
            value: [[15.49, 0.51],[15.49, 15.49], [0.51, 15.49]],
            props: {
                fill: defaultColor
            }
        }
    ],
    "camera": [

        {
            type: "circle",
            value: {
                cx: 13.703,
                cy: 4.818,
                r: 0.604
            },
            props: {
                fill: defaultColor
            }
        },
    ],
    "pair": [
        {
            type: 'rect',
            value: {
                x: 9.49,
                y: 11.57,
                w: 0.8,
                h: 0.8,
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: 'rect',
            value: {
                x: 10.82,
                y: 11.57,
                w: 0.8,
                h: 0.8,
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: 'rect',
            value: {
                x: 12.14,
                y: 11.57,
                w: 0.8,
                h: 0.8,
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: 'rect',
            value: {
                x: 4.63,
                y: 7.78,
                w: 6.53,
                h: 0.66,
            },
            props: {
                fill: defaultColor
            }
        }
    ]

};