import { SYSTEMS } from "../config/constants";

let damagedSystemKey: string | null = null;

export const getDamagedSystem = () => {
  if (!damagedSystemKey) {
    const systemKeys = Object.keys(SYSTEMS);
    damagedSystemKey = systemKeys[Math.floor(Math.random() * systemKeys.length)];
  }
  return damagedSystemKey;
};

export const getRepairCode = () => {
  if (!damagedSystemKey) return null;
  return SYSTEMS[damagedSystemKey as keyof typeof SYSTEMS];
};