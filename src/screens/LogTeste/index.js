import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  AreaInput,
  BotaoCustomizado,
  BotaoCustomizado2,
  TextoBotaoCustomizado,
  BotaoMensagemLogin,
  TextoMensagemBotao,
  TextoNegritoMensagemBotao,
  Imagem,
  Text
} from '../LogTeste/styles';
import {Image} from 'react-native';
import styled from 'styled-components/native';

import {buttonEye} from './styles';

import LoginInputTeste from '../../components/LoginInputTeste';

import {auth} from '../../services/config';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <AreaInput>
      <Imagem source={require('../../assets/logo.png')}/>
      <Text>Mind Booster</Text>

        <AreaInputLogin>
            <Texto>E-mail</Texto>
            <Input/>
        </AreaInputLogin>
        <AreaInputLogin>
            <Texto>Senha</Texto>
            <Input/>
            <TouchableOpacity>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>
        </AreaInputLogin>

        <TextoNegritoMensagemBotao>Esqueci a senha</TextoNegritoMensagemBotao>

        <BotaoCustomizado >
          <TextoBotaoCustomizado>ENTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>

        <BotaoCustomizado2>
          <TextoBotaoCustomizado>CADASTRE-SE</TextoBotaoCustomizado>
        </BotaoCustomizado2>
      </AreaInput>
    </Container>
  );
};

const AreaInputLogin = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    flex-direction: row;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: black;
    margin-left: 10px;
    width: 10px;
    height: 10px;
`;

const Texto = styled.Text`
font-size: 14px;
color: #6200EE;
margin-top: -25px;
`;

