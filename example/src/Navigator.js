/**
 * Created by Administrator on 2016/7/23.
 */
"use strict";

import {
    Alert,
    Navigator,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    StatusBar,
    Platform,
    BackAndroid
} from "react-native";

import React, {
    Component
} from "react";

import {
    MtContainer,
    MtNavBar
} from "martian-ui";

const scenes = {
    iconGroup: {
        title: "图标组",
        view: require("./IconGroup")
    },
    iconList: {
        title: "图标列表",
        view: require("./IconList")
    }
};

class Navigator2 extends Component {

    configBackButtonLogic(navigator) {
        if(Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress',
                function () {
                    const routes = navigator.getCurrentRoutes();
                    if(routes.length === 1) {
                        Alert.alert(
                            "确认",
                            "退出程序吗",
                            [
                                {text: "取消"},
                                {
                                    text: "退出", onPress: ()=> {
                                    BackAndroid.exitApp();
                                }
                                }
                            ]
                        );
                    }
                    else {
                        navigator.pop();
                    }
                    return true;
                }
            );
        }
    }

    renderScene(route, navigator) {
        // 在第一次渲染的时候设置好回退功能
        if(!this.settingBack) {
            this.configBackButtonLogic(navigator);
            this.settingBack = true;
        }
        const V = route.view;
        return (
            <MtContainer>
                <MtNavBar title={route.title}/>
                <V {...route.props} navigator={navigator}/>
            </MtContainer>
        );
    }

    render() {
        const initialRoute = {
            title: "图标组",
            view: require("./IconGroup")
        };
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={this.renderScene.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    },
});

module.exports = Navigator2;
