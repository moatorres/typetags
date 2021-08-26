module.exports = {
  testEnvironment: 'node',
  testRegex: '\\.(test|spec)?\\.(js|jsx)$',
  moduleFileExtensions: ['ts', 'js', 'node'],
  setupFilesAfterEnv: ['jest-extended'],
  watchPathIgnorePatterns: ['/init/*', '/data/*'],
  modulePathIgnorePatterns: ['temp', 'benchmarks', '.internal'],
}
