import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/units/**/*.test.[jt]s?(x)"],
  setupFilesAfterEnv: ["./src/__tests__/__mocks__/prisma.ts"],
};

export default config;
