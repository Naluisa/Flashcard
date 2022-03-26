import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #43405E;
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
  margin-top: 50px;
`;
export const TextoBotaoCustomizado = styled.Text`
    font-size: 14px;
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
    font-size: 14px;
    color: white;
`;
export const TextoNegritoMensagemBotao = styled.Text`
    font-size: 28px;
    color: white;
    margin-left: 5px;
    text-align: center;
`;

export const Imagem = styled.Image`
  width: 65px;
  height: 65px;
  margin-top: 210px;
  margin-bottom: -20px;
  top: -293px;
  left: -160px;
`;

export const Text = styled.Text`
  font-size: 22px;
  color: white;
  font-family: 'Pacifico';
  top: -323px;
  left: -65px;
  margin-bottom: -266px;
`;

export const InputArea = styled.View`
  
  margin-top: 60px;
  margin-bottom: -30px;
`;

export const TextoSenha = styled.Text`
font-size: 13px;
  color: #FF5353;
  margin-top: -10px;
  margin-left: 15px;
`;
