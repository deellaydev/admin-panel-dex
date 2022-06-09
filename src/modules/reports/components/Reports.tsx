import React, {useEffect, useState} from 'react';
import {DashboardHeader} from "../../../common/components/DashBoard/DashboardHeader";
import styled from "styled-components";
import {List} from "antd";
import {ReportsFileCard} from "./ReportsFileCard";

export interface IFile {
  title: string;
  fileId?: string;
}

export const Reports = () => {

  const [files, setFiles] = useState<IFile[]>()

  useEffect(() => {
    let timerId = setTimeout(async function request() {
      if (!files) {
        const response = await fetch(`http://localhost:3002/loadFiles`).then((res) => res.json()).then((files) => files)
        setFiles(response)
        console.log(response);
        timerId = setTimeout(request, 10000)
      }
    }, 0)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <Container>
      <DashboardHeader/>
      <ReportsWrapper>
        <List
          itemLayout={"vertical"}
          size={"large"}
          pagination={{
            pageSize: 6,
          }}
          dataSource={files}
          renderItem={(item, i) => (
            <ReportsFileCard title={item.title} fileId={item.fileId}/>
          )}/>
      </ReportsWrapper>
    </Container>
  );
};
const Container = styled.div`
  padding: 30px 30px 0 30px;
  background: #fff;
`
const ReportsWrapper = styled.div`
  height: calc(100vh - 160px);
  background: #fff;
  border-radius: 15px;
  position: absolute;
  width: calc(100vw - 260px);
  margin-top: 20px;
  padding: 15px;
  @media (max-width: 900px) {
    width: calc(100vw - 50px);
  }
`