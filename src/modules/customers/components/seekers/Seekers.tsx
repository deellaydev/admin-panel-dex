import React, {useEffect, useState} from 'react';
import {TableComponent} from "../../../../common/components/DashBoard/TableComponent";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks/hooks";
import {getAllSeekersAction} from "../../customersAsyncAction";
import {Button} from "antd";
import styled from "styled-components";
import {NewSeekerForm} from "./NewSeekerForm";
import {SeekersCardWrapper} from "./SeekersCardWrapper";
import {ISeekerResponse} from "../../../../api/dto/customers";
import {SeekerCard} from "./SeekerCard";

export const Seekers = () => {

  const seekersColumns = [
    {
      title: 'ID соискателя',
      dataIndex: 'id',
      key: 'id',
      render: (text: string, record: ISeekerResponse) => <a onClick={() => showModalSeeker(record)}>{text}</a>
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
      render: (value: string) => <p>{value || 'Номер не указан'}</p>
    },
    {
      title: 'Пол',
      dataIndex: 'sex',
      key: 'sex',
      filters: [
        {
          text: 'Мужской',
          value: 'Мужской'
        },
        {
          text: 'Женский',
          value: 'Женский'
        }
      ],
      onFilter: (value: string, record: ISeekerResponse) => record.sex.indexOf(value) === 0
    }
  ];

  const {loading, seekers} = useAppSelector((state) => state.customersReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllSeekersAction())
  }, [])

  const [isModalSeekerVisible, setIsModalSeekerVisible] = useState(false);
  const [modalSeekerData, setModalSeekerData] = useState<ISeekerResponse>();

  const showModalSeeker = (seeker: ISeekerResponse) => {
    setIsModalSeekerVisible(true);
    setModalSeekerData(seeker)
  };

  const [isModalAddSeekerVisible, setIsModalAddSeekerVisible] = useState(false);

  const showModalAddSeeker = () => {
    setIsModalAddSeekerVisible(true)
  }

  return (
    <CustomersInner>
      <TableBlock>
        <TableComponent loading={loading} dataSource={seekers} columns={seekersColumns}/>
        <SeekersCardWrapper seekers={seekers}/>
      </TableBlock>
      <StyledButton size={"large"} type={"primary"} onClick={showModalAddSeeker}>Добавить соискателя</StyledButton>
      <NewSeekerForm isModalVisible={isModalAddSeekerVisible} setIsModalVisible={setIsModalAddSeekerVisible}/>
      <SeekerCard seeker={modalSeekerData} isModalVisible={isModalSeekerVisible}
                  setIsModalVisible={setIsModalSeekerVisible}/>
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