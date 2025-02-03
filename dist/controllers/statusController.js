"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTeapot = exports.getRepairBay = exports.getStatus = void 0;
const systemService_1 = require("../services/systemService");
const getStatus = (req, res) => {
    res.json({ damaged_system: (0, systemService_1.getDamagedSystem)() });
};
exports.getStatus = getStatus;
const getRepairBay = (req, res) => {
    const repairCode = (0, systemService_1.getRepairCode)();
    if (!repairCode)
        return res.status(500).send("Error: No damaged system set");
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Repair</title>
    </head>
    <body>
        <div class="anchor-point">${repairCode}</div>
    </body>
    </html>
  `);
};
exports.getRepairBay = getRepairBay;
const postTeapot = (req, res) => {
    res.status(418).send("I'm a teapot");
};
exports.postTeapot = postTeapot;
