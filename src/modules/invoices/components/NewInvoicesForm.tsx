import React, {FC, useRef, useState} from 'react';
import styled from "styled-components";
import {Alert, Button, DatePicker, Form, Input, InputNumber, message, Select} from "antd";
import moment from 'moment'
import {useAppDispatch} from "../../../store/hooks/hooks";
import {addNewInvoices} from "../invoicesAsyncAction";
import useCloseOutside from "../../../store/hooks/useCloseOutside";
import {CloseCircleOutlined} from "@ant-design/icons";

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

export const NewInvoicesForm = () => {

  const dispatch = useAppDispatch()

  const addInvoice = async (values: IInvoiceForm) => {
    const day = ('0' + values.paymentDate.date()).slice(-2)
    const month = ('0' + values.paymentDate.month()).slice(-2)
    const year = values.paymentDate.year()

    const structuredDate = day + '-' + month + '-' + year

    const invoice = {
      nameInvoice: values.nameInvoice,
      valueInvoice: values.valueInvoice  + values.currency,
      paymentDate: structuredDate,
      isPayment: false
    }

    await dispatch(addNewInvoices(invoice))
  }

  return (
    <FormWrapper>
      <Form
        name={"newInvoices"}
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
        <Form.Item>
          <Button size={"large"} type={"primary"} style={{width: "100%"}} htmlType={"submit"}>Добавить счёт</Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 300px;
  text-align: center;
  height: 350px;
  padding: 25px;
  
`