import React, {useEffect, useState} from 'react';
import {ISeeker} from "../../../../api/dto/customers";
import {TableComponent} from "../../../../common/components/DashBoard/TableComponent";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {getAllEmployees, getAllSeekers} from "../../customersAsyncAction";
import {Button, Modal, Tag} from "antd";
import styled from "styled-components";
import {NewInvoicesForm} from "../../../invoices/components/NewInvoicesForm";
import {NewEmployeeForm} from "./NewEmployeeForm";

export const employeesColumns = [
  {
    title: 'ID соискателя',
    dataIndex: 'id',
    key: 'id',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'ФИО',
    dataIndex: 'fio',
    key: 'fio',
  },
  {
    title: 'Номер телефона',
    dataIndex: 'telNumber',
    key: 'telNumber',
  },
  {
    title: 'Пол',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDay',
    key: 'birthDay'
  },
  {
    title: 'Должность',
    dataIndex: 'post',
    key: 'post',
    render: (text: string) => <Tag color={"red"}>{text.toUpperCase()}</Tag>
  }
];

export const Employees = () => {

  const { error, loading, employees} = useAppSelector((state) => state.customersReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllEmployees())
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <CustomersInner>
      <TableBlock>
        <TableComponent loading={loading} dataSource={employees} columns={employeesColumns}/>
      </TableBlock>
      <StyledButton size={"large"} type={"primary"} onClick={showModal}>Добавить сотрудника</StyledButton>
      <Modal title={"Добавить сотрудника"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <NewEmployeeForm/>
      </Modal>
    </CustomersInner>
  );
};
const CustomersInner = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`
const TableBlock = styled.div`
  height: 90%;
`
const StyledButton = styled(Button)`
  justify-content: flex-end;
`