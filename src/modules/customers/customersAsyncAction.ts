import {createAsyncThunk} from "@reduxjs/toolkit";
import {CustomersService} from "../../api/customers/customersService";
import {IEmployee, IEmployeeResponse, ISeeker, ISeekerResponse} from "../../api/dto/customers";
import moment from "moment";

export const addNewSeekerAction = createAsyncThunk<ISeekerResponse, ISeeker>(
  "customers/addSeeker",
  async (data) => {
    const addSeekerData = {
      email: data.email,
      fio: data.surname + ' ' + data.name + ' ' + data.patronymic,
      birthDay: moment(new Date(`${data.yearOfBirth}-${data.monthOfBirth}-${data.dayOfBirth}`)).valueOf(),
      telNumber: data.telNumber || null,
      sex: data.sex
    }
    return await new CustomersService().addSeeker(JSON.stringify(addSeekerData));
  }
)

export const addNewEmployeeAction = createAsyncThunk<IEmployeeResponse, IEmployee>(
  "customers/addEmployee",
  async (data) => {
    const addSeekerData = {
      email: data.email,
      fio: data.surname + ' ' + data.name + ' ' + data.patronymic,
      birthDay: moment(new Date(`${data.yearOfBirth}-${data.monthOfBirth}-${data.dayOfBirth}`)).valueOf(),
      telNumber: data.telNumber || null,
      sex: data.sex,
      post: data.post
    }
    return await new CustomersService().addEmployee(JSON.stringify(addSeekerData));
  }
)

export const getAllSeekersAction = createAsyncThunk<ISeekerResponse[]>(
  "customers/getSeekers",
  async () => {
    return await new CustomersService().getSeekers()
  }
)

export const getAllEmployeesAction = createAsyncThunk<IEmployeeResponse[]>(
  "customers/getEmployees",
  async () => {
    return await new CustomersService().getEmployees()
  }
)

export const deleteEmployeeAction = createAsyncThunk<void, { id: number, cb: () => void}>(
  "customers/deleteEmployee",
  async ({id, cb}) => {
    await new CustomersService().deleteEmployee(id);
    cb();
  }
)

export const deleteSeekerAction = createAsyncThunk<void, { id: number, cb: () => void}>(
  "customers/deleteSeeker",
  async ({id, cb}) => {
    await new CustomersService().deleteSeeker(id);
    cb();
  }
)