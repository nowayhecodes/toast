import axios, { AxiosInstance, AxiosResponse } from "axios";

export class Toast {
  protected readonly instance: AxiosInstance;

  public constructor(public baseURL: string) {
    this.instance = axios.create({ baseURL });
    this.responseInterceptor();
  }

  private responseInterceptor() {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  private handleResponse = (response: AxiosResponse) =>
    Object.assign({}, response.data, response.status);

  private handleError = (error: any) => Promise.reject(error);

  async get(path: string, headers?: {}): Promise<JSON> {
    return await this.instance.get(path, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        ...headers,
      },
    });
  }

  async create(path: string, body: {}, headers?: {}): Promise<JSON> {
    return await this.instance.post(path, {
      method: "POST",
      body: JSON.stringify({ ...body }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        ...headers,
      },
    });
  }

  async update(path: string, body: {}, headers?: {}): Promise<JSON> {
    return await this.instance.patch(path, {
      method: "PATCH",
      body: JSON.stringify({ ...body }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        ...headers,
      },
    });
  }

  async delete(path: string, body?: {}, headers?: {}): Promise<JSON> {
    return await this.instance.delete(path, {
      method: "DELETE",
      data: JSON.stringify({ ...body }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        ...headers,
      },
    });
  }
}
