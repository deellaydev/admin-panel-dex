import React, {FC} from 'react';
import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";

export const BreadCrumbs = () => {

  const location = useLocation().pathname.split('/')

  return (
    <Breadcrumb style={{fontSize: "16px", marginBottom: "15px"}}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {location[location.length - 1] === '' ? <Breadcrumb.Item>Dashboard</Breadcrumb.Item> : location.map((el, i) => {
        return i !== 0 ? <Breadcrumb.Item key={i}><a href={''}>{el[0].toUpperCase() + el.slice(1)}</a></Breadcrumb.Item> : null
      })}
      {}
    </Breadcrumb>
  )
};
