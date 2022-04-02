import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, StyleSheet,TextInput, View} from 'react-native';

import {
  Container,
  AreaInput,
  BotaoCustomizado,
  TextoBotaoCustomizado,
  TextoNegritoMensagemBotao,
  Imagem,
  Text,
  InputArea,
  TextoSenha
} from './styles';

import styled from 'styled-components/native';

import {auth} from '../../services/config';

export default () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repeteSenha, setRepeteSenha] = useState('');
  const [erroCadastro, setErroCadastro] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(true);

  const handleLoginClick = () => {
    if (email !== '' && senha !== '') {
      auth
        .createUserWithEmailAndPassword(email, senha, repeteSenha)
        .then(credential => {
          const user = credential.user;
          if(user.senha == user.repeteSenha )
          navigation.navigate('Colecoes');
        }) 
        .catch(erro => {
          setErroCadastro(true);
          let errorCode = erro.code;
          let errorMessage = erro.errorMessage;
          
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
            style={styles.input}
            placeholder="fulano@teste.com"
            value={email}
            onChangeText={t => setEmail(t)}/>
        </AreaInputLogin>

        <AreaInputLogin>
            <Texto>Senha</Texto>
            <TextInput style={styles.input} placeholder="******"
            value={senha}
            onChangeText={t => setSenha(t)}
            secureTextEntry={mostrarSenha}/>
            <TouchableOpacity style={styles.eye} onPress={() => setMostrarSenha(!mostrarSenha)}>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>
        </AreaInputLogin>

        <AreaInputLogin>
            <Texto>Repetir senha</Texto>
            <TextInput style={styles.input2} placeholder="******"
            value={repeteSenha}
            onChangeText={t => setRepeteSenha(t)}
            secureTextEntry={mostrarSenha}/>
            <TouchableOpacity style={styles.eye} onPress={() => setMostrarSenha(!mostrarSenha)}>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>

        </AreaInputLogin>

        {erroCadastro === true ? (
            <TextoSenha>
              Senha não confere
            </TextoSenha>
          ) : (
            <View />
          )}
        </InputArea>
        <BotaoCustomizado onPress={handleLoginClick}>
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

const Texto = styled.Text`
font-size: 13px;
color: #6200EE;
margin-top: -25px;
`;

const styles = StyleSheet.create({
input: {
  width: 270,
  height: 60,
  color: '#000000',
  marginLeft: -40,
  marginTop: 20,
  fontSize: 14,
  
},
input2: {
  width: 270,
  height: 60,
  color: '#000000',
  marginLeft: -84,
  marginTop: 20,
  fontSize: 14,
},
eye:{
  marginLeft: -5, 
  marginTop: 10, 
}
});
