import { getDeserializedItem, setSerializedItem } from '../storageUtils';

describe('storageUtils', () => {
  const mockSetItem = jest.fn();
  const mockGetItem = jest.fn();

  it('should set object as serialized json', () => {
    setSerializedItem('testKey', { test: 'value' }, mockSetItem);

    expect(mockSetItem).toHaveBeenCalledWith(
      expect.stringMatching('testKey'),
      expect.stringMatching(/^\{"test":"value"\}$/)
    );
  });
  it('should set plain string', () => {
    setSerializedItem('testKey', 'testValue', mockSetItem);

    expect(mockSetItem).toHaveBeenCalledWith(
      expect.stringMatching('testKey'),
      expect.stringMatching(/^testValue$/)
    );
  });

  it('should handle empty string', () => {
    setSerializedItem('testKey', '', mockSetItem);

    expect(mockSetItem).toHaveBeenCalledWith(
      expect.stringMatching('testKey'),
      expect.stringMatching(/^$/)
    );
  });

  it('should return null for non-existent key', async () => {
    mockGetItem.mockResolvedValue(null);

    const result = await getDeserializedItem('nonExistentKey', mockGetItem);

    expect(result).toBeNull();
  });

  it('should return a json deserialized object', async () => {
    mockGetItem.mockResolvedValue('{"test":"value"}');

    const result = await getDeserializedItem('testKey', mockGetItem);

    expect(result).toEqual({ test: 'value' });
  });

  it('should return a plain string', async () => {
    mockGetItem.mockResolvedValue('testValue');

    const result = await getDeserializedItem('testKey', mockGetItem);

    expect(result).toEqual('testValue');
  });
});
