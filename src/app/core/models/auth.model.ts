// Lo que viene dentro de "data"
export interface AuthOutputDto {
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  username: string;
  password:  string;
}

// Lo que guardaremos en el Signal y LocalStorage
export interface UserSession {
  token: string;
  refreshToken: string;
}
