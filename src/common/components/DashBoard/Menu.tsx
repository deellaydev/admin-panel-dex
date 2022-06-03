import React, {BaseSyntheticEvent} from 'react';
import {Menu} from "antd";
import {MenuProps} from "antd";
import {SettingOutlined, StockOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {SyntheticEventData} from "react-dom/test-utils";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [

  getItem('Dashboard', 'dashboard'),
  getItem('Reports', 'reports', <StockOutlined />),
  getItem('Documents', 'documents', null, [
    getItem('Invoices', 'invoices'),
    getItem('Drafts', 'drafts'),
    getItem('Templates', 'templates'),
  ]),
  getItem('Customers', 'customers', <UserOutlined />),
  getItem('Settings', 'settings', <SettingOutlined />),
  getItem('Help & Contact', 'help'),

];

export const MenuComponent = () => {

  const handleNavigate = (pathArray: string[]) => {
    let path = '';

    for (let i = pathArray.length - 1; i !== -1; i--) {
      path = path + '/' + pathArray[i]
    }
    navigate(path);
  }

  const navigate = useNavigate()

  return (
    <Menu
      defaultSelectedKeys = {['1']}
      defaultOpenKeys = {['dashboard']}
      mode={"inline"}
      items={items}
      style={{
        paddingTop: "60px"
      }}
      onClick={(e) => handleNavigate(e.keyPath)}
    />
  );
};
