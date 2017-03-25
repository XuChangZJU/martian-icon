"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Administrator on 2016/9/24.
                                                                                                                                                                                                                                                                   */

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constant = require("../constant");

var _merge = require("lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

var _assign = require("lodash/assign");

var _assign2 = _interopRequireDefault(_assign);

var _keys = require("lodash/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CURRENT_PATHS = {
    core: require('../path/core'),
    key: require('../path/key'),
    list: require('../path/list'),
    nav: require('../path/nav'),
    other: require('../path/other'),
    rent: require('../path/rent')
};

const CURRENT_TEXTS = {
    core: require('../text/core'),
    key: require('../text/key'),
    list: require('../text/list'),
    nav: require('../text/nav'),
    other: require('../text/other'),
    rent: require('../text/rent')
};

const CURRENT_DRAWS = {
    core: require('../draw/core'),
    key: require('../draw/key'),
    list: require('../draw/list'),
    nav: require('../draw/nav'),
    other: require('../draw/other'),
    rent: require('../draw/rent')
};

class SvgImpl extends _react.Component {
    render() {
        const {
            Group,
            Shape,
            Path,
            Text,
            Transform,
            Surface
        } = this.props.reactArt;
        const setting = (0, _merge2.default)({}, _constant.defaultValue, this.props);
        (0, _constant.normalizeValue)(setting);

        const widthScale = setting.width / _constant.defaultValue.width;
        const heightScale = setting.height / _constant.defaultValue.height;
        const scale = widthScale > heightScale ? heightScale : widthScale; // 一般都是放大吧，制作的默认尺寸是16
        let paths, texts, draws;

        // 更新，忽略掉Group输入项
        const group = (0, _keys2.default)(CURRENT_PATHS).find(ele => CURRENT_PATHS[ele].hasOwnProperty(setting.name));
        if (!group) {
            throw new Error(`没有找到名称为${setting.name}的icon`);
        }

        paths = CURRENT_PATHS[group][setting.name];
        texts = CURRENT_TEXTS[group][setting.name];
        draws = CURRENT_DRAWS[group][setting.name];

        let shapes = [],
            idxTotal = 0;
        paths.forEach((path, idx) => {
            shapes.push(_react2.default.createElement(Shape, { fill: setting["color" + idx] || setting.color, stroke: setting["stroke" + idx] || setting.stroke, strokeWidth: setting["strokeWidth" + idx] || setting.strokeWidth,
                d: path, key: idx }));
        });
        idxTotal += shapes.length;

        if (texts) {
            texts.forEach((text, idx) => {
                shapes.push(_react2.default.createElement(Text, { fill: setting["color" + (idxTotal + idx)] || setting.color, transform: new Transform(text.transform), font: text.font, children: text.text, key: idxTotal + idx }));
            });
            idxTotal += texts.length;
        }

        if (draws) {
            draws.forEach((draw, idx) => {
                let path;
                const value = draw.value;
                switch (draw.type.toLowerCase()) {
                    case "circle":
                        path = Path().moveTo(value.cx, value.cy - value.r).arc(0, value.r * 2, value.r).arc(0, value.r * -2, value.r).close();
                        break;
                    case "line":
                        path = Path().moveTo(value.x1, value.y1).lineTo(value.x2, value.y2);
                        break;
                    case "polyline":
                        path = Path().moveTo(value[0][0], value[0][1]);
                        for (let i = 1; i < value.length; i++) {
                            path.lineTo(value[i][0], value[i][1]);
                        }
                        break;
                    case "polygon":
                        path = Path().moveTo(value[0][0], value[0][1]);
                        for (let i = 1; i < value.length; i++) {
                            path.lineTo(value[i][0], value[i][1]);
                        }
                        path.close();
                        break;
                    case "rect":
                        path = Path().moveTo(value.x, value.y).lineTo(value.x + value.w, value.y).lineTo(value.x + value.w, value.y + value.h).lineTo(value.x, value.y + value.h).lineTo(value.x, value.y).close();
                        break;
                    default:
                        throw new Error("不支持的draw类型【" + draw.type + "】");
                }
                const props = (0, _assign2.default)({}, {
                    stroke: setting.color || setting.drawStroke,
                    strokeWidth: setting.strokeWidth || setting.drawStrokeWidth,
                    fill: setting.fill
                }, draw.props, {
                    stroke: setting["color" + (idxTotal + idx)] || setting["stroke" + (idxTotal + idx)],
                    strokeWidth: setting["strokeWidth" + (idxTotal + idx)] || setting["drawStrokeWidth" + (idxTotal + idx)],
                    fill: setting["fill" + (idxTotal + idx)]
                });

                // 处理一下transform
                if (props.transform) {
                    props.transform = new Transform(props.transform);
                }
                shapes.push(_react2.default.createElement(Shape, _extends({}, props, {
                    d: path, key: idxTotal + idx })));
            });
        }

        return _react2.default.createElement(
            Surface,
            { width: setting.width, height: setting.height },
            _react2.default.createElement(
                Group,
                { scale: scale },
                shapes
            )
        );
    }
}

SvgImpl.propTypes = {
    reactArt: _react.PropTypes.object.isRequired
};

module.exports = SvgImpl;