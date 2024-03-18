import { Car } from "@prisma/client";

import { CarDefaultSpecs } from "../../interfaces";

export const carDefaultSpecs = (
  received: CarDefaultSpecs,
  expectedValue: Car
) => {
  expect(received.name).toStrictEqual(expectedValue.name);
  expect(received.description).toStrictEqual(expectedValue.description);
  expect(received.brand).toStrictEqual(expectedValue.brand);
  expect(received.year).toStrictEqual(expectedValue.year);
  expect(received.km).toStrictEqual(expectedValue.km);
};
