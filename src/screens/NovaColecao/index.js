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
} from './styles';

import {Image, TouchableOpacity, StyleSheet,TextInput} from 'react-native';

import styled from 'styled-components/native';


import IconeEmail from '../../assets/email.svg';
import IconeCadeado from '../../assets/lock.svg';

import LoginInput from '../../components/LoginInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {auth} from '../../services/config';

export default () => {
  
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
    navigation.reset({
      routes: [{name: 'Cadastro'}],
    });
  };

  const styles = StyleSheet.create({
    buttonFacebookStyle: {
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      padding: 15,
      flexDirection: 'row',
    },
    buttonFacebookStyle2: {
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      padding: 15,
      flexDirection: 'row',
    },
    imagem:{
      marginLeft: 70,
      marginRight: 'auto',
    },
  });
  return (
    <Container>
      <AreaInput>
        <TextoNegritoMensagemBotao>
          Preencha os dados referente à coleção a ser criada
        </TextoNegritoMensagemBotao>

        <AreaInputLogin>
            <Texto>Nome coleção</Texto>
            <TextInput  
            style={styles.input}/>
        </AreaInputLogin>

        <TouchableOpacity style={styles.buttonFacebookStyle}
                  activeOpacity={0.5}>
            <Texto2>Descrição</Texto2>
            <TextInput  
            style={styles.input}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFacebookStyle}
                  activeOpacity={0.5}>
            <Texto2>Imagem</Texto2>
            <Image style={styles.imagem} source={require('../../assets/mais.png')} />
        </TouchableOpacity>
        

        <BotaoCustomizado onPress={handleLoginClick}>
          <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 onPress={handleLoginClick}>
          <TextoBotaoCustomizado>CANCELAR</TextoBotaoCustomizado>
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
font-size: 13px;
color: #6200EE;
margin-top: -25px;
`;
const Texto2 = styled.Text`
font-size: 13px;
color: #6200EE;
margin-top: -5px;
`;

const styles = StyleSheet.create({
input: {
  height: 10,
  width:220,
  color: '#000000',
  marginLeft: -80,
  marginTop: 40,
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
