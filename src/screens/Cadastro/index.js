import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, StyleSheet,TextInput} from 'react-native';

import {
  Container,
  AreaInput,
  BotaoCustomizado,
  TextoBotaoCustomizado,
  BotaoMensagemLogin,
  TextoMensagemBotao,
  TextoNegritoMensagemBotao,
  Imagem,
  Text,
  InputArea,
  TextoSenha
} from './styles';

import Logo from '../../assets/Logo.svg';
import IconeEmail from '../../assets/email.svg';
import IconeCadeado from '../../assets/lock.svg';
import IconePessoa from '../../assets/person.svg';
import IconeCasa from '../../assets/house.svg';

import CadastroInput from '../../components/CadastroInput';
import styled from 'styled-components/native';

import {auth} from '../../services/config';

export default () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [numberField, setNumberField] = useState('');

  const handleLoginClick = () => {
    if (email !== '' && senha !== '') {
      auth
        .createUserWithEmailAndPassword(email, senha)
        .then(credential => {
          const user = credential.user;
          navigation.navigate('MainTab');
        })
        .catch(erro => {
          console.log(erro);
          console.warn(erro);
        });
    } else {
      console.warn('deu erro');
    }
  };
  const handleMessageButtonClick = () => {
    navigation.navigate('LogTeste');
}

  return (
    <Container>
      <Imagem source={require('../../assets/logo.png')} />
      <Text>Mind Booster</Text>
      <TextoNegritoMensagemBotao>
        Preencha os dados do seu cadastro
      </TextoNegritoMensagemBotao>

      <AreaInput>
        <InputArea>
          <AreaInputLogin>
            <Texto>E-mail</Texto>
            <TextInput  
            style={styles.input}/>
        </AreaInputLogin>

        <AreaInputLogin>
            <Texto>Senha</Texto>
            <TextInput style={styles.input}/>
            <TouchableOpacity style={styles.eye}>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>
        </AreaInputLogin>

        <AreaInputLogin>
            <Texto>Repetir senha</Texto>
            <TextInput style={styles.input2} placeholder="sdsd"/>
            <TouchableOpacity style={styles.eye}>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>

        </AreaInputLogin>
          <TextoSenha>
        Senha não confere
      </TextoSenha>
        </InputArea>
        <BotaoCustomizado onPress={handleMessageButtonClick}>
          <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>
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
  marginLeft: -40,
  marginTop: 20,
  fontSize: 12,
  fontWeight: 'bold',
  borderLeftWidth: 1,
  borderLeftColor: '#6100ED',
  paddingLeft: 5,
  padding: 0
  
},
input2: {
  height:10,
  width:220,
  color: '#000000',
  marginLeft: -84,
  marginTop: 20,
  fontSize: 12,
  borderLeftWidth: 1,
  borderLeftColor: '#6100ED',
},
eye:{
  marginLeft: 30, 
  marginTop: 10, 
}
});
