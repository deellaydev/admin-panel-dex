import {createAsyncThunk} from "@reduxjs/toolkit";
import {customersService} from "../../api/customers/customersService";
import {IEmployee, ISeeker} from "../../api/dto/customers";
import {retry} from "@reduxjs/toolkit/query";

export const addNewSeeker = createAsyncThunk(
  "customers/addSeeker",
  async (data: ISeeker) => {
    const addSeekerData = {
      email: data.email,
      fio: data.surname + ' ' + data.name + ' ' + data.patronymic,
      birthDay: data.dayOfBirth + '.' + data.monthOfBirth + '.' + data.yearOfBirth,
      telNumber: data.telNumber,
      sex: data.sex
    }
    return await new customersService().addSeeker(JSON.stringify(addSeekerData));
  }
)

export const addNewEmployee = createAsyncThunk(
  "customers/addEmployee",
  async (data: IEmployee) => {
    const addSeekerData = {
      email: data.email,
      fio: data.surname + ' ' + data.name + ' ' + data.patronymic,
      birthDay: data.dayOfBirth + '.' + data.monthOfBirth + '.' + data.yearOfBirth,
      telNumber: data.telNumber,
      sex: data.sex,
      post: data.post
    }
    return await new customersService().addEmployee(JSON.stringify(addSeekerData));
  }
)

export const getAllSeekers = createAsyncThunk(
  "customers/getSeekers",
  async () => {
    return await new customersService().getSeekers()
  }
)

export const getAllEmployees = createAsyncThunk(
  "customers/getEmployees",
  async () => {
    return await new customersService().getEmployees()
  }
)