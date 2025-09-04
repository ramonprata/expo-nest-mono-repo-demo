"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosHttpClient {
    static instance;
    axiosInstance;
    defaultConfig;
    constructor(defaultConfig = {}) {
        this.defaultConfig = defaultConfig;
        this.axiosInstance = axios_1.default.create(defaultConfig);
        this.setupInterceptors();
    }
    static getInstance(defaultConfig = {}) {
        if (!AxiosHttpClient.instance) {
            AxiosHttpClient.instance = new AxiosHttpClient(defaultConfig);
        }
        else {
            AxiosHttpClient.instance.defaultConfig = {
                ...AxiosHttpClient.instance.defaultConfig,
                ...defaultConfig,
            };
            AxiosHttpClient.instance.axiosInstance = axios_1.default.create(AxiosHttpClient.instance.defaultConfig);
            AxiosHttpClient.instance.setupInterceptors();
        }
        return AxiosHttpClient.instance;
    }
    setupInterceptors() {
        this.axiosInstance.interceptors.request.use((config) => {
            config.headers["Authorization"] = `Bearer token`;
            return config;
        }, (error) => Promise.reject(error));
        this.axiosInstance.interceptors.response.use((response) => response, (error) => {
            console.error("API Error:", error);
            return Promise.reject(error);
        });
    }
    mergeConfig(config) {
        return {
            ...this.defaultConfig,
            ...config,
            headers: {
                ...this.defaultConfig.headers,
                ...config?.headers,
            },
        };
    }
    async get(url, config) {
        const res = await this.axiosInstance.get(url, this.mergeConfig(config));
        return {
            data: res.data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            config: res.config,
        };
    }
    async post(url, body, config) {
        const res = await this.axiosInstance.post(url, body, this.mergeConfig(config));
        return {
            data: res.data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            config: res.config,
        };
    }
    async put(url, body, config) {
        const res = await this.axiosInstance.put(url, body, this.mergeConfig(config));
        return {
            data: res.data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            config: res.config,
        };
    }
    async delete(url, config) {
        const res = await this.axiosInstance.delete(url, this.mergeConfig(config));
        return {
            data: res.data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            config: res.config,
        };
    }
}
exports.AxiosHttpClient = AxiosHttpClient;
//# sourceMappingURL=AxiosHttpClient.js.map