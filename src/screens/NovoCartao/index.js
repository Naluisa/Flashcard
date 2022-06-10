import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container, Scroller, ListArea, TextoNegritoMensagemBotao, BotaoCustomizado,
  TextoBotaoCustomizado, BotaoCustomizado2,
} from './styles';

import db from '../../services/config';
import AdicionaCartao from '../../components/AdicionaCartao';
import { getDatabase, ref, set } from "firebase/database";


export default () => {

  return (
    <Container>
      <Scroller>
        <ListArea>

          <TextoNegritoMensagemBotao>
            Preencha os dados da frente e do verso do flashcard
          </TextoNegritoMensagemBotao>

          <AdicionaCartao />

          
        </ListArea>
      </Scroller>
    </Container>
  );
};