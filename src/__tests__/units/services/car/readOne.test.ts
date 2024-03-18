import { CarServices } from "../../../../services";
import { prismaMock } from "../../../__mocks__/prisma";
import { carMock } from "../../../__mocks__/units/services/car";
import { carDefaultSpecs } from "../../../utils";

describe("Unit test: read one car", () => {
  const { expectedValue } = carMock;

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should be able to read one car correctly", async () => {
    prismaMock.car.findUnique.mockResolvedValue(expectedValue);

    const carServices = new CarServices().readOne(expectedValue.id);
    const received = await carServices;

    expect(received.id).toBeDefined();
    carDefaultSpecs(received, expectedValue);
  });
});
