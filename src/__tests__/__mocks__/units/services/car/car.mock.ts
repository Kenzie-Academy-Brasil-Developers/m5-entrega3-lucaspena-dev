const carMock = {
  body: {
    name: "Carro 1",
    brand: "Ford",
    year: 2022,
    km: 0,
  },
  expectedValue: {
    id: expect.any(String),
    name: "Carro 1",
    description: null,
    brand: "Ford",
    year: 2022,
    km: 0,
  },
};

const carUpdateMock = {
  description: "Tunado",
};

const carListMock = [
  {
    id: expect.any(String),
    name: "Carro 1",
    description: "Tunado",
    brand: "Ford",
    year: 2022,
    km: 0,
  },
  {
    id: expect.any(String),
    name: "Carro 2",
    description: null,
    brand: "Toyota",
    year: 2021,
    km: 0,
  },
];

export { carMock, carUpdateMock, carListMock };
