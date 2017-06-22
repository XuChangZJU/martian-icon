/**
 * Created by Administrator on 2016/7/22.
 */
"use strict";

import React, { Component, PropTypes } from "react";
const ReactART = require("react-art");
const SvgImpl = require("./svgImpl");

class Svg extends Component {
	render() {
		if(this.props.touchable) {
			return (
				<div>
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
	backgroundColor: PropTypes.object,
	underlayColor: PropTypes.object,
	onPress: PropTypes.object
};

module.exports = Svg;


