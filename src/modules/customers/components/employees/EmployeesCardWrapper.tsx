import React, {FC} from 'react';
import {List} from "antd";
import styled from "styled-components";
import {IEmployeeResponse} from "../../../../api/dto/customers";
import {EmployeeCardList} from "./EmployeeCardList";

interface IProps {
  employees: IEmployeeResponse[]
}

export const EmployeesCardWrapper: FC<IProps> = ({employees}) => {
  return (
    <WrapperEmployeesCard>
      <List
        itemLayout={"vertical"}
        size={"large"}
        pagination={{
          pageSize: 3,
        }}
        dataSource={employees}
        renderItem={(item, i) => (
          <EmployeeCardList key={i} employee={item}/>
        )}>

      </List>
    </WrapperEmployeesCard>
  );
};
const WrapperEmployeesCard = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`