import React, {FC} from 'react';
import {Spin, Table} from "antd";

interface IProps{
  loading: boolean;
  dataSource: Array<object>
  columns: Array<object>
}

export const TableComponent: FC<IProps> = ({loading, dataSource, columns}) => {
  return (
    loading ? <Spin/> : <Table columns={columns} dataSource={dataSource}/>
  );
};
