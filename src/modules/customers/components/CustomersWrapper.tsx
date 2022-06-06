import React, {FC} from 'react';
import styled from "styled-components";
import {Button} from "antd";
import {Seekers} from "./seekers/Seekers";

interface IProps {
  children: JSX.Element;
  buttonText: string;
}

export const CustomersWrapper: FC<IProps> = ({children, buttonText}) => {
  return (
    <CustomersInner>
      <TableBlock>
        {children}
      </TableBlock>
      <StyledButton size={"large"} type={"primary"}>{buttonText}</StyledButton>
    </CustomersInner>
  );
};
const CustomersInner = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`
const TableBlock = styled.div`
  height: 90%;
`
const StyledButton = styled(Button)`
  justify-content: flex-end;
`