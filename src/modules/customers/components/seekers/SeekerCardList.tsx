import React, {FC} from 'react';
import styled from "styled-components";
import {Card} from "antd";
import {ISeekerResponse} from "../../../../api/dto/customers";

interface IProps {
  seeker: ISeekerResponse
}

export const SeekerCardList: FC<IProps> = ({seeker}) => {
  return (
    <StyledCard title={`ID соискателя #${seeker.id}`}>
      <p><strong>ФИО соискателя:</strong>  {seeker.fio}</p>
      <p><strong>Дата рождения:</strong>  {seeker.birthDay}</p>
      <p><strong>Номер телефона:</strong>  {seeker.telNumber}</p>
      <p><strong>Пол:</strong>  {seeker.sex}</p>
    </StyledCard>
  );
};
const StyledCard = styled(Card)`
  margin-bottom: 15px;
`