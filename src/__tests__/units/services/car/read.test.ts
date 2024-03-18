import { CarServices } from "../../../../services";
import { prismaMock } from "../../../__mocks__/prisma";
import { carListMock } from "../../../__mocks__/units/services/car";
import { carDefaultSpecs } from "../../../utils";

describe("Unit test: read cars", () => {
  const expectedValue = carListMock;

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should be able to read cars correctly", async () => {
    prismaMock.car.findMany.mockResolvedValue(expectedValue);

    const carServices = new CarServices().read();
    const received = await carServices;

    expect(received).toHaveLength(2);
    expect(received[0].id).toBeDefined();
    expect(received[1].id).toBeDefined();

    carDefaultSpecs(received[0], expectedValue[0]);
    carDefaultSpecs(received[1], expectedValue[1]);
  });
});
