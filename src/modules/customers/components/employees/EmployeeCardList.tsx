import React, {FC} from 'react';
import {IEmployee, IEmployeeResponse} from "../../../../api/dto/customers";
import styled from "styled-components";
import {Card} from "antd";
import moment from "moment";

interface IProps {
  employee: IEmployeeResponse
}

export const EmployeeCardList: FC<IProps> = ({employee}) => {
  return (
    <StyledCard title={`ID сотрудника #${employee.id}`}>
      <p><strong>ФИО сотрудника:</strong>  {employee.fio}</p>
      <p><strong>Дата рождения:</strong>  {employee.birthDay}</p>
      <p><strong>Номер телефона:</strong>  {employee.telNumber}</p>
      <p><strong>Пол:</strong>  {employee.sex}</p>
      <p><strong>Должность:</strong>  {employee.post}</p>
    </StyledCard>
  );
};
const StyledCard = styled(Card)`
  margin-bottom: 15px;
`