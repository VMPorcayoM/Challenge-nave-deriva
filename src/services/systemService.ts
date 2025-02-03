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
  // Buscar los volúmenes específicos en la curva de saturación
  let vol_liquid: number, vol_vapor: number;
  if (SATURATION_DATA.saturation_curve.hasOwnProperty(pressure)) {
    [vol_liquid, vol_vapor] = SATURATION_DATA.saturation_curve[pressure as keyof typeof SATURATION_DATA.saturation_curve];
  } else {
    // Si la presión no está en los datos, devolver el punto crítico
    if (pressure >= SATURATION_DATA.pressure_critical) {
      vol_liquid = vol_vapor = SATURATION_DATA.volume_critical;
    } else {
      // Interpolar entre los puntos más cercanos (opcional)
      vol_liquid = vol_vapor = SATURATION_DATA.volume_critical;
    }
  }
  return {vol_liquid, vol_vapor};
};
