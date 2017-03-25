/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component, PropTypes } from "react";
import { ART as ReactART, TouchableHighlight, View } from "react-native";

const SvgImpl = require("./svgImpl");

class Svg extends Component {
    render() {
        if (this.props.touchable) {
            return React.createElement(
                TouchableHighlight,
                { style: { backgroundColor: this.props.backgroundColor }, underlayColor: this.props.underlayColor, onPress: this.props.onPress },
                React.createElement(
                    View,
                    null,
                    React.createElement(SvgImpl, _extends({}, this.props, { reactArt: ReactART }))
                )
            );
        }
        return React.createElement(SvgImpl, _extends({}, this.props, { reactArt: ReactART }));
    }
}

Svg.propTypes = {
    touchable: PropTypes.bool,
    backgroundColor: PropTypes.string,
    underlayColor: PropTypes.string,
    onPress: PropTypes.func
};

module.exports = Svg;