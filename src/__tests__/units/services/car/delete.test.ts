import { CarServices } from "../../../../services";
import { carMock } from "../../../__mocks__/units/services/car";

describe("Unit test: delete car", () => {
  const { id } = carMock.expectedValue.id;

  test("Should be able to delete a car correctly", async () => {
    const carServices = new CarServices().delete(id);
    await carServices;
  });
});
