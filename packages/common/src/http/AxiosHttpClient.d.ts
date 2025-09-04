import { AxiosRequestConfig } from "axios";
import type { IHttpClient, IHttpResponse } from "../types/utilities/IHttpClient";
export interface IAxiosHttpClientConfig extends AxiosRequestConfig {
}
export declare class AxiosHttpClient implements IHttpClient {
    private static instance;
    private axiosInstance;
    private defaultConfig;
    private constructor();
    static getInstance(defaultConfig?: IAxiosHttpClientConfig): AxiosHttpClient;
    private setupInterceptors;
    private mergeConfig;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<IHttpResponse<T>>;
    post<T, K>(url: string, body?: K, config?: AxiosRequestConfig): Promise<IHttpResponse<T>>;
    put<T, K>(url: string, body?: K, config?: AxiosRequestConfig): Promise<IHttpResponse<T>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<IHttpResponse<T>>;
}
