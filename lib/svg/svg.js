/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactART = require("react-art");
const SvgImpl = require("./svgImpl");

class Svg extends _react.Component {
	render() {
		if (this.props.touchable) {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(SvgImpl, _extends({}, this.props, { reactArt: ReactART }))
			);
		}
		return _react2.default.createElement(SvgImpl, _extends({}, this.props, { reactArt: ReactART }));
	}
}

Svg.propTypes = {
	touchable: _react.PropTypes.bool,
	backgroundColor: _react.PropTypes.object,
	underlayColor: _react.PropTypes.object,
	onPress: _react.PropTypes.object
};

module.exports = Svg;