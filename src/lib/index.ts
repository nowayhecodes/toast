import fetch from 'node-fetch';

export class Toast {
  static async get(url: string, headers?: {}): Promise<JSON> {
    return await fetch(url, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        ...headers,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  }

  static async create(url: string, body: {}, headers: {}): Promise<JSON> {
    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ ...body }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        ...headers,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  }

  static async update(url: string, body: {}, headers: {}): Promise<JSON> {
    return await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({ ...body }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        ...headers,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  }

  static async delete(url: string, body: {}, headers: {}): Promise<JSON> {
    return await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({ ...body }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        ...headers,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  }
}
