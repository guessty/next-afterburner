const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  setupFiles: ['<rootDir>/config/jest/jest.setup.js'],
  globals: {
    'ts-jest': {
      tsConfigFile: '<rootDir>/config/jest/tsconfig.jest.json'
    }
  },
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist/', '<rootDir>/node_modules/'
  ],
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx'
  ],
  collectCoverage: true
}
