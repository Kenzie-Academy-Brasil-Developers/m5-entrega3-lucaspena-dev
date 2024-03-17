import { injectable } from "tsyringe";

import {
  CarCreate,
  CarReturn,
  CarServicesProps,
  CarUpdate,
} from "../interfaces";
import { prisma } from "../database/prisma";
import { carReturnSchema } from "../schemas";

@injectable()
export class CarServices implements CarServicesProps {
  async create(data: CarCreate): Promise<CarReturn> {
    const car = await prisma.car.create({ data });
    return carReturnSchema.parseAsync(car);
  }

  async read(): Promise<CarReturn[]> {
    const cars = await prisma.car.findMany();
    return carReturnSchema.array().parseAsync(cars);
  }

  async readOne(id: string): Promise<CarReturn> {
    const car = await prisma.car.findUnique({ where: { id } });
    return carReturnSchema.parseAsync(car);
  }

  async update(id: string, data: CarUpdate): Promise<CarReturn> {
    const car = await prisma.car.update({ where: { id }, data });
    return carReturnSchema.parseAsync(car);
  }

  async delete(id: string): Promise<void> {
    await prisma.car.delete({ where: { id } });
  }
}
