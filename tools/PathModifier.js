/**
 * Created by Administrator on 2016/7/23.
 */
"use strict";
const fs = require("fs");
const convertOneFileToXml = require("./xmlConvertor").convertOneFileToXml;

const svgParam = {
	x: '0px',
	y: '0px',
	width: '16px',
	height: '16px',
	viewBox: '0 0 16 16'
};

class PathModifier {
	init(groupFile, requireLocation, accessLocation) {
		this.groupFile = groupFile;
		this.requireLocation = requireLocation;
		this.accessLocation = accessLocation;
		this.group = require(requireLocation);
		this.fileContent = fs.readFileSync(accessLocation, "utf8");
	}

	addOneSvgToGroup(svgFile, name, callback) {
		if(this.group[name] !==  undefined) {
			console.log("在文件" + this.accessLocation + "中，相应的icon定义" + name + "已经存在");
			return callback(null);
		}
		convertOneFileToXml(svgFile, (err, result) => {
			if(err) {
				return callback(new Error("解析SVG文件失败"));
			}
			// 检查SVG文件是否符合要求
			if(result.svg.x !== svgParam.x) {
				return callback(new Error("SVG参数x不符合要求，要求是" + svgParam.x + "，当前是" + result.svg.x));
			}
			if(result.svg.y !== svgParam.y) {
				return callback(new Error("SVG参数y不符合要求，要求是" + svgParam.y + "，当前是" + result.svg.y));
			}
			if(result.svg.width !== svgParam.width) {
				return callback(new Error("SVG参数width不符合要求，要求是" + svgParam.width + "，当前是" + result.svg.width));
			}
			if(result.svg.height !== svgParam.height) {
				return callback(new Error("SVG参数height不符合要求，要求是" + svgParam.height + "，当前是" + result.svg.height));
			}
			if(result.svg.viewBox !== svgParam.viewBox) {
				return callback(new Error("SVG参数viewBox不符合要求，要求是" + svgParam.viewBox + "，当前是" + result.svg.viewBox));
			}
			// 将svg中的path提取出来，加到文件的尾部
			let content = ",\n\"" + name + "\":\n[";
			let first = true;
			function addPathToContent(obj) {
				if(obj.path) {
					if(typeof obj.path === "object") {
						if(obj.path instanceof Array) {
							obj.path.forEach(
								(ele) => {
									if(!first){
										content += ",";
									}
									else {
										first = false;
									}
									const d = ele.d;
									content += "\n`" + d + "`";
								}
							);
						}
						else if(obj.path.d && typeof obj.path.d === "string") {
							if(!first){
								content += ",";
							}
							else {
								first = false;
							}
							const d = obj.path.d;
							content += "\n`" + d + "`";
						}
						else {
							throw new Error("不能处理的path格式");
						}
					}
					else {
						throw new Error("不能处理的path格式");
					}
				}

				if(obj.g) {
					addPathToContent(obj.g);
				}
			}

			addPathToContent(result.svg, 0);
			content += "]\n";

			let pos = this.fileContent.lastIndexOf("]");
			if(pos === -1) {
				return callback(new Error("文件" + this.groupFile + "中至少应有一个已有的icon定义"));
			}
			this.fileContent = this.fileContent.slice(0, pos + 1).concat(content).concat("\n};\n");

			console.log("增加icon " + name + "成功");
			return callback(null);
		});
	}

	save() {
		fs.writeFileSync(this.accessLocation, this.fileContent);
	}
}

module.exports = PathModifier;
