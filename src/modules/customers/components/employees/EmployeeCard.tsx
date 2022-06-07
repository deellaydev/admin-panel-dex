import React, {FC} from 'react';
import {IEmployeeResponse} from "../../../../api/dto/customers";
import {Button, Modal} from "antd";

interface IProps {
  employee: IEmployeeResponse | undefined;
  isModalVisible: boolean;
  setIsModalVisible: (status: boolean) => void
}

export const EmployeeCard: FC<IProps> = ({employee, isModalVisible, setIsModalVisible}) => {

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal title={"Информация о сотруднике"} visible={isModalVisible} onCancel={handleCancel} footer={[
      <Button size={"large"} type={"primary"}>Удалить сотрудника</Button>
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
