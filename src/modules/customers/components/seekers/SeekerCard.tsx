import React, {FC} from 'react';
import {ISeekerResponse} from "../../../../api/dto/customers";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {Button, Modal, Popconfirm} from "antd";
import {deleteSeekerAction, getAllSeekersAction} from "../../customersAsyncAction";
import moment from "moment";
import {deleteEmployee, deleteSeeker} from "../../customersSlice";

interface IProps {
  seeker: ISeekerResponse | undefined;
  isModalVisible: boolean;
  setIsModalVisible: (status: boolean) => void
}

export const SeekerCard: FC<IProps> = ({seeker, isModalVisible, setIsModalVisible}) => {

  const dispatch = useAppDispatch()

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteSeeker = async () => {
    await dispatch(deleteSeekerAction({id: seeker?.id || -1, cb: () => dispatch(deleteSeeker(seeker?.id))}))
    setIsModalVisible(false)
  }

  return (
    <Modal title={"Информация о соискателе"} visible={isModalVisible} onCancel={handleCancel} footer={[
      <Popconfirm key={'popConfirm'} title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={handleDeleteSeeker}>
        <Button size={"large"} type={"primary"} key={"deleteSeeker"}>Удалить соискателя</Button>
      </Popconfirm>]}>
      <p><strong>ФИО:</strong> {seeker?.fio}</p>
      <p><strong>EMail:</strong> {seeker?.email}</p>
      <p><strong>Дата рождения:</strong> {seeker ? moment(new Date(seeker?.birthDay)).calendar() : ''}</p>
      <p><strong>Возраст:</strong> {seeker ? new Date().getFullYear() - new Date(seeker?.birthDay).getFullYear() : ''}
      </p>
      <p><strong>Номер телефона:</strong> {seeker?.telNumber || 'Номер не указан'}</p>
    </Modal>
  );
};
