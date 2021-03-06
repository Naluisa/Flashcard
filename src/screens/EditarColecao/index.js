import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  AreaInput,
  BotaoCustomizado,
  BotaoCustomizado2,
  TextoBotaoCustomizado,
  TextoNegritoMensagemBotao,
} from '../NovaColecao/styles';

import { Image, TouchableOpacity, StyleSheet, TextInput, Keyboard, Alert } from 'react-native';

import styled from 'styled-components/native';
import {doc, updateDoc } from "firebase/firestore";

import { db } from "../../services/config";

export default () => {

  const navigation = useNavigation();

  const [Nome, setNome] = useState('');
  const [Descricao, setDescricao] = useState('');
  const route = useRoute();

  const { nome, image, id, descricao } = route.params;

  const alteraColecao = () => {
    const colecaoRef = doc(db, "Colecao", id);

    updateDoc(colecaoRef, {
      nome: Nome,
      descricao: Descricao
    })
  }

  useEffect(() => {
    setNome(nome);
    setDescricao(descricao);
  }, []);


  return (
    <Container>
      <AreaInput>
        <TextoNegritoMensagemBotao>
          Preencha os dados referente à coleção a ser criada
        </TextoNegritoMensagemBotao>

        <AreaInputLogin>
          <Texto>Nome coleção</Texto>
          <TextInput
            style={styles.input}
            value={Nome}
            onChangeText={(value) => setNome(value)} />
        </AreaInputLogin>

        <TouchableOpacity style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Texto2>Descrição</Texto2>
          <TextInput multiline={true}
            style={styles.input2}
            value={Descricao}
            onChangeText={(value) => setDescricao(value)} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Texto2>Imagem</Texto2>
          <Image style={styles.imagem} source={require('../../assets/mais.png')} />
        </TouchableOpacity>


        <BotaoCustomizado onPress={() => { alteraColecao() }}>
          <TextoBotaoCustomizado>SALVAR ALTERAÇÕES</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 onPress={() => navigation.navigate('Colecoes')}>
          <TextoBotaoCustomizado>CANCELAR</TextoBotaoCustomizado>
        </BotaoCustomizado2>
      </AreaInput>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonFacebookStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
  },
  buttonFacebookStyle2: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
  },
  imagem: {
    marginLeft: 70,
    marginRight: 'auto',
  },
  input: {
    width: 270,
    height: 60,
    color: '#000000',
    marginLeft: -90,
    marginTop: 20,
    fontSize: 15,
  },
  input2: {
    width: 270,
    height: 70,
    color: '#000000',
    marginLeft: -60,
    marginTop: 2,
    fontSize: 15,

  },
});

const AreaInputLogin = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    flex-direction: row;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 30px;
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

