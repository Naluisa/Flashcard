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
import {Image, TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {buttonEye} from './styles';

import LoginInputTeste from '../../components/LoginInputTeste';

import {auth} from '../../services/config';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default () => {
  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState(null);

  const handleLoginClick = () => {
    if (email !== '' && senha !== '') {
      auth.signInWithEmailAndPassword(email, senha).then(userCredential => {
        console.log('userCredential', userCredential);
        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem(
          '@SalvaLogin',
          JSON.stringify(userCredential),
        ).then(() => {
          const user = userCredential.user;
          console.log(user);
          navigation.navigate('MainTab');
        });
      });
    } else {
      navigation.navigate('MainTab');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.navigate('Cadastro');
}
  return ( 
    <Container>
      <AreaInput>
      <Imagem source={require('../../assets/logo.png')}/>
      <Text>Mind Booster</Text>

        <AreaInputLogin>
            <Texto>E-mail</Texto>
            <TextInput  
            style={styles.input}
            onChangeEmail={onChangeEmail}
            value={email}/>
        </AreaInputLogin>

        <AreaInputLogin>
            <Texto>Senha</Texto>
            <TextInput style={styles.input}/>
            <TouchableOpacity style={styles.eye}>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>
        </AreaInputLogin>

        <TextoNegritoMensagemBotao>Esqueci a senha</TextoNegritoMensagemBotao>

        <BotaoCustomizado >
          <TextoBotaoCustomizado>ENTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>

        <BotaoCustomizado2>
          <TextoBotaoCustomizado onPress={handleMessageButtonClick}>CADASTRE-SE</TextoBotaoCustomizado>
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

const styles = StyleSheet.create({
input: {
  height: 10,
  width:220,
  color: '#000000',
  marginLeft: -40,
  marginTop: 20,
  fontSize: 20,
  fontWeight: 'bold',
  borderWidth: 1,
  borderLeftColor: '#6100ED',
  
},
eye:{
  marginLeft: 30, 
  marginTop: 10, 
}
});
