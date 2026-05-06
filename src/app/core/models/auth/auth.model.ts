// Lo que viene dentro de "data"
export interface AuthOutputDto {
  accessToken: string;
  refreshToken: string;
}

export interface LoginInputDto {
  username: string;
  password:  string;
  recaptcha: string;
}

// Lo que guardaremos en el Signal y LocalStorage
export interface UserSession {
  token: string;
  refreshToken: string;
}
