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

import {Image, TouchableOpacity, StyleSheet} from 'react-native';

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
      alert('Preencha os campos');
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
    imagem:{
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  });
  return (
    <Container>
      <AreaInput>
        <TextoNegritoMensagemBotao>
          Preencha os dados referente à coleção a ser criada
        </TextoNegritoMensagemBotao>

        <LoginInput
          IconSvg={IconeEmail}
          placeholder="Nome coleção"
          value={email}
          onChangeText={t => setEmail(t)}
          label="Nome coleção"
        />

        <LoginInput
          IconSvg={IconeCadeado}
          placeholder="Senha"
          value={senha}
          onChangeText={t => setSenha(t)}
          password={true}
        />
        <TouchableOpacity style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
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
