import React from 'react';
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import {configureHelpFile} from "./HelpObjectFile";

export const HelpButton = () => {

  const handleDownload = () => {
    const file = encodeURIComponent(configureHelpFile())
    let link = document.createElement("a")
    link.setAttribute("href", `data:text/plain,${file}`)
    link.setAttribute("download", "Help")
    link.click()
  }

  return (
    <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={handleDownload}>Скачать help.txt</Button>
  );
};
