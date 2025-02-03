"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SATURATION_DATA = exports.SYSTEMS = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.SYSTEMS = {
    navigation: "NAV-01",
    communications: "COM-02",
    life_support: "LIFE-03",
    engines: "ENG-04",
    deflector_shield: "SHLD-05",
};
// Datos de la curva de saturación (simplificados)
exports.SATURATION_DATA = {
    pressure_critical: 10.0, // MPa
    volume_critical: 0.0035, // m³/kg
    saturation_curve: {
        // Presión (MPa): [volumen_líquido, volumen_vapor]
        0.05: [0.00105, 30.00],
        10.0: [0.0035, 0.0035], // Punto crítico
    }
};
