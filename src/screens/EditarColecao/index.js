import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  AreaInput,
  BotaoCustomizado,
  BotaoCustomizado2,
  TextoBotaoCustomizado,
  TextoNegritoMensagemBotao,
} from '../NovaColecao/styles';

import {Image, TouchableOpacity, StyleSheet,TextInput} from 'react-native';

import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {auth} from '../../services/config';
import AdicionaCartao from '../../components/AdicionaCartao';

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
    input: {
      width: 270,
  height: 60,
  color: '#000000',
  marginLeft: -90,
  marginTop: 20,
  fontSize: 14,
    },
    input2: {
      width: 270,
  height: 70,
  color: '#000000',
  marginLeft: -60,
  marginTop: -8,
  fontSize: 14,
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

        <AdicionaCartao/>
        

        <BotaoCustomizado onPress={() => navigation.navigate('Colecoes')}>
          <TextoBotaoCustomizado>SALVAR ALTERAÇÕES</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 onPress={() => navigation.navigate('Colecoes')}>
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
    margin-top: 30px;
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

