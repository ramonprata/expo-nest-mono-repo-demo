import '@testing-library/jest-native/extend-expect';

// Mocks  React Native functions, if needed
import 'react-native-gesture-handler/jestSetup';

// Mocks other native modules if needed

// Mocks expo core modules
import './src/shared/mocks/expoCore.mock';

// Mocks Components
import './src/shared/mocks/components.mock';

// Store mock
import './src/shared/mocks/store.mock';
