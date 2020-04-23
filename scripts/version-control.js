"use strict";

const fs = require('fs');

const data = JSON.parse(fs.readFileSync("projects/bundler/package.json"));
const nums = data.version.split('.');
++nums[2];
data.version = nums.join('.');

fs.writeFileSync("projects/bundler/package.json", JSON.stringify(data, null, 4));
