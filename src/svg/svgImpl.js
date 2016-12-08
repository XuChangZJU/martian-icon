/**
 * Created by Administrator on 2016/9/24.
 */

import React, {Component, PropTypes} from "react";
import {defaultValue, normalizeValue} from "../constant";
import merge from "lodash/merge";
import assign from "lodash/assign";
import keys from 'lodash/keys';

const CURRENT_PATHS = {
    core: require('../path/core'),
    key: require('../path/key'),
    list: require('../path/list'),
    nav: require('../path/nav'),
    other: require('../path/other'),
    rent: require('../path/rent'),
};

const CURRENT_TEXTS = {
    core: require('../text/core'),
    key: require('../text/key'),
    list: require('../text/list'),
    nav: require('../text/nav'),
    other: require('../text/other'),
    rent: require('../text/rent'),
};

const CURRENT_DRAWS = {
    core: require('../draw/core'),
    key: require('../draw/key'),
    list: require('../draw/list'),
    nav: require('../draw/nav'),
    other: require('../draw/other'),
    rent: require('../draw/rent'),
};


class SvgImpl extends Component {
    render() {
        const {
            Group,
            Shape,
            Path,
            Text,
            Transform,
            Surface
        } = this.props.reactArt;
        const setting = merge({}, defaultValue, this.props);
        normalizeValue(setting);

        const widthScale = setting.width / defaultValue.width;
        const heightScale = setting.height / defaultValue.height;
        const scale = (widthScale > heightScale) ? heightScale : widthScale;			// 一般都是放大吧，制作的默认尺寸是16
        let paths, texts, draws;

        // 更新，忽略掉Group输入项
        const group = keys(CURRENT_PATHS).find(
            (ele) => CURRENT_PATHS[ele].hasOwnProperty(setting.name)
        );
        if (!group) {
            throw new Error(`没有找到名称为${setting.name}的icon`);
        }

        paths = CURRENT_PATHS[group][setting.name];
        texts = CURRENT_TEXTS[group][setting.name];
        draws = CURRENT_DRAWS[group][setting.name];

        let shapes = [], idxTotal = 0;
        paths.forEach(
            (path, idx) => {
                shapes.push(
                    (
                        <Shape fill={setting["color" + idx] || setting.color} stroke={setting["stroke" + idx] || setting.stroke} strokeWidth={setting["strokeWidth" + idx] || setting.strokeWidth}
                               d={path} key={idx}/>
                    )
                )
            }
        );
        idxTotal += shapes.length;

        if(texts) {
            texts.forEach(
                (text, idx) => {
                    shapes.push(
                        <Text fill={setting["color" + (idxTotal + idx)] || setting.color} transform={new Transform(text.transform)} font={text.font} children={text.text} key={idxTotal+idx}/>
                    );
                }
            );
            idxTotal += texts.length;
        }


        if(draws) {
            draws.forEach(
                (draw, idx) => {
                    let path;
                    const value = draw.value;
                    switch(draw.type.toLowerCase()) {
                        case "circle":
                            path = Path().moveTo(value.cx, value.cy - value.r).arc(0, value.r * 2, value.r).arc(0, value.r * -2, value.r).close();
                            break;
                        case "line":
                            path = Path().moveTo(value.x1, value.y1).lineTo(value.x2, value.y2);
                            break;
                        case "polyline":
                            path = Path().moveTo(value[0][0], value[0][1]);
                            for(let i = 1; i < value.length; i ++) {
                                path.lineTo(value[i][0], value[i][1]);
                            }
                            break;
                        case "polygon":
                            path = Path().moveTo(value[0][0], value[0][1]);
                            for(let i = 1; i < value.length; i ++) {
                                path.lineTo(value[i][0], value[i][1]);
                            }
                            path.close();
                            break;
                        case "rect":
                            path = Path()
                                .moveTo(value.x, value.y)
                                .lineTo(value.x + value.w, value.y)
                                .lineTo(value.x + value.w, value.y + value.h)
                                .lineTo(value.x, value.y + value.h)
                                .lineTo(value.x, value.y)
                                .close();
                            break;
                        default:
                            throw new Error("不支持的draw类型【" + draw.type + "】");
                    }
                    const props = assign({}, {
                        stroke: setting["color" + (idxTotal + idx)] || setting.color || setting.drawStroke,
                        strokeWidth: setting["strokeWidth" + (idxTotal + idx)] || setting.strokeWidth || setting.drawStrokeWidth,
                        fill: setting["fill" + (idxTotal + idx)] || setting.fill
                    }, draw.props);

                    // 处理一下transform
                    if (props.transform) {
                        props.transform = new Transform(props.transform);
                    }
                    shapes.push(
                        <Shape {...props}
                               d={path} key={idxTotal + idx}/>
                    )
                }
            )
        }

        return (
            <Surface width={setting.width} height={setting.height}>
                <Group scale={scale}>
                    {shapes}
                </Group>
            </Surface>
        );
    }
}

SvgImpl.propTypes = {
    reactArt: PropTypes.object.isRequired
};

module.exports = SvgImpl;