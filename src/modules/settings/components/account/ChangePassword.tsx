import React, {useState} from 'react';
import styled from "styled-components";
import {Button, Drawer, Form, Input} from "antd";

export const ChangePassword = () => {

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const onCloseDrawer = () => {
    setVisibleDrawer(false);
  };

  return (
    <ChangePasswordWrapper>
      <Button type={"primary"} size={"large"} onClick={showDrawer}>Сменить пароль</Button>
      <Drawer
        title={"Сменить пароль"}
        placement={"left"}
        key={"changePassword"}
        visible={visibleDrawer}
        onClose={onCloseDrawer}>
        <Form>
          <Form.Item
            name={"password"}
            rules={[{
              required: true,
              message: "Обязательное поле"
            }]}
            hasFeedback>
            <Input.Password placeholder={"Пароль"}/>
          </Form.Item>
          <Form.Item
            name={"confirmPassword"}
            dependencies={['password']}
            rules={[{
              required: true,
              message: "Обязательное поле"
            },
              ({getFieldValue}) => ({
                validator: (_, value) => {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  } else {
                    return Promise.reject(new Error("Пароли не совпадают"))
                  }
                }
              })]}
            hasFeedback>
            <Input.Password placeholder={"Повторите пароль"}/>
          </Form.Item>
          <Form.Item>
            <Button size={"large"} type={"primary"} htmlType={"submit"}>Сменить пароль</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </ChangePasswordWrapper>
  );
};
const ChangePasswordWrapper = styled.div`
  
`