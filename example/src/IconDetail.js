/**
 * Created by Administrator on 2016/7/23.
 */
"use strict";

import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Dimensions,
    ScrollView
} from "react-native";

import React, {
    Component
} from "react";

import {MtContainer, MtSeparator} from "martian-ui";
let MtIcon = require("martian-icon");

class IconDetail extends Component {
    render() {
        return (
            <ScrollView>
                <MtContainer>
                    <Text style={styles.iconTitle} numOfLines={1}>图标名：{this.props.name}</Text>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.iconSpec} numOfLines={1}>原生样式</Text>
                        <MtIcon group={this.props.group} name={this.props.name} size={240}/>
                    </View>
                    <MtSeparator/>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.iconSpec} numOfLines={1}>禁用样式</Text>
                        <MtIcon group={this.props.group} name={this.props.name} disabled={true} size={240}/>
                    </View>
                    <MtSeparator/>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.iconSpec} numOfLines={1}>可触摸样式</Text>
                        <MtIcon group={this.props.group} name={this.props.name} touchable={true} size={240}/>
                    </View>
                    <MtSeparator/>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.iconSpec} numOfLines={1}>可触摸样式二</Text>
                        <MtIcon group={this.props.group} name={this.props.name} backgroundColor="black" underlayColor="gray" onPress={() => alert("来自触摸样式二的点击")} touchable={true} size={240}/>
                    </View>
                    <MtSeparator/>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.iconSpec} numOfLines={1}>定制黄色样式</Text>
                        <MtIcon group={this.props.group} name={this.props.name} color='yellow' size={240}/>
                    </View>
                    <MtSeparator/>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.iconSpec} numOfLines={1}>定制黑边黄底样式</Text>
                        <MtIcon group={this.props.group} name={this.props.name} color='yellow' stroke="black" strokeWidth={0.1} size={240}/>
                    </View>
                </MtContainer>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    iconTitle: {
        fontSize: 30,
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        textAlign: "center",
        height: 60
    },
    iconSpec: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        textAlign: "center",
        height: 30
    }
});

module.exports = IconDetail;
