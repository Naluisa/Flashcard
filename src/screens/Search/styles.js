import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;    
    background-color: #27323D;
    `;
export const AreaHeader = styled.View`
    background-color: #373D43;
    width: 310;
    height: 32px;
    border-radius: 30px;
    flex-direction: row;
    align-items:center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const InputPesquisa = styled.TextInput`
    flex: 1;    
    font-size: 16px;
    color: #FFFFFF;
`;
