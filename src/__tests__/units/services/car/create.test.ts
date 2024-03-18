import { CarServices } from "../../../../services";
import { prismaMock } from "../../../__mocks__/prisma";
import { carMock } from "../../../__mocks__/units/services/car";
import { carDefaultSpecs } from "../../../utils";

describe("Unit test: create car", () => {
  const { body, expectedValue } = carMock;

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should be able to create a new car correctly", async () => {
    prismaMock.car.create.mockResolvedValue(expectedValue);

    const carServices = new CarServices().create(body);
    const received = await carServices;

    expect(received.id).toBeDefined();
    carDefaultSpecs(received, expectedValue);
  });
});
