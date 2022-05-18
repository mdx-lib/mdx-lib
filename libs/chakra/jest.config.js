module.exports = {
  displayName: 'chakra',
  preset: '../../jest.preset.js',
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/chakra',
}
