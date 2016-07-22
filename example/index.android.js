/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';
const Icon = require("martian-icon");


class Example extends Component {
	render() {
		return (
			<Icon size={200} stroke1="black" name="mobile" strokeWidth1={0.1} color="green" rotation={45} x={85} y={-45}/>
		);
	}
}


AppRegistry.registerComponent('example', () => Example);
