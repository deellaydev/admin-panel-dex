import React from 'react';
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import {Button, Checkbox, Form, Input} from "antd";

export const RegisterForm = () => {

  const getValues = () => {

  }

  return (
    <FormWrapper>
      <Title>Staff Pro</Title>
      <Title level={4}>Зарегестрируйтесь</Title>
      <Form>

      </Form>

    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 450px;
`