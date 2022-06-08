import React, {FC} from 'react';
import styled from "styled-components";
import {IInvoice} from "../../../api/dto/invoices";
import {InvoiceCardList} from "./InvoiceCardList";
import {List} from "antd";

interface IProps {
  invoices: IInvoice[]
}

export const InvoicesCardWrapper: FC<IProps> = ({invoices}) => {


  return (
    <WrapperInvoicesCard>
      <List
        itemLayout={"vertical"}
        size={"large"}
        pagination={{
          pageSize: 3,
        }}
        dataSource={invoices}
      renderItem={(item, i) => (
        <InvoiceCardList invoice={item}/>
      )}/>
    </WrapperInvoicesCard>
  );
};

const WrapperInvoicesCard = styled.div`
  display: none;
  @media(max-width: 1000px){
    display: block;
  }
`