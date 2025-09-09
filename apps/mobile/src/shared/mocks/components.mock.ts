import '../components/IconSymbol/IconSymbol';

jest.mock('../components/IconSymbol/IconSymbol', () => ({
  IconSymbol: require('../components/IconSymbol/IconSymbol.mock')
    .IconSymbolMock,
}));
