module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '.build-config/tsconfig.json'
    }
  },
  rootDir: '../',
  roots: [
    "./"
  ],
  testMatch: [
    "**/*.test.+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  collectCoverage: true,
  coverageDirectory: "out/reports/coverage",
  collectCoverageFrom: [
    "src/**/*.ts"
  ]
};