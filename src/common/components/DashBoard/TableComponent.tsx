import React, {FC} from 'react';
import {Spin, Table} from "antd";
import {columns} from "../../../modules/invoices/components/InvoicesTableColumns";

interface IProps{
  loading: boolean;
  dataSource: Array<object>
}

export const TableComponent: FC<IProps> = ({loading, dataSource}) => {
  return (
    loading ? <Spin/> : <Table columns={columns} dataSource={dataSource}/>
  );
};
