import React, {FC} from 'react';
import {IEmployeeResponse} from "../../../../api/dto/customers";
import {Button, Modal, Popconfirm} from "antd";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {deleteEmployeeAction, getAllEmployeesAction} from "../../customersAsyncAction";
import moment from "moment";
import {deleteEmployee} from "../../customersSlice";

interface IProps {
  employee: IEmployeeResponse | undefined;
  isModalVisible: boolean;
  setIsModalVisible: (status: boolean) => void
}

export const EmployeeCard: FC<IProps> = ({employee, isModalVisible, setIsModalVisible}) => {

  const dispatch = useAppDispatch()

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteConfirm = async () => {
    await dispatch(deleteEmployeeAction({id: employee?.id || -1, cb: () => dispatch(deleteEmployee(employee?.id))}))
    setIsModalVisible(false)
  }

  return (
    <Modal title={"Информация о сотруднике"} visible={isModalVisible} onCancel={handleCancel} footer={[
      <Popconfirm key={'popConfirm'} title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={handleDeleteConfirm}>
        <Button size={"large"} type={"primary"} key={"deleteEmployee"}>Удалить сотрудника</Button>
      </Popconfirm>]}>
      <p><strong>ФИО:</strong> {employee?.fio}</p>
      <p><strong>EMail:</strong> {employee?.email}</p>
      <p><strong>Дата рождения:</strong> {employee ? moment(new Date(employee?.birthDay)).calendar() : ''}</p>
      <p>
        <strong>Возраст:</strong> {employee ? new Date().getFullYear() - new Date(employee?.birthDay).getFullYear() : ''}
      </p>
      <p><strong>Номер телефона:</strong> {employee?.telNumber || 'Номер не указан'}</p>
      <p><strong>Пол:</strong> {employee?.sex}</p>
      <p><strong>Должность:</strong> {employee?.post}</p>
    </Modal>
  );
};
