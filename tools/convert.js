/**
 * Created by Administrator on 2016/7/23.
 */
"use strict";

const fs = require("fs");
const PathModifier = require("./PathModifier");

let groupName = process.argv[2];
let svgFile = process.argv[3];
let iconName = process.argv[4];

const modifier1 = new PathModifier();
let modifier2 = new PathModifier();

modifier1.init(groupName, "../src/path/" + groupName, "./src/path/" + groupName + ".js");
if(fs.existsSync("./example/node_modules/martian-icon/src/path/" + groupName + ".js")){
	modifier2.init(groupName, "../example/node_modules/martian-icon/src/path/" + groupName, "./example/node_modules/martian-icon/src/path/" + groupName + ".js");
}
else {
	modifier2 = null;
}

const fsState = fs.statSync(svgFile);

function getIconNameFromFileName(svgFile) {
	let start = svgFile.lastIndexOf("/");
	if(start === -1) {
		start = 0;
	}
	let end = svgFile.lastIndexOf(".");
	return svgFile.slice(start, end);
}

if(fsState.isDirectory()) {
	// 如果是文件夹，则对其中所有的svg文件进行转化
	const files = fs.readdirSync(svgFile);

	const convertFile = function(idx) {
		let ele = files[idx];
		if(ele.endsWith(".svg")) {
			let iconName = getIconNameFromFileName(ele);
			const svgFileEle = svgFile + "/" + ele;

			modifier1.addOneSvgToGroup(svgFileEle, iconName, (err) => {
				if(err) {
					throw err;
				}
				if(modifier2) {
					modifier2.addOneSvgToGroup(svgFileEle, iconName, (err2) => {
						if(err2) {
							throw err2;
						}

						if(idx === files.length - 1) {
							modifier1.save();
							modifier2.save();
							return;
						}
						else {
							return convertFile(idx + 1);
						}
					});
				}
				else {
					if(idx === files.length - 1) {
						modifier1.save();
						return;
					}
					else {
						return convertFile(idx + 1);
					}
				}
			});
		}
		else {
			if(idx === files.length - 1) {
				modifier1.save();
				if(modifier2) {
					modifier2.save();
				}
				return;
			}
			else {
				return convertFile(idx + 1);
			}
		}
	}

	convertFile(0);
}
else {
	// 是文件，直接转换
	if(!svgFile.endsWith(".svg")) {
		throw new Error("文件" + svgFile + "不以svg结尾，转换中止");
	}

	if(!iconName) {
		iconName = getIconNameFromFileName(svgFile);
	}

	modifier1.addOneSvgToGroup(svgFile, iconName, (err) => {
		if(err) {
			throw err;
		}
		modifier1.save();
		if(modifier2) {
			modifier2.addOneSvgToGroup(svgFile, iconName, (err2) => {
				if(err2) {
					throw err2;
				}
				modifier2.save();
			});
		}
	});
}
