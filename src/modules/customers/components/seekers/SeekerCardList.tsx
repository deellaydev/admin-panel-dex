import React, {FC} from 'react';
import styled from "styled-components";
import {Button, Card, Popconfirm} from "antd";
import {ISeekerResponse} from "../../../../api/dto/customers";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {deleteSeekerAction} from "../../customersAsyncAction";
import {deleteSeeker} from "../../customersSlice";

interface IProps {
  seeker: ISeekerResponse
}

export const SeekerCardList: FC<IProps> = ({seeker}) => {

  const dispatch = useAppDispatch()

  const handleDeleteConfirm = async () => {
    await dispatch(deleteSeekerAction({id: seeker?.id || -1, cb: () => dispatch(deleteSeeker(seeker?.id))}))
  }

  return (
    <StyledCard title={`ID соискателя #${seeker.id}`} extra={
      <Popconfirm title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={handleDeleteConfirm}>
        <Button size={"small"} type={"primary"} key={"deleteEmployee"}>Удалить соискателя</Button>
      </Popconfirm>
    }>
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