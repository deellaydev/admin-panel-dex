export interface ISeeker {
  email: string;
  surname: string;
  name: string;
  patronymic: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  telNumber?: string | null;
  sex: string;
}

export interface IEmployee extends ISeeker {
  post: string
}

export interface ISeekerResponse {
  email: string;
  fio: string;
  birthDay: number;
  telNumber?: string | null;
  sex: string;
  id: number;
}

export interface IEmployeeResponse extends ISeekerResponse {
  post: string
}