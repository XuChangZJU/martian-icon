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
};