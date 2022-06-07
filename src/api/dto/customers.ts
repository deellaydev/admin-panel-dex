export interface ISeeker {
  email: string;
  surname: string;
  name: string;
  patronymic: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  telNumber?: string;
  sex: string;
}

export interface IEmployee extends ISeeker {
  post: string
}

export interface ISeekerResponse {
  email: string;
  fio: string;
  birthDay: string;
  telNumber?: string;
  sex: string;
  id: number;
}

export interface IEmployeeResponse extends ISeekerResponse {
  post: string
}