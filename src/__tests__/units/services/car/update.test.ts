import { CarServices } from "../../../../services";
import { carMock, carUpdateMock } from "../../../__mocks__/units/services/car";
import { prismaMock } from "../../../__mocks__/prisma";
import { carDefaultSpecs } from "../../../utils";

describe("Unit test: update car", () => {
  const body = carUpdateMock;
  const { expectedValue } = carMock;

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should be able to update a car correctly", async () => {
    prismaMock.car.update.mockResolvedValue({ ...expectedValue, ...body });

    const carServices = new CarServices().update(expectedValue.id, body);
    const received = await carServices;

    expect(received.id).toBeDefined();
    carDefaultSpecs(received, { ...expectedValue, ...body });
  });
});
