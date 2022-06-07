import React, {useEffect, useState} from 'react';
import {TableComponent} from "../../../../common/components/DashBoard/TableComponent";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {getAllSeekers} from "../../customersAsyncAction";
import {Button, Modal} from "antd";
import styled from "styled-components";
import {NewSeekerForm} from "./NewSeekerForm";
import {SeekersCard} from "./SeekersCard";

export const seekersColumns = [
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
  }
];

export const Seekers = () => {

  const { error, loading, seekers} = useAppSelector((state) => state.customersReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllSeekers())
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
        <TableComponent loading={loading} dataSource={seekers} columns={seekersColumns}/>
        <SeekersCard seekers={seekers}/>
      </TableBlock>
      <StyledButton size={"large"} type={"primary"} onClick={showModal}>Добавить соискателя</StyledButton>
      <Modal title={"Добавить соискателя"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <NewSeekerForm/>
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