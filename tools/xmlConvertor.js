/**
 * Created by Administrator on 2016/7/23.
 */
"use strict";

const fs = require("fs");
const xmlDigester = require("xml-digester");
const digester = xmlDigester.XmlDigester({});

function convertOneFileToXml(file, callback) {
	const data = fs.readFileSync(file, "utf8");

	digester.digest(data, callback);
}

module.exports = {
	convertOneFileToXml
};
