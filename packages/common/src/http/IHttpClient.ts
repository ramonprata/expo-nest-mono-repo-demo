import { IHttpResponse } from "./IHttpResponse";

export interface IHttpClient {
  get<T>(url: string, options?: unknown): Promise<IHttpResponse<T>>;
  post<T>(
    url: string,
    body: unknown,
    options?: unknown
  ): Promise<IHttpResponse<T>>;
  put<T>(
    url: string,
    body: unknown,
    options?: unknown
  ): Promise<IHttpResponse<T>>;
  delete<T>(url: string, options?: unknown): Promise<IHttpResponse<T>>;
}
