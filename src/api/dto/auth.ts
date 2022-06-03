export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  surname: string;
  name: string;
  patronymic: string;
  password: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  telNumber: string;
  sex: string;
}

export interface IUserResponse {
  email: string;
  password: string;
  surname: string;
  name: string;
  patronymic: string;
  birthDay: string;
  telNumber: string;
  sex: string;
  id: number;
}