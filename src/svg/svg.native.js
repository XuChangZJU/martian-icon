/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

import React, {Component, PropTypes} from "react";
import {ART as ReactART, TouchableHighlight, View} from "react-native";

const SvgImpl = require("./svgImpl");

class Svg extends Component {
    render() {
        if(this.props.touchable) {
            return (
                <TouchableHighlight style={{backgroundColor: this.props.backgroundColor}} underlayColor={this.props.underlayColor} onPress={this.props.onPress}>
                    <View>
                        <SvgImpl {...this.props} reactArt={ReactART}/>
                    </View>
                </TouchableHighlight>
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
