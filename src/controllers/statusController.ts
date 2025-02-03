import { Request, Response } from "express";
import { getDamagedSystem, getRepairCode } from "../services/systemService";

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