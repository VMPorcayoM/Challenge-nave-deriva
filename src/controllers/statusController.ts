import { Request, Response } from "express";
import {
  getDamagedSystem,
  getRepairCode,
  phaseChange,
} from "../services/systemService";

export const getStatus = (req: Request, res: Response) => {
  res.json({ damaged_system: getDamagedSystem() });
};

export const getRepairBay = (req: Request, res: Response) => {
  const repairCode = getRepairCode();
  if (!repairCode) return res.status(500).send("Error: No damaged system set");

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

export const postTeapot = (req: Request, res: Response) => {
  res.status(418).send("I'm a teapot");
};

export const phaseChangeDiagram = (req: Request, res: Response) => {
  try {
    // Obtener la presión del query parameter
    const pressure:number = parseFloat(req.query.pressure as string);
    const {vol_liquid, vol_vapor} = phaseChange(pressure);
    // Devolver la respuesta
    res.json({
      specific_volume_liquid:vol_liquid,
      specific_volume_vapor: vol_vapor,
    });
  } catch (error) {
    res.status(400).send("Error: "+error);
  }
  
};
