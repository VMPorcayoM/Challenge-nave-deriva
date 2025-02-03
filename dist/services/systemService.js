"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phaseChange = exports.getRepairCode = exports.getDamagedSystem = void 0;
const constants_1 = require("../config/constants");
let damagedSystemKey = null;
const getDamagedSystem = () => {
    if (!damagedSystemKey) {
        const systemKeys = Object.keys(constants_1.SYSTEMS);
        damagedSystemKey =
            systemKeys[Math.floor(Math.random() * systemKeys.length)];
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
const phaseChange = (pressure) => {
    // Validar la presión
    if (isNaN(pressure) || pressure <= 0) {
        throw new Error("La presión debe ser un número mayor que 0");
    }
    // Buscar los volúmenes específicos en la curva de saturación
    let vol_liquid, vol_vapor;
    if (pressure >= constants_1.SATURATION_DATA.pressure_critical) {
        // Si la presión es mayor o igual a la crítica, devolver el punto crítico
        vol_liquid = vol_vapor = constants_1.SATURATION_DATA.volume_critical;
    }
    else {
        // Si la presión es menor que la crítica, interpolar entre los puntos conocidos
        const [p0, [v_l0, v_v0]] = Object.entries(constants_1.SATURATION_DATA.saturation_curve)[0]; // Punto de baja presión
        const [p1, [v_l1, v_v1]] = Object.entries(constants_1.SATURATION_DATA.saturation_curve)[1]; // Punto crítico
        vol_liquid = interpolate(pressure, parseFloat(p0), v_l0, parseFloat(p1), v_l1);
        vol_vapor = interpolate(pressure, parseFloat(p0), v_v0, parseFloat(p1), v_v1);
    }
    return { vol_liquid, vol_vapor };
};
exports.phaseChange = phaseChange;
// Función para interpolar linealmente
const interpolate = (x, x0, y0, x1, y1) => {
    return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
};
