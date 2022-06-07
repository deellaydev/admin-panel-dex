import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {IInvoice} from "../../../api/dto/invoices";
import {InvoiceCard} from "./InvoiceCard";
import {List, Pagination} from "antd";
import {useAppSelector} from "../../../store/hooks/hooks";

interface IProps {
  invoices: IInvoice[]
}

export const InvoicesCard: FC<IProps> = ({invoices}) => {


  return (
    <InvoicesCardWrapper>
      <List
        itemLayout={"vertical"}
        size={"large"}
        pagination={{
          pageSize: 3,
        }}
        dataSource={invoices}
      renderItem={(item, i) => (
        <InvoiceCard invoice={item}/>
      )}>

      </List>
    </InvoicesCardWrapper>
  );
};

const InvoicesCardWrapper = styled.div`
  display: none;
  @media(max-width: 1000px){
    display: block;
  }
`