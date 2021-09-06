import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 20px solid lavenderblush;
    padding: 40px 50px;
    width: 500px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    align-items: center;
`;

export const Form = styled.form`
    
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 20px;
    margin: 5px 0;
    box-sizing: border-box;
    border: solid 3px lightblue;
    border-radius: 8px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    flex-grow: 1;
    justify-content: space-between;
    height: 0%;
    margin-top: 10px;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    margin: auto;
`;

