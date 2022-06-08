import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: #fbfbfbf2;
  background: #292db5;
  height: 41px;
  width: 190px;
  &:hover{
     cursor: pointer; 
  }
  
`;

export const Buttons = (OnClick) => {
    return (
        <>
        <Button type="submit">Login</Button>
        </>
    )
}

