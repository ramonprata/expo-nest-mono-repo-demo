import { AsyncStorageEngine } from './AsyncStorageEngine';
import { SecureStoreEngine } from './SecureStoreEngine';
import { getDeserializedItem, setSerializedItem } from './storageUtils';
import { IStorageEngine, StorageKey, StorageTypeEnum } from './types';

export class Storage {
  private static instance: Storage;

  private secureEngine: IStorageEngine;
  private commonEngine: IStorageEngine;

  constructor() {
    this.secureEngine = new SecureStoreEngine();
    this.commonEngine = new AsyncStorageEngine();
  }

  public static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }

  private getEngine(type: StorageTypeEnum): IStorageEngine {
    return type === StorageTypeEnum.SECURE
      ? this.secureEngine
      : this.commonEngine;
  }

  async get<T>(storageKeyDefinition: StorageKey): Promise<T | null> {
    return await getDeserializedItem<T>(
      storageKeyDefinition.key,
      this.getEngine(storageKeyDefinition.type).getItem,
    );
  }

  async set<T>(storageKeyDefinition: StorageKey, value: T): Promise<void> {
    return await setSerializedItem<T>(
      storageKeyDefinition.key,
      value,
      this.getEngine(storageKeyDefinition.type).setItem,
    );
  }

  async remove(storageKeyDefinition: StorageKey): Promise<void> {
    await this.getEngine(storageKeyDefinition.type).removeItem(
      storageKeyDefinition.key,
    );
  }
}
