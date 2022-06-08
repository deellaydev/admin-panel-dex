import {get, post, remove} from "../baseRequest";

export class CustomersService {

  async addSeeker(data: string) {
    return await post('/seekers', data)
  }

  async addEmployee(data: string) {
    return await post('/employees', data)
  }

  async getSeekers() {
    return await get('/seekers')
  }

  async getEmployees() {
    return await get('/employees')
  }

  async deleteEmployee(id: number) {
    return await remove(`/employees/${id}`);
  }

  async deleteSeeker(id: number) {
    return await remove(`/seekers/${id}`)
  }

}