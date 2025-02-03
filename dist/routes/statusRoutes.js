"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusController_1 = require("../controllers/statusController");
const router = (0, express_1.Router)();
router.get("/status", statusController_1.getStatus);
router.get("/repair-bay", statusController_1.getRepairBay);
router.post("/teapot", statusController_1.postTeapot);
exports.default = router;
