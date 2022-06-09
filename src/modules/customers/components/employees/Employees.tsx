import React, {useEffect, useState} from 'react';
import {TableComponent} from "../../../../common/components/DashBoard/TableComponent";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {getAllEmployeesAction} from "../../customersAsyncAction";
import {Button, Tag} from "antd";
import styled from "styled-components";
import {EmployeeCard} from "./EmployeeCard";
import {IEmployeeResponse} from "../../../../api/dto/customers";
import {NewEmployeeForm} from "./NewEmployeeForm";
import {EmployeesCardWrapper} from "./EmployeesCardWrapper";

export const Employees = () => {

  const employeesColumns = [
    {
      title: 'ID соискателя',
      dataIndex: 'id',
      key: 'id',
      render: (text: string, record: IEmployeeResponse) => <a onClick={() => showModalEmployee(record)}>{text}</a>
    },
    {
      title: 'ФИО',
      dataIndex: 'fio',
      key: 'fio',
    },
    {
      title: 'Должность',
      dataIndex: 'post',
      key: 'post',
      render: (text: string) => {
        switch (text) {
          case 'Директор':
            return <Tag color={"red"}>{text.toUpperCase()}</Tag>
          case 'Начальник отдела продаж':
            return <Tag color={"green"}>{text.toUpperCase()}</Tag>
          case 'Системный администратор':
            return <Tag color={"blue"}>{text.toUpperCase()}</Tag>
          case 'Начальник IT-отдела':
            return <Tag color={"cyan"}>{text.toUpperCase()}</Tag>
          case 'Программист':
            return <Tag color={"magenta"}>{text.toUpperCase()}</Tag>
          case 'Дизайнер':
            return <Tag color={"purple"}>{text.toUpperCase()}</Tag>
          default:
            return <Tag color={"red"}>{text.toUpperCase()}</Tag>
        }
      },
      filters: [
        {
          text: 'Директор',
          value: 'Директор',
        },
        {
          text: 'Начальник отдела продаж',
          value: 'Начальник отдела продаж',
        },
        {
          text: 'Системный администратор',
          value: 'Системный администратор',
        },
        {
          text: 'Начальник IT-отдела',
          value: 'Начальник IT-отдела',
        },
        {
          text: 'Программист',
          value: 'Программист',
        },
        {
          text: 'Дизайнер',
          value: 'Дизайнер',
        },
      ],
      onFilter: (value: string, record: IEmployeeResponse) => record.post.indexOf(value) === 0
    }
  ]

  const {loading, employees} = useAppSelector((state) => state.customersReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllEmployeesAction())
  }, [])

  const [isModalEmployeeVisible, setIsModalEmployeeVisible] = useState(false);
  const [modalEmployeeData, setModalEmployeeData] = useState<IEmployeeResponse>();

  const showModalEmployee = (employee: IEmployeeResponse) => {
    setIsModalEmployeeVisible(true);
    setModalEmployeeData(employee)
  };

  const [isModalAddEmployeeVisible, setIsModalAddEmployeeVisible] = useState(false);

  const showModalAddEmployee = () => {
    setIsModalAddEmployeeVisible(true)
  }

  return (
    <CustomersInner>
      <TableBlock>
        <TableComponent loading={loading} dataSource={employees} columns={employeesColumns}/>
        <EmployeesCardWrapper employees={employees}/>
      </TableBlock>
      <StyledButton size={"large"} type={"primary"} onClick={showModalAddEmployee}>Добавить сотрудника</StyledButton>
      <NewEmployeeForm setIsModalVisible={setIsModalAddEmployeeVisible} isModalVisible={isModalAddEmployeeVisible}/>
      <EmployeeCard isModalVisible={isModalEmployeeVisible} setIsModalVisible={setIsModalEmployeeVisible}
                    employee={modalEmployeeData}/>
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
  @media (max-width: 1000px) {
    bottom: 10px;
    position: absolute;
    width: 200px;
  }
`