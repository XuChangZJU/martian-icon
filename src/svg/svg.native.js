/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

import React, {Component, PropTypes} from "react";
import {ART as ReactART, TouchableOpacity, View} from "react-native";

const SvgImpl = require("./svgImpl");

class Svg extends Component {
    render() {
        const { touchable, style, onPress, ...props } = this.props;
        if(touchable) {
            return (
                <TouchableOpacity style={style}  onPress={onPress}>
                        <SvgImpl {...this.props} reactArt={ReactART}/>
                </TouchableOpacity>
            );
        }
        return (
            <SvgImpl {...this.props} reactArt={ReactART}/>
        );
    }
}

Svg.propTypes = {
    touchable: PropTypes.bool,
    backgroundColor: PropTypes.string,
    underlayColor: PropTypes.string,
    onPress: PropTypes.func
};

module.exports = Svg;
