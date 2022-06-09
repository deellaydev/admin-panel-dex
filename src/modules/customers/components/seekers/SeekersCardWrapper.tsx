import React, {FC} from 'react';
import {List} from "antd";
import styled from "styled-components";
import {ISeekerResponse} from "../../../../api/dto/customers";
import {SeekerCardList} from "./SeekerCardList";

interface IProps {
  seekers: ISeekerResponse[]
}

export const SeekersCardWrapper: FC<IProps> = ({seekers}) => {
  return (
    <WrapperSeekersCard>
      <List
        itemLayout={"vertical"}
        size={"large"}
        pagination={{
          pageSize: 3,
        }}
        dataSource={seekers}
        renderItem={(item, i) => (
          <SeekerCardList key={i} seeker={item}/>
        )}>
      </List>
    </WrapperSeekersCard>
  );
};
const WrapperSeekersCard = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`
