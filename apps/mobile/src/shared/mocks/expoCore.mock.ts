// Mocks expo core modules
jest.mock("expo-haptics", () => ({
  impactAsync: jest.fn(),
  notificationAsync: jest.fn(),
  selectionAsync: jest.fn(),
}));

jest.mock("expo-modules-core", () => ({
  NativeModulesProxy: {},
  requireNativeModule: jest.fn(),
  EventEmitter: jest.fn(),
}));
