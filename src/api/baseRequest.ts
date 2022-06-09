export const BASE_URL = 'http://localhost:3001'

interface IRequestData {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT'
  body?: string
}

export const baseRequest = async (url: string, data: IRequestData, token: string | undefined) => {
    try {
      const tokenForHeaders = token ? {'Authorization': `Bearer ${token}`} : {}
      const multiPartForHeaders = (typeof data.body === 'string') ? {'Content-Type': 'application/json'} : {}

      const response = await fetch(url, {
        ...data,
        // @ts-ignore
        headers: {
          ...tokenForHeaders,
          ...multiPartForHeaders
        }
      });
      if (response.ok) {
        if (response.headers.get('Content-Length') === '0') {
          return true;
        }
        const responseType = response.headers.get('Content-Type');
        let result;
        if (responseType === 'application/json') {
          result = await response.text();
          return result;
        }
        result = await response.json();
        return result;
      }
    }
    catch (e: any) {
      throw new Error(e.message)
    }
}

export const get = (url: string, token?: string) => baseRequest(`${BASE_URL}${url}`, {method: 'GET'}, token)

export const post = (url: string, body: any, token?: string) => baseRequest(`${BASE_URL}${url}`, {
  method: 'POST',
  body
}, token)

export const remove = (url: string, token?: string) => baseRequest(`${BASE_URL}${url}`, {method: "DELETE"}, token)

export const put = (url: string, body: any, token?: string) => baseRequest(`${BASE_URL}${url}`, {
  method: "PUT",
  body
}, token)