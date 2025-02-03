"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const statusRoutes_1 = __importDefault(require("./routes/statusRoutes"));
const constants_1 = require("./config/constants");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", statusRoutes_1.default);
app.listen(constants_1.PORT, () => {
    console.log(`API running on port ${constants_1.PORT}`);
});
