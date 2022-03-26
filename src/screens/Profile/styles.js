import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;    
    background-color: #27323D;
`;
export const AreaBotao = styled.View`
    width: 100%;
    padding:40px;
    align-items: center;
    justify-content: center;

`;
export const BotaoSair = styled.TouchableOpacity`
    height: 52px;
    width: 162px;
    background-color:#FE5F55;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
export const TextoBotao = styled.Text`
    font-size: 18px;
    color: white;

`;
export const Title = styled.Text`
  font-size: 20px;
  color: white};
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;
export const Formulario = styled.ScrollView`
    align-self: stretch;
    padding: 30px;
  `;
  export const CaixaFormulario = styled.ScrollView`
  margin-vertical: 5px;

  `;