import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Scroller, HeaderArea, HeaderTitle, ListArea,TextoNegritoMensagemBotao,BotaoCustomizado,
  TextoBotaoCustomizado,BotaoCustomizado2,TextoCartao, View,} from './styles';
  import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput, 
  } from 'react-native';

import MenuItem from '../../components/Colecoes/MenuItem';
import Cartao from '../../components/Cartao';
import db from '../../services/config';
import IconeOlho from '../../assets/eye.svg';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { block } from 'react-native-reanimated';
import AdicionaCartao from '../../components/AdicionaCartao';

export default () => {

  const navigation = useNavigation();

  const [frente, setFrente] = useState('');
  const [verso, setVerso] = useState('');

  const NovoCartao = () => {
    if (frente !== '' && verso !== '') {
        db.collection('Cartao').add({ frente: frente, verso: verso});
    } else {
        alert("Preencha os campos");
    }
}

  return (
    <Container>
      <Scroller>
        <ListArea>

        <TextoNegritoMensagemBotao>
          Preencha os dados da frente e do verso do flashcard
        </TextoNegritoMensagemBotao>

        <AdicionaCartao/>

          <BotaoCustomizado onPress={() => navigation.navigate('Cartoes')}>
          <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 onPress={() => navigation.navigate('Cartoes')}>
          <TextoBotaoCustomizado>CANCELAR</TextoBotaoCustomizado>
        </BotaoCustomizado2>

        </ListArea>
      </Scroller>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#332E56',
  },
  buttonFacebookStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 40,
    flexDirection: 'row',
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonFacebookStyle2: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginTop: -17,
    padding: 40,
    flexDirection: 'row',
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  input: {
    height: 60,
    margin: 12,
    borderBottomWidth: 2,
    alignItems: 'center',
    color: 'black',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    width: 170,
    textAlign: 'center',
    paddingBottom: -17,
  },
  buttonTextStyle: {
    color: '#777777',
    marginBottom: 4,
    marginLeft: 2,
    marginTop: -10,
    fontSize: 18,
    textAlign: 'left',
  },
  Linha:{
    backgroundColor: 'red',
    width: 170,
  }
});
