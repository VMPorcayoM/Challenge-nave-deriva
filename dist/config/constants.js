"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEMS = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.SYSTEMS = {
    navigation: "NAV-01",
    communications: "COM-02",
    life_support: "LIFE-03",
    engines: "ENG-04",
    deflector_shield: "SHLD-05",
};
