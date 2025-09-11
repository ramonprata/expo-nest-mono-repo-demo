import { StorageKey } from './types';

export interface IStorage {
  get<T>(storageKeyDefinition: StorageKey): Promise<T | null>;
  set<T>(storageKeyDefinition: StorageKey, value: T): Promise<void>;
  remove(storageKeyDefinition: StorageKey): Promise<void>;
}
