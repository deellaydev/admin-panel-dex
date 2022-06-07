import React, {FC} from 'react';
import {IEmployeeResponse} from "../../../../api/dto/customers";
import {Button, Modal, Popconfirm} from "antd";
import {useAppDispatch} from "../../../../store/hooks/hooks";
import {deleteEmployee, getAllEmployees} from "../../customersAsyncAction";

interface IProps {
  employee: IEmployeeResponse | undefined;
  isModalVisible: boolean;
  setIsModalVisible: (status: boolean) => void
}

export const EmployeeCard: FC<IProps> = ({employee, isModalVisible, setIsModalVisible}) => {

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useAppDispatch()

  return (
    <Modal title={"Информация о сотруднике"} visible={isModalVisible} onCancel={handleCancel} footer={[
      <Popconfirm title="Вы уверены？" okText="Да" cancelText="Нет" onConfirm={async () => {
        await dispatch(deleteEmployee(employee?.id || -1))
        await dispatch(getAllEmployees())
        setIsModalVisible(false)
      }}>
        <Button size={"large"} type={"primary"} key={"deleteEmployee"}>Удалить сотрудника</Button>
      </Popconfirm>
    ]}>
      <p><strong>ФИО:</strong> {employee?.fio}</p>
      <p><strong>EMail:</strong> {employee?.email}</p>
      <p><strong>Дата рождения:</strong> {employee?.birthDay}</p>
      <p><strong>Возраст:</strong> {new Date().getFullYear() - Number(employee?.birthDay.slice(-4))}</p>
      <p><strong>Номер телефона:</strong> {employee?.telNumber}</p>
      <p><strong>Пол:</strong> {employee?.sex}</p>
      <p><strong>Должность:</strong> {employee?.post}</p>
    </Modal>
  );
};
