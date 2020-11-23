module.exports = {
  globals: {},
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts"],
  coverageReporters: ["lcov", "clover", "text"],
  collectCoverage: true,
  collectCoverageFrom: ["src/lib/**/*.{ts,tsx}"],
  testMatch: ["<rootDir>/src/__test__/**/*.(test|spec).ts"],
  testEnvironment: "node",
};
