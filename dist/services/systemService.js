"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepairCode = exports.getDamagedSystem = void 0;
const constants_1 = require("../config/constants");
let damagedSystemKey = null;
const getDamagedSystem = () => {
    if (!damagedSystemKey) {
        const systemKeys = Object.keys(constants_1.SYSTEMS);
        damagedSystemKey = systemKeys[Math.floor(Math.random() * systemKeys.length)];
    }
    return damagedSystemKey;
};
exports.getDamagedSystem = getDamagedSystem;
const getRepairCode = () => {
    if (!damagedSystemKey)
        return null;
    return constants_1.SYSTEMS[damagedSystemKey];
};
exports.getRepairCode = getRepairCode;
