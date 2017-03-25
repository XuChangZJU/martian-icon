/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SvgImpl = require("./svgImpl");

class Svg extends _react.Component {
    render() {
        if (this.props.touchable) {
            return _react2.default.createElement(
                _reactNative.TouchableHighlight,
                { style: { backgroundColor: this.props.backgroundColor }, underlayColor: this.props.underlayColor, onPress: this.props.onPress },
                _react2.default.createElement(
                    _reactNative.View,
                    null,
                    _react2.default.createElement(SvgImpl, _extends({}, this.props, { reactArt: _reactNative.ART }))
                )
            );
        }
        return _react2.default.createElement(SvgImpl, _extends({}, this.props, { reactArt: _reactNative.ART }));
    }
}

Svg.propTypes = {
    touchable: _react.PropTypes.bool,
    backgroundColor: _react.PropTypes.string,
    underlayColor: _react.PropTypes.string,
    onPress: _react.PropTypes.func
};

module.exports = Svg;