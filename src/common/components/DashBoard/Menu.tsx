import React from 'react';
import {Menu} from "antd";
import {MenuProps} from "antd";
import {
  FileDoneOutlined, InfoCircleOutlined,
  PieChartOutlined,
  RiseOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import {useLocation, useNavigate} from "react-router-dom";

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
  getItem('Dashboard', 'dashboard', <PieChartOutlined />),
  getItem('Reports', 'reports', <RiseOutlined />),
  getItem('Documents', 'documents', <FileDoneOutlined />, [
    getItem('Invoices', 'invoices'),
    getItem('Drafts', 'drafts'),
    getItem('Templates', 'templates'),
  ]),
  getItem('Customers', 'customers', <UserOutlined/>),
  getItem('Settings', 'settings', <SettingOutlined/>),
  getItem('Help & Contact', 'contact', <InfoCircleOutlined />),
];

export const MenuComponent = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate = (pathArray: string[]) => {
    let path = '';
    document.title = `${pathArray[0].slice(0,1).toUpperCase() + pathArray[0].slice(1)}`
    if (pathArray[0] === 'dashboard'){
      navigate('/');
      return;
    }

    for (let i = pathArray.length - 1; i !== -1; i--) {
      path = path + '/' + pathArray[i]
    }
    navigate(path);
  }

  return (
    <Menu
      defaultSelectedKeys={location.pathname.split('/')[1] === '' ? ['dashboard'] : location.pathname.split('/')}
      defaultOpenKeys={['dashboard']}
      mode={"inline"}
      items={items}
      style={{
        paddingTop: "60px",
        width: "100%",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
        height: "100vh"
      }}
      onClick={(e) => handleNavigate(e.keyPath)}
    />
  );
};
