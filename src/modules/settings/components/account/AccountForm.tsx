import React, {useState} from 'react';
import {Button, Drawer, Form, Input, Popconfirm, Select} from "antd";
import styled from "styled-components";
import {IUserResponse} from "../../../../api/dto/auth";
import {deleteEmployee} from "../../../customers/customersAsyncAction";
import {ChangePassword} from "./ChangePassword";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {changeUserDataAction} from "../../settingsAsyncAction";
import {authService} from "../../../../api/auth/authService";

export const AccountForm = () => {

  const currentUser: IUserResponse = JSON.parse(localStorage.getItem("user") || '').user;
  const [form] = Form.useForm()

  const dispatch = useAppDispatch()

  const handleChangeUserData = async (value: any) => {
    const passwordUser = await new authService().getUserById(currentUser.id)
    const updatedUser = {
      ...currentUser,
      name: form.getFieldValue('name'),
      surname: form.getFieldValue('surname'),
      patronymic: form.getFieldValue('patronymic'),
      email: form.getFieldValue('email'),
      telNumber: form.getFieldValue('telNumber'),
      password: passwordUser.password
    }
    await dispatch(changeUserDataAction(updatedUser))
  }


  return (
    <>
      <FormWrapper name={"userSettings"} layout={"vertical"} initialValues={{
        name: currentUser.name,
        surname: currentUser.surname,
        patronymic: currentUser.patronymic,
        email: currentUser.email,
        telNumber: currentUser.telNumber
      }} form={form} onFinish={handleChangeUserData}>
        <Form.Item label={"Имя"} name={"name"}>
          <Input/>
        </Form.Item>
        <Form.Item label={"Фамилия"} name={"surname"}>
          <Input/>
        </Form.Item>
        <Form.Item label={"Отчество"} name={"patronymic"}>
          <Input/>
        </Form.Item>
        <Form.Item label={"EMail"} name={"email"}>
          <Input/>
        </Form.Item>
        <Form.Item label={"Номер телефона"} name={"telNumber"}>
          <Input/>
        </Form.Item>
        <Form.Item>
          <Popconfirm title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={handleChangeUserData}>
            <Button size={"large"} type={"primary"}>Изменить</Button>
          </Popconfirm>
        </Form.Item>
      </FormWrapper>
      <ChangePassword/>
    </>
  );
};
const FormWrapper = styled(Form)`
  width: 400px;
`