/**
 * Created by Administrator on 2016/11/30.
 */
"use strict";

var defaultColor = require("../constant").defaultValue.color;
module.exports = {

    /*"add1":  [
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
    ],*/

    "bleConnection": [{
        type: "polygon",
        value: [[11.887, 7.985], [12.743, 7.439], [12.743, 8.552]],
        props: {
            fill: defaultColor
        }
    }, {
        type: "polygon",
        value: [[4.113, 7.985], [3.257, 7.439], [3.257, 8.552]],
        props: {
            fill: defaultColor
        }
    }],
    "M": [{
        type: "polygon",
        value: [[11.7, 7.26], [11.7, 10.37], [10.4, 10.37], [10.4, 7.92], [9.46, 7.24], [8.52, 7.92], [8.52, 10.37], [7.22, 10.37], [7.22, 7.92], [6.29, 7.24], [5.35, 7.92], [5.35, 10.37], [4.05, 10.37], [4.05, 7.26], [6.29, 5.63], [7.88, 6.78], [9.46, 5.63]],
        props: {
            fill: defaultColor
        }
    }]

};