export interface ApiConfig {
  baseUrl: string;
  clientId: string;
  clientSecret: string;
}

export interface AppConfig {
  title:string;
  production: boolean;
  api: ApiConfig;
  imageBaseUrl: string;
}
