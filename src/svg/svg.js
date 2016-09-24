/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

import React, {Component} from "react";
const ReactART = require("react-art");
const SvgImpl = require("./svgImpl");

class Svg extends Component {
	render() {
		if(this.props.touchable) {
			return (
				<div/* style={{backgroundColor: this.props.backgroundColor}} underlayColor={this.props.underlayColor} onPress={this.props.onPress}*/>
						<SvgImpl {...this.props} reactArt={ReactART}/>
				</div>
			);
		}
		return (
			<SvgImpl {...this.props} reactArt={ReactART}/>
		);
	}
}

Svg.propTypes = {
	touchable: PropTypes.bool,
	backgroundColr: PropTypes.object,
	underlayColor: PropTypes.object,
	onPress: PropTypes.object
};

module.exports = Svg;


