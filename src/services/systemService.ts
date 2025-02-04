import { SATURATION_DATA, SYSTEMS } from "../config/constants";

let damagedSystemKey: string | null = null;

export const getDamagedSystem = () => {
  if (!damagedSystemKey) {
    const systemKeys = Object.keys(SYSTEMS);
    damagedSystemKey =
      systemKeys[Math.floor(Math.random() * systemKeys.length)];
  }
  return damagedSystemKey;
};

export const getRepairCode = () => {
  if (!damagedSystemKey) return null;
  return SYSTEMS[damagedSystemKey as keyof typeof SYSTEMS];
};
export const phaseChange = (pressure: number) => {
  // Validar la presión
  if (isNaN(pressure) || pressure <= 0) {
    throw new Error("La presión debe ser un número mayor que 0");
  }
  // ✅ Cumple la condición "T > 30°C"
  if (pressure < 0.05) {
    throw new Error(
      "Temperature below operational threshold (T > 30°C required)"
    );
  }
  // Buscar los volúmenes específicos en la curva de saturación
  let vol_liquid: number, vol_vapor: number;
  if (pressure >= SATURATION_DATA.pressure_critical) {
    // Si la presión es mayor o igual a la crítica, devolver el punto crítico
    vol_liquid = vol_vapor = SATURATION_DATA.volume_critical;
  } else {
    // Si la presión es menor que la crítica, interpolar entre los puntos conocidos
    const [p0, [v_l0, v_v0]] = Object.entries(
      SATURATION_DATA.saturation_curve
    )[0]; // Punto de baja presión
    const [p1, [v_l1, v_v1]] = Object.entries(
      SATURATION_DATA.saturation_curve
    )[1]; // Punto crítico

    vol_liquid = interpolate(
      pressure,
      parseFloat(p0),
      v_l0,
      parseFloat(p1),
      v_l1
    );
    vol_vapor = interpolate(
      pressure,
      parseFloat(p0),
      v_v0,
      parseFloat(p1),
      v_v1
    );
  }
  return { vol_liquid, vol_vapor };

  // SECOND APPROACH
  // const data = SATURATION_DATA[pressure];
  // if (!data) {
  //   throw new Error("Pressure out of range or not available");
  // }
  // // ✅ Cumple la condición "T > 30°C"
  // if (data.temperature <= 30) {
  //   throw new Error("Temperature below operational threshold (T > 30°C required)");
  // }
  // return data;
};
// Función para interpolar linealmente
const interpolate = (
  x: number,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): number => {
  return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
};
