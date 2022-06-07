import React from 'react';
import styled from "styled-components";
import {Pagination} from "antd";

export const TabWrapperComponent = ({children} : {children: JSX.Element}) => {
  return (
    <TabWrapper>
      {children}
    </TabWrapper>
  );
};
const TabWrapper = styled.div` 
  height: calc(100vh - 200px);
  background: #fff;
  border-radius: 15px;
  position: absolute;
  width: calc(100vw - 260px);
  margin-top: 20px;
  padding: 15px;
  @media(max-width: 900px) {
    width: calc(100vw - 50px);
  }
  @media(max-width: 700px) {
    overflow-y: auto;
  }
`