import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container, Scroller, ListArea, TextoNegritoMensagemBotao, BotaoCustomizado,
  TextoBotaoCustomizado, BotaoCustomizado2,
} from './styles';

import db from '../../services/config';
import AdicionaCartao from '../../components/AdicionaCartao';

export default () => {

  const navigation = useNavigation();

  const [frente, setFrente] = useState('');
  const [verso, setVerso] = useState('');

  const NovoCartao = () => {
    if (frente !== '' && verso !== '') {
      db.collection('Cartao').add({ frente: frente, verso: verso });
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

          <AdicionaCartao />

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