import { Car } from "@prisma/client";
import { carMock } from "../../../__mocks__/units/services";
import { prisma } from "../../../../database/prisma";
import { CarServices } from "../../../../services";
import { carDefaultSpecs } from "../../../utils";

describe("Unit test: Create car service", () => {
  const { body, expectedValue } = carMock;
  const carTb = prisma.car;

  beforeEach(async () => {
    await prisma.$transaction([carTb.deleteMany()]);
  });

  afterAll(async () => {
    await prisma.$transaction([carTb.deleteMany()]);
  });

  test("Should be able to create a car correctly", async () => {
    const carServices = new CarServices().create;
    const received = (await carServices(body)) as Car;

    carDefaultSpecs(received, expectedValue);
  });
});
