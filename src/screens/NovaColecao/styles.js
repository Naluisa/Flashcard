import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #423F5D;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const AreaInput = styled.View`
    width: 100%;
    padding:40px;
`;
export const BotaoCustomizado = styled.TouchableOpacity`
height: 46px;
background-color:#6A61A1;
    justify-content: center;
    align-items: center;
  margin-top: -10px;
  margin-bottom: -100px;
`;

export const BotaoCustomizado2 = styled.TouchableOpacity`
    height: 46px;
    background-color:#00000000;
    justify-content: center;
    align-items: center;
    border-color: white;
    borderWidth:1;
margin-top: 130px;
margin-bottom: 40px;
`;
export const TextoBotaoCustomizadoColor = styled.Text`
font-size: 65px;
color: #000000;
font-weight: bold;
`;

export const TextoBotaoCustomizado = styled.Text`
    font-size: 15px;
    color: white;
    font-weight: bold;

`;

export const BotaoMensagemLogin = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const TextoMensagemBotao = styled.Text`
    font-size: 16px;
    color: white;
    font-weight: bold;
`;
export const TextoNegritoMensagemBotao = styled.Text`
font-size: 20px;
color: white;
margin-left: 5px;
margin-top: 20px;
text-align: center;
`;

