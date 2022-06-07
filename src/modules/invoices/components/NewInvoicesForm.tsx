import React, {FC} from 'react';
import styled from "styled-components";
import { Button, DatePicker, Form, Input, InputNumber, Modal, Select} from "antd";
import moment from 'moment'
import {useAppDispatch} from "../../../store/hooks/hooks";
import {addNewInvoices} from "../invoicesAsyncAction";

const {Option} = Select;

const selectAfter = (
  <Form.Item name={"currency"} noStyle>
    <Select>
      <Option value="$">$</Option>
      <Option value="¥">¥</Option>
      <Option value="₣">₣</Option>
      <Option value="£">£</Option>
    </Select>
  </Form.Item>
);

interface IInvoiceForm {
  nameInvoice: string
  valueInvoice: string
  paymentDate: moment.Moment
  currency: string
}

interface IProps {
  isModalVisible: boolean;
  handleCancel: () => void;
}

export const NewInvoicesForm: FC<IProps> = ({isModalVisible, handleCancel}) => {

  const dispatch = useAppDispatch()

  const addInvoice = async (values: IInvoiceForm) => {
    const day = ('0' + values.paymentDate.date()).slice(-2)
    const month = ('0' + values.paymentDate.month()).slice(-2)
    const year = values.paymentDate.year()

    const structuredDate = day + '-' + month + '-' + year

    const invoice = {
      nameInvoice: values.nameInvoice,
      valueInvoice: values.valueInvoice + values.currency,
      paymentDate: structuredDate,
      isPayment: false
    }

    await dispatch(addNewInvoices(invoice))
  }

  return (
    <Modal title={"Добавить счёт"} visible={isModalVisible} onCancel={handleCancel} footer={[
      <Button size={"large"} type={"primary"} style={{width: "100%"}} form={"newInvoice"} htmlType={"submit"} key={"addInvoice"}>Добавить счёт</Button>
    ]}>
      <FormWrapper>
        <Form
          name={"newInvoice"}
          id={"newInvoice"}
          layout={"vertical"}
          initialValues={{
            currency: "$"
          }}
          onFinish={addInvoice}>
          <Form.Item
            label={"Имя счёта"}
            name={"nameInvoice"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}>
            <Input/>
          </Form.Item>
          <Form.Item
            label={"Размер счёта"}
            name={"valueInvoice"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}>
            <InputNumber addonAfter={selectAfter} type={"number"}/>
          </Form.Item>
          <Form.Item
            label={"Дата выплаты"}
            name={"paymentDate"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}
            style={{alignItems: "start"}}>
            <DatePicker/>
          </Form.Item>
        </Form>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 25px;

`