/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgImpl = require("./svgImpl");

var Svg = function (_Component) {
    _inherits(Svg, _Component);

    function Svg() {
        _classCallCheck(this, Svg);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Svg.prototype.render = function render() {
        if (this.props.touchable) {
            return _react2["default"].createElement(
                _reactNative.TouchableHighlight,
                { style: { backgroundColor: this.props.backgroundColor }, underlayColor: this.props.underlayColor, onPress: this.props.onPress },
                _react2["default"].createElement(
                    _reactNative.View,
                    null,
                    _react2["default"].createElement(SvgImpl, _extends({}, this.props, { reactArt: _reactNative.ART }))
                )
            );
        }
        return _react2["default"].createElement(SvgImpl, _extends({}, this.props, { reactArt: _reactNative.ART }));
    };

    return Svg;
}(_react.Component);

Svg.propTypes = {
    touchable: _react.PropTypes.bool,
    backgroundColor: _react.PropTypes.string,
    underlayColor: _react.PropTypes.string,
    onPress: _react.PropTypes.func
};

module.exports = Svg;