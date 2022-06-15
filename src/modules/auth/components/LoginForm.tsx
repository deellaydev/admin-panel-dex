import React, {useEffect} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Checkbox, Form, Input,} from "antd";
import {ILogin} from "../../../api/dto/auth";
import styled from "styled-components";
import {useAppDispatch} from "../../../store/reduxHooks";
import {loginAction} from "../authAsyncAction";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const LoginForm = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {t} = useTranslation()

  const getValues = async ({email, password}: ILogin) => {
    await dispatch(loginAction({
      data: {email, password},
      navigate: () => navigate('/')
    }))
  }

  useEffect(() => {
    document.title = "Login"
  })

  return (
    <FormWrapper>
      <Title>{t('auth.greetingText')}</Title>
      <Form
        name={"login"}
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        layout={"vertical"}
        initialValues={{
          isRemember: true
        }}
        onFinish={getValues}>
        <Form.Item
          label={t('auth.loginLabel')}
          name={"email"}
          rules={[{
            required: true,
            message: t('auth.requirement')
          },
            {
              type: "email",
              message: t('auth.invalidMail')
            }
          ]}>
          <Input size={"large"}/>
        </Form.Item>
        <Form.Item
          label={t('auth.passwordLabel')}
          name={"password"}
          rules={[{
            required: true,
            message: t('auth.requirement')
          }]}>
          <Input.Password size={"large"}/>
        </Form.Item>
        <Form.Item>
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Form.Item
              name={"isRemember"}
              valuePropName={"checked"}
              noStyle>
              <Checkbox>{t('auth.rememberLabel')}</Checkbox>
            </Form.Item>

            <a onClick={() => navigate('/restorePassword')}>
              {t('auth.forgetPassword')}
            </a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} size={"large"} htmlType={"submit"}>{t('auth.loginButton')}</Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 450px
`