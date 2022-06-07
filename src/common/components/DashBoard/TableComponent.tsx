import React, {FC} from 'react';
import {Spin, Table} from "antd";
import styled from "styled-components";

interface IProps{
  loading: boolean;
  dataSource: Array<object>
  columns: Array<object>
}

export const TableComponent: FC<IProps> = ({loading, dataSource, columns}) => {
  return (
    loading ? <Spin/> : <StyledTable columns={columns} dataSource={dataSource} rowKey={"id"}/>
  );
};
const StyledTable = styled(Table)`
  @media(max-width: 1000px) {
    display: none;
  }
`
