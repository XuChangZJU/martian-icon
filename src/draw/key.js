/**
 * Created by Administrator on 2016/11/30.
 */
"use strict";
const defaultColor = require("../constant").defaultValue.color;
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


    "bleConnection": [
        {
            type: "polygon",
            value: [[11.887,7.985], [12.743,7.439], [12.743,8.552]],
            props: {
                fill: defaultColor
            }
        },
        {
            type: "polygon",
            value: [[4.113,7.985], [3.257,7.439], [3.257,8.552]],
            props: {
                fill: defaultColor
            }
        }
    ]

};