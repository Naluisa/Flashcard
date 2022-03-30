import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  AreaInput,
  BotaoCustomizado,
  BotaoCustomizado2,
  TextoBotaoCustomizado,
  TextoNegritoMensagemBotao,
  Imagem,
  Text
} from '../LogTeste/styles';
import {Image, TextInput,StyleSheet} from 'react-native';
import styled from 'styled-components/native';


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
            value={email}
            placeholder="fulano@teste.com"/>
        </AreaInputLogin>

        <AreaInputLogin>
            <Texto>Senha</Texto>
            <TextInput style={styles.input} placeholder="******"/>
            <TouchableOpacity style={styles.eye}>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>
        </AreaInputLogin>
        <TouchableOpacity style={styles.EsqueceuSenha}>
        <TextoNegritoMensagemBotao>Esqueci a senha</TextoNegritoMensagemBotao>
        </TouchableOpacity>  

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
    padding-left: 10px;
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
  width: 270,
  height: 60,
  color: '#000000',
  marginLeft: -40,
  marginTop: 20,
  fontSize: 14,

  
},
eye:{
  marginLeft: 5, 
  marginTop: 10, 
},
EsqueceuSenha:{
  padding:2,
}
});
