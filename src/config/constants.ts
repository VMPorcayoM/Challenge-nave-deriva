export const PORT = process.env.PORT || 3000;
export const SYSTEMS = {
  navigation: "NAV-01",
  communications: "COM-02",
  life_support: "LIFE-03",
  engines: "ENG-04",
  deflector_shield: "SHLD-05",
};
// Datos de la curva de saturación (simplificados)
export const SATURATION_DATA = {
    pressure_critical: 10.0,  // MPa
    volume_critical: 0.0035,  // m³/kg
    saturation_curve: {
        // Presión (MPa): [volumen_líquido, volumen_vapor]
        0.05: [0.00105, 30.00],
        10.0: [0.0035, 0.0035],  // Punto crítico
    }
};

// SECOND APPROACH
// export const SATURATION_DATA: Record<number, { vol_liquid: number; vol_vapor: number; temperature: number }> = {
//   0.05: { vol_liquid: 0.00105, vol_vapor: 30.0, temperature: 31 }, // > 30°C ✅
//   10: { vol_liquid: 0.0035, vol_vapor: 0.0035, temperature: 500 }, // Punto crítico ✅
// };