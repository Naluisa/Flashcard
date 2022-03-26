import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
    navigation.reset({
      routes: [{name: 'Login'}],
    });
  };

  return (
    <Container>
      <Imagem source={require('../../assets/logo.png')} />
      <Text>Mind Booster</Text>
      <TextoNegritoMensagemBotao>
        Preencha os dados do seu cadastro
      </TextoNegritoMensagemBotao>

      <AreaInput>
        <InputArea>
          <CadastroInput
            IconSvg={IconeEmail}
            placeholder="E-mail"
            value={email}
            onChangeText={t => setEmail(t)}
          />

          <CadastroInput
            IconSvg={IconeCadeado}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={t => setSenha(t)}
            password={true}
          />
          <CadastroInput
            IconSvg={IconeCasa}
            placeholder="Nº Apartamento"
            value={numberField}
            onChangeText={t => setNumberField(t)}
          />
          <TextoSenha>
        Senha não confere
      </TextoSenha>
        </InputArea>
        <BotaoCustomizado onPress={handleLoginClick}>
          <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>
      </AreaInput>
    </Container>
  );
};
