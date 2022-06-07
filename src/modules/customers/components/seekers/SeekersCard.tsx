import React, {FC} from 'react';
import {List} from "antd";
import {EmployeeCardList} from "../employees/EmployeeCardList";
import styled from "styled-components";
import {IEmployeeResponse, ISeekerResponse} from "../../../../api/dto/customers";
import {SeekerCardList} from "./SeekerCardList";

interface IProps {
  seekers: ISeekerResponse[]
}

export const SeekersCard: FC<IProps> = ({seekers}) => {
  return (
    <SeekersCardWrapper>
      <List
        itemLayout={"vertical"}
        size={"large"}
        pagination={{
          pageSize: 3,
        }}
        dataSource={seekers}
        renderItem={(item, i) => (
          <SeekerCardList seeker={item}/>
        )}>
      </List>
    </SeekersCardWrapper>
  );
};
const SeekersCardWrapper = styled.div`
  display: none;
  @media(max-width: 1000px){
    display: block;
  }
`
