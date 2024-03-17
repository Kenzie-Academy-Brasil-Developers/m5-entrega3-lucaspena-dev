import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";

import { CarServices } from "../services";

@injectable()
export class CarControllers {
  constructor(@inject("CarServices") private carServices: CarServices) {}

  async create({ body }: Request, res: Response): Promise<Response> {
    const car = await this.carServices.create(body);

    return res.status(201).json(car);
  }

  async read(_req: Request, res: Response): Promise<Response> {
    const cars = await this.carServices.read();

    return res.status(200).json(cars);
  }

  async readOne({ params }: Request, res: Response): Promise<Response> {
    const car = await this.carServices.readOne(params.id);

    return res.status(200).json(car);
  }

  async update({ params, body }: Request, res: Response): Promise<Response> {
    const car = await this.carServices.update(params.id, body);

    return res.status(200).json(car);
  }

  async delete({ params }: Request, res: Response): Promise<Response> {
    await this.carServices.delete(params.id);

    return res.status(204).send();
  }
}
