import React, {FC} from 'react';
import {List} from "antd";
import {InvoiceCard} from "../../../invoices/components/InvoiceCard";
import styled from "styled-components";
import {IEmployee, IEmployeeResponse} from "../../../../api/dto/customers";
import {EmployeeCardList} from "./EmployeeCardList";

interface IProps {
  employees: IEmployeeResponse[]
}

export const EmployeesCard: FC<IProps> = ({employees}) => {
  return (
    <EmployeesCardWrapper>
      <List
        itemLayout={"vertical"}
        size={"large"}
        pagination={{
          pageSize: 3,
        }}
        dataSource={employees}
        renderItem={(item, i) => (
          <EmployeeCardList employee={item}/>
        )}>

      </List>
    </EmployeesCardWrapper>
  );
};
const EmployeesCardWrapper = styled.div`
  display: none;
  @media(max-width: 1000px){
    display: block;
  }
`