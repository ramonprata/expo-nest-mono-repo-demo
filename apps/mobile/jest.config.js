module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native" +
      "|@react-native" +
      "|@react-navigation" +
      "|expo" +
      "|expo-modules-core" +
      "|expo-haptics" +
      "|expo-symbols" +
      "|expo-router" +
      ")/)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
  },
  coveragePathIgnorePatterns: ["\\.mock\\.(ts|tsx|js|jsx)$"],
};
