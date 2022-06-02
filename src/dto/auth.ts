export interface ILogin {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  isAdmin: boolean;
}