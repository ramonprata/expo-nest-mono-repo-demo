import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import type {
  IHttpClient,
  IHttpResponse,
} from "../types/utilities/IHttpClient";

export interface IAxiosHttpClientConfig extends AxiosRequestConfig {}

export class AxiosHttpClient implements IHttpClient {
  private static instance: AxiosHttpClient;
  private axiosInstance: AxiosInstance;
  private defaultConfig: IAxiosHttpClientConfig;

  private constructor(defaultConfig: IAxiosHttpClientConfig = {}) {
    this.defaultConfig = defaultConfig;
    this.axiosInstance = axios.create(defaultConfig);

    this.setupInterceptors();
  }

  public static getInstance(
    defaultConfig: IAxiosHttpClientConfig = {}
  ): AxiosHttpClient {
    if (!AxiosHttpClient.instance) {
      AxiosHttpClient.instance = new AxiosHttpClient(defaultConfig);
    } else {
      AxiosHttpClient.instance.defaultConfig = {
        ...AxiosHttpClient.instance.defaultConfig,
        ...defaultConfig,
      };
      AxiosHttpClient.instance.axiosInstance = axios.create(
        AxiosHttpClient.instance.defaultConfig
      );
      AxiosHttpClient.instance.setupInterceptors();
    }
    return AxiosHttpClient.instance;
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers["Authorization"] = `Bearer token`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
      }
    );
  }

  private mergeConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.defaultConfig,
      ...config,
      headers: {
        ...this.defaultConfig.headers,
        ...config?.headers,
      },
    };
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IHttpResponse<T>> {
    const res = await this.axiosInstance.get<T>(url, this.mergeConfig(config));
    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
      config: res.config,
    };
  }

  async post<T, K>(
    url: string,
    body?: K,
    config?: AxiosRequestConfig
  ): Promise<IHttpResponse<T>> {
    const res = await this.axiosInstance.post<T>(
      url,
      body,
      this.mergeConfig(config)
    );
    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
      config: res.config,
    };
  }

  async put<T, K>(
    url: string,
    body?: K,
    config?: AxiosRequestConfig
  ): Promise<IHttpResponse<T>> {
    const res = await this.axiosInstance.put<T>(
      url,
      body,
      this.mergeConfig(config)
    );
    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
      config: res.config,
    };
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IHttpResponse<T>> {
    const res = await this.axiosInstance.delete<T>(
      url,
      this.mergeConfig(config)
    );
    return {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
      config: res.config,
    };
  }
}
