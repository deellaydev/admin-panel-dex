import React, {FC} from 'react';
import {IEmployeeResponse} from "../../../../api/dto/customers";
import styled from "styled-components";
import {Button, Card, Popconfirm} from "antd";
import moment from "moment";
import {deleteEmployeeAction} from "../../customersAsyncAction";
import {deleteEmployee} from "../../customersSlice";
import {useAppDispatch} from "../../../../store/hooks/hooks";

interface IProps {
  employee: IEmployeeResponse
}

export const EmployeeCardList: FC<IProps> = ({employee}) => {

  const dispatch = useAppDispatch()

  const handleDeleteConfirm = async () => {
    await dispatch(deleteEmployeeAction({id: employee?.id || -1, cb: () => dispatch(deleteEmployee(employee?.id))}))
  }

  return (
    <StyledCard title={`ID сотрудника #${employee.id}`} extra={
      <Popconfirm title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={handleDeleteConfirm}>
        <Button size={"small"} type={"primary"} key={"deleteEmployee"}>Удалить сотрудника</Button>
      </Popconfirm>
    }>
      <p><strong>ФИО сотрудника:</strong>  {employee.fio}</p>
      <p><strong>Дата рождения:</strong>  {moment(new Date(employee?.birthDay)).calendar()}</p>
      <p><strong>Номер телефона:</strong>  {employee.telNumber || 'Номер не указан'}</p>
      <p><strong>Пол:</strong>  {employee.sex}</p>
      <p><strong>Должность:</strong>  {employee.post}</p>
    </StyledCard>
  );
};
const StyledCard = styled(Card)`
  margin-bottom: 15px;
`