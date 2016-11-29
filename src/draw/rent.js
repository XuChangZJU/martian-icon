/**
 * Created by Administrator on 2016/9/13.
 */
"use strict";
const defaultColor = require("../constant").defaultValue.color;
module.exports = {
    "house2": [
        {
            type: "polygon",
            value: [[7.975,0.902], [0.276,8.545], [1.929,8.545], [1.929,15.363], [6.572,15.363], [6.572,11.87], [9.571,11.87], [9.571,15.363],
                [14.038,15.363], [14.038,8.545], [15.69,8.545]],
            props: {
                strokeWidth: 1
            }
        }
    ],
    "gasCooker": [
        {
            type: "polyline",
            value: [[1.061,10.404], [14.942,10.404], [14.942,10.582], [1.061,10.582], [1.061,10.404 ]],
            props: {
                fill: defaultColor
            }
        }
    ],
    "bedstand": [
        {
            type: "rect",
            value: {
                x: 5.004,
                y: 4.799,
                w: 1.724,
                h: 0.781
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "rect",
            value: {
                x: 9.238,
                y: 4.799,
                w: 1.724,
                h: 0.781
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "rect",
            value: {
                x: 9.328,
                y: 7.758,
                w: 1.724,
                h: 0.781
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "rect",
            value: {
                x: 5.004,
                y: 7.758,
                w: 1.724,
                h: 0.781
            },
            props: {
                fill: defaultColor
            }
        }
    ],
    "microwaveOven": [
        {
            type: "rect",
            value: {
                x: 13.687,
                y: 7.995,
                w: 0.78,
                h: 0.01
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "rect",
            value: {
                x: 9.09,
                y: 5.948,
                w: 0.78,
                h: 3.869
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "circle",
            value: {
                cx: 12.525,
                cy: 5.421,
                r: 0.492
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "circle",
            value: {
                cx: 12.525,
                cy: 7.056,
                r: 0.492
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "circle",
            value: {
                cx: 12.525,
                cy: 8.69,
                r: 0.492
            },
            props: {
                fill: defaultColor
            }
        }
    ],
    "refrigerator": [,
        {
            type: "rect",
            value: {
                x: 4.269,
                y: 13.865,
                w: 7.489,
                h: 0.781
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "rect",
            value: {
                x: 9.353,
                y: 6.827,
                w: 0.781,
                h: 2.56
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "rect",
            value: {
                x: 9.353,
                y: 2.937,
                w: 0.781,
                h: 1.169
            },
            props: {
                fill: defaultColor
            }
        }
    ],
    "table": [
        {
            type: "rect",
            value: {
                x: 3.309,
                y: 5.054,
                w: 2.125,
                h: 0.781
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "rect",
            value: {
                x: 10.543,
                y: 5.054,
                w: 2.125,
                h: 0.781
            },
            props: {
                fill: defaultColor
            }
        }
    ],
    "wardrobe": [
        {
            type: "circle",
            value: {
                cx: 6.338,
                cy: 5.964,
                r: 0.438
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "circle",
            value: {
                cx: 9.682,
                cy: 5.964,
                r: 0.438
            },
            props: {
                fill: defaultColor
            }
        }
    ],
    "washing": [
        {
            type: "circle",
            value: {
                cx: 4.458,
                cy: 2.331,
                r: 0.438
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "circle",
            value: {
                cx: 6.146,
                cy: 2.331,
                r: 0.438
            },
            props: {
                fill: defaultColor
            }
        },
        {
            type: "circle",
            value: {
                cx: 11.542,
                cy: 2.331,
                r: 0.438
            },
            props: {
                fill: defaultColor
            }
        }
    ]
};
