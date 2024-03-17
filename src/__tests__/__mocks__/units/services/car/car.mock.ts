const carMock = {
  id: "de58ac3d-ba0e-46f7-9408-fd28ea9e501b",
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
    id: "de58ac3d-ba0e-46f7-9408-fd28ea9e501b",
    name: "Carro 1",
    description: null,
    brand: "Carro 1 marca",
    year: 2021,
    km: 0,
  },
  {
    id: "de58ac3d-ba0e-46f7-9408-fd28ea9e501b",
    name: "Carro 1",
    description: null,
    brand: "Carro 1 marca",
    year: 2021,
    km: 0,
  },
];

export { carMock, carCreateBodyMock, carUpdateBodyMock, carListMock };
