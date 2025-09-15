export class BaseManager {
  handleError(error: unknown, handler?: () => void): void {
    handler?.();
    throw error;
  }
}
