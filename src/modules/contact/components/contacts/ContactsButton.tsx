import React from 'react';
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import {configureContactsFile} from "./ContactsObjectFile";

export const ContactsButton = () => {

  const handleDownload = () => {
    const file = encodeURIComponent(configureContactsFile())
    let link = document.createElement("a")
    link.setAttribute("href", `data:text/plain,${file}`)
    link.setAttribute("download", "Contacts")
    link.click()
  }

  return (
    <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={handleDownload}>Скачать contacts.txt</Button>
  );
};
