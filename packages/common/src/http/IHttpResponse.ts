export interface IHttpResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, unknown>;
  config?: unknown;
}
