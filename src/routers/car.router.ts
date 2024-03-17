import { Router, Request, Response } from "express";
import { container } from "tsyringe";

import { CarControllers } from "../controllers";
import { CarServices } from "../services";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const controller = container.resolve(CarControllers);

const create = (req: Request, res: Response) => controller.create(req, res);
const read = (req: Request, res: Response) => controller.read(req, res);
const readOne = (req: Request, res: Response) => controller.readOne(req, res);
const update = (req: Request, res: Response) => controller.update(req, res);
const deleteCar = (req: Request, res: Response) => controller.delete(req, res);

carRouter.post("/", create);
carRouter.get("/", read);
carRouter.get("/:id", readOne);
carRouter.patch("/:id", update);
carRouter.delete("/:id", deleteCar);
