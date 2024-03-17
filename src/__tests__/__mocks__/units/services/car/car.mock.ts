const carMock = {
  id: expect.any(String),
  name: "Carro 1",
  description: null,
  brand: "Carro 1 marca",
  year: 2021,
  km: 0,
};

const carCreateBodyMock = {
  name: "Carro 1",
  brand: "Carro 1 marca",
  year: 2021,
  km: 0,
};

const carUpdateBodyMock = {
  description: "Carro 1 descrição",
};

const carListMock = [
  {
    id: expect.any(String),
    name: "Carro 1",
    description: null,
    brand: "Carro 1 marca",
    year: 2021,
    km: 0,
  },
  {
    id: expect.any(String),
    name: "Carro 1",
    description: null,
    brand: "Carro 1 marca",
    year: 2021,
    km: 0,
  },
];

export { carMock, carCreateBodyMock, carUpdateBodyMock, carListMock };
