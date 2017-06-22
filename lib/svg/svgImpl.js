"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constant = require("../constant");

var _merge = require("lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

var _assign = require("lodash/assign");

var _assign2 = _interopRequireDefault(_assign);

var _keys = require("lodash/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2016/9/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var CURRENT_PATHS = {
    core: require('../path/core'),
    key: require('../path/key'),
    list: require('../path/list'),
    nav: require('../path/nav'),
    other: require('../path/other'),
    rent: require('../path/rent')
};

var CURRENT_TEXTS = {
    core: require('../text/core'),
    key: require('../text/key'),
    list: require('../text/list'),
    nav: require('../text/nav'),
    other: require('../text/other'),
    rent: require('../text/rent')
};

var CURRENT_DRAWS = {
    core: require('../draw/core'),
    key: require('../draw/key'),
    list: require('../draw/list'),
    nav: require('../draw/nav'),
    other: require('../draw/other'),
    rent: require('../draw/rent')
};

var SvgImpl = function (_Component) {
    _inherits(SvgImpl, _Component);

    function SvgImpl() {
        _classCallCheck(this, SvgImpl);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    SvgImpl.prototype.render = function render() {
        var _props$reactArt = this.props.reactArt,
            Group = _props$reactArt.Group,
            Shape = _props$reactArt.Shape,
            Path = _props$reactArt.Path,
            Text = _props$reactArt.Text,
            Transform = _props$reactArt.Transform,
            Surface = _props$reactArt.Surface;

        var setting = (0, _merge2["default"])({}, _constant.defaultValue, this.props);
        (0, _constant.normalizeValue)(setting);

        var widthScale = setting.width / _constant.defaultValue.width;
        var heightScale = setting.height / _constant.defaultValue.height;
        var scale = widthScale > heightScale ? heightScale : widthScale; // 一般都是放大吧，制作的默认尺寸是16
        var paths = void 0,
            texts = void 0,
            draws = void 0;

        // 更新，忽略掉Group输入项
        var group = (0, _keys2["default"])(CURRENT_PATHS).find(function (ele) {
            return CURRENT_PATHS[ele].hasOwnProperty(setting.name);
        });
        if (!group) {
            throw new Error("\u6CA1\u6709\u627E\u5230\u540D\u79F0\u4E3A" + setting.name + "\u7684icon");
        }

        paths = CURRENT_PATHS[group][setting.name];
        texts = CURRENT_TEXTS[group][setting.name];
        draws = CURRENT_DRAWS[group][setting.name];

        var shapes = [],
            idxTotal = 0;
        paths.forEach(function (path, idx) {
            shapes.push(_react2["default"].createElement(Shape, { fill: setting["color" + idx] || setting.color, stroke: setting["stroke" + idx] || setting.stroke, strokeWidth: setting["strokeWidth" + idx] || setting.strokeWidth,
                d: path, key: idx }));
        });
        idxTotal += shapes.length;

        if (texts) {
            texts.forEach(function (text, idx) {
                shapes.push(_react2["default"].createElement(Text, { fill: setting["color" + (idxTotal + idx)] || setting.color, transform: new Transform(text.transform), font: text.font, children: text.text, key: idxTotal + idx }));
            });
            idxTotal += texts.length;
        }

        if (draws) {
            draws.forEach(function (draw, idx) {
                var path = void 0;
                var value = draw.value;
                switch (draw.type.toLowerCase()) {
                    case "circle":
                        path = Path().moveTo(value.cx, value.cy - value.r).arc(0, value.r * 2, value.r).arc(0, value.r * -2, value.r).close();
                        break;
                    case "line":
                        path = Path().moveTo(value.x1, value.y1).lineTo(value.x2, value.y2);
                        break;
                    case "polyline":
                        path = Path().moveTo(value[0][0], value[0][1]);
                        for (var i = 1; i < value.length; i++) {
                            path.lineTo(value[i][0], value[i][1]);
                        }
                        break;
                    case "polygon":
                        path = Path().moveTo(value[0][0], value[0][1]);
                        for (var _i = 1; _i < value.length; _i++) {
                            path.lineTo(value[_i][0], value[_i][1]);
                        }
                        path.close();
                        break;
                    case "rect":
                        path = Path().moveTo(value.x, value.y).lineTo(value.x + value.w, value.y).lineTo(value.x + value.w, value.y + value.h).lineTo(value.x, value.y + value.h).lineTo(value.x, value.y).close();
                        break;
                    default:
                        throw new Error("不支持的draw类型【" + draw.type + "】");
                }
                var props = (0, _assign2["default"])({}, draw.props, {
                    stroke: setting["color" + (idxTotal + idx)] || setting["stroke" + (idxTotal + idx)] || setting.color || setting.drawStroke,
                    strokeWidth: setting["strokeWidth" + (idxTotal + idx)] || setting["drawStrokeWidth" + (idxTotal + idx)] || setting.strokeWidth || setting.drawStrokeWidth,
                    fill: setting["fill" + (idxTotal + idx)] || setting.fill
                });

                // 处理一下transform
                if (props.transform) {
                    props.transform = new Transform(props.transform);
                }
                shapes.push(_react2["default"].createElement(Shape, _extends({}, props, {
                    d: path, key: idxTotal + idx })));
            });
        }

        return _react2["default"].createElement(
            Surface,
            { width: setting.width, height: setting.height },
            _react2["default"].createElement(
                Group,
                { scale: scale },
                shapes
            )
        );
    };

    return SvgImpl;
}(_react.Component);

SvgImpl.propTypes = {
    reactArt: _react.PropTypes.object.isRequired
};

module.exports = SvgImpl;