import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #423f5d;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AreaInput = styled.View`
  width: 100%;
  padding: 40px;
`;
export const BotaoCustomizado = styled.TouchableOpacity`
  height: 46px;
  background-color: #6a61a1;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;
  margin-top: 20px;
`;

export const BotaoCustomizado2 = styled.TouchableOpacity`
  height: 46px;
  background-color: #b58d97;
  justify-content: center;
  align-items: center;
  margin-bottom: 220px;

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
  font-size: 16px;
  color: white;
`;
export const TextoNegritoMensagemBotao = styled.Text`
  font-size: 14px;
  color: white;
  margin-left: 5px;
  text-align: right;
  margin-top: -8px;
`;

export const Imagem = styled.Image`
  height: 123px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 210px;
  margin-bottom: -20px;
`;

export const Text = styled.Text`
  font-size: 44px;
  color: white;
  font-family: 'Pacifico';
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;
