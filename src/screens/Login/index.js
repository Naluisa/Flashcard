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
} from './styles';

import IconeOlho from '../../assets/eye.svg';

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

  return (
    <Container>
      <AreaInput>
      <Imagem source={require('../../assets/logo.png')}/>
      <Text>Mind Booster</Text>
        <LoginInput
          IconSvg={IconeEmail}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={t => setEmail(t)}
        />

        <LoginInput
          IconSvg={IconeOlho}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={t => setSenha(t)}
          password={true}
        />

        <TextoNegritoMensagemBotao>Esqueci a senha</TextoNegritoMensagemBotao>

        <BotaoCustomizado onPress={handleLoginClick}>
          <TextoBotaoCustomizado>ENTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>

        <BotaoCustomizado2 onPress={handleLoginClick}>
          <TextoBotaoCustomizado>CADASTRE-SE</TextoBotaoCustomizado>
        </BotaoCustomizado2>
      </AreaInput>
    </Container>
  );
};
