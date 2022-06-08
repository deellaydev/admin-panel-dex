import React, {FC, useState} from 'react';
import styled from "styled-components";
import {Card} from "antd";
import {IFile} from "./Reports";

export const ReportsFileCard: FC<IFile> = ({title, fileId}) => {

  const handleDownloadSound = async () => {
    const response = await fetch('http://localhost:3002/loadSound').then((res) => res.blob())
    const src = URL.createObjectURL(response)
    let link = document.createElement("a")
    link.setAttribute("href", src)
    link.setAttribute("download", "Песня")
    link.click()
  }

  const handleDownloadFile = async (id: string | undefined) => {
    const response = await fetch(`http://localhost:3002/loadDoc/${id}`).then((res) => res.blob())
    const src = URL.createObjectURL(response)
    let link = document.createElement("a")
    link.setAttribute("href", src)
    link.setAttribute("download", `Файл - ${id}`)
    link.click()
  }

  return (
    <>
      {title === 'Sound' ?
        <StyledCard title={"Песня"} onClick={handleDownloadSound}/>
        :
        <StyledCard title={`Файл - ${fileId}`} onClick={() => handleDownloadFile(fileId)}/>
      }
    </>
  );
};
const StyledCard = styled(Card)`
  margin-bottom: 15px;
  cursor: pointer;
`