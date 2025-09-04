export interface IHttpResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, unknown>;
    config?: unknown;
}
export interface IHttpClient {
    get<T>(url: string, options?: unknown): Promise<IHttpResponse<T>>;
    post<T>(url: string, body: unknown, options?: unknown): Promise<IHttpResponse<T>>;
    put<T>(url: string, body: unknown, options?: unknown): Promise<IHttpResponse<T>>;
    delete<T>(url: string, options?: unknown): Promise<IHttpResponse<T>>;
}
