import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

import { prisma } from "../database/prisma";
import { AppError } from "../errors";

@injectable()
class EnsureMiddleware {
  validateBody(schema: AnyZodObject) {
    return async (
      { body }: Request,
      _res: Response,
      next: NextFunction
    ): Promise<void> => {
      body = await schema.parseAsync(body);

      return next();
    };
  }

  async isCarIdValid({ params }: Request, _res: Response, next: NextFunction) {
    const { id } = params;
    const car = await prisma.car.findUnique({ where: { id } });

    if (!car) throw new AppError(404, "Car not found.");

    return next();
  }
}

export const ensure = container.resolve(EnsureMiddleware);
