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

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginClick = () => {
    if (email !== '' && senha !== '') {
      auth
        .signInWithEmailAndPassword(email, senha)
        .then(credential => {
          const user = credential.user;
          navigation.navigate('Colecoes');
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
    navigation.reset({
        routes: [{name: 'Cadastro'}]
    });
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
             onChangeText={t=>setEmail(t)}
            value={email}
            placeholder="fulano@teste.com"/>
        </AreaInputLogin>

        <AreaInputLogin>
            <Texto>Senha</Texto>
            <TextInput style={styles.input} placeholder="******"
            value={senha}
            onChangeText={t=>setSenha(t)}
            password={true}/>
            <TouchableOpacity style={styles.eye}>
              <Image class="eye" source={require('../../assets/eye.png')} />
            </TouchableOpacity>
        </AreaInputLogin>
        <TouchableOpacity style={styles.EsqueceuSenha}>
        <TextoNegritoMensagemBotao>Esqueci a senha</TextoNegritoMensagemBotao>
        </TouchableOpacity>  

          <BotaoCustomizado onPress={handleLoginClick}>
          <TextoBotaoCustomizado>ENTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>

        <BotaoCustomizado2 onPress={handleMessageButtonClick}>
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
