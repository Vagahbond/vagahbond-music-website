import HttpError from './HttpError'

export enum Sender {
  INTERNAL,
  EXTERNAL 
}


class Fetch {
  private baseExternalURL: string;

  private _apiKey: string;

  constructor() {
    this.baseExternalURL = process.env.NEXT_PUBLIC_API_EXTERNAL_HOST || 'http://localhost:3031'
  }

  public get apiKey() {
    return this._apiKey;
  }

  public set apiKey(theApiKey: string) {
    this._apiKey = theApiKey;
  }

  api<T>(url: string, sender: Sender): Promise<T> {
    let baseUrl;
    
    switch (sender) {
      case Sender.INTERNAL:
        baseUrl = 'http://api:3000';
        break;
      case Sender.EXTERNAL:
        baseUrl = this.baseExternalURL
        break;
    }
  
    return fetch(baseUrl + url, {headers: { api_key: this._apiKey }})
      .then(response => {
        if (!response.ok) {
          throw new HttpError(response.status, response.statusText)
        }
        return response.json() as Promise<T>
      })
  }
}

export const fetchHandle = new Fetch();
