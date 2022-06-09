import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  AreaInput,
  BotaoCustomizado,
  BotaoCustomizado2,
  TextoBotaoCustomizado,
  TextoNegritoMensagemBotao,
} from '../NovaColecao/styles';

import { Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { db } from '../../services/config';
import { addDoc, collection } from 'firebase/firestore';


export default () => {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const storage = getStorage();
  const storageRef = ref(storage, 'assets');

  async function cadastraColecao() {
    if (nome !== "" && descricao !== "") {

      //forma de salvar dado com firebase 9
      console.log('inicio de funcão do firebase')
      const card = await addDoc(collection(db, "Colecao"), {
        nome,
        descricao
      });
      console.log('fim de funcão do firebase')

      console.log(card);
    } else {
      alert("Preencha os campos");
    }
  }

  uploadBytes(storageRef).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });

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
            value={nome}
            onChangeText={(value) => setNome(value)}/>
        </AreaInputLogin>

        <TouchableOpacity style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Texto2>Descrição</Texto2>
          <TextInput multiline={true}
            style={styles.input2} 
            value={descricao}
            onChangeText={(value) => setDescricao(value)}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Texto2>Imagem</Texto2>
          <Image style={styles.imagem} source={require('../../assets/mais.png')} />
        </TouchableOpacity>


        <BotaoCustomizado onPress={cadastraColecao}>
          <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 onPress={() => navigation.navigate('Colecoes')}>
          <TextoBotaoCustomizado>CANCELAR</TextoBotaoCustomizado>
        </BotaoCustomizado2>
      </AreaInput>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 270,
    height: 60,
    color: '#000000',
    marginLeft: -90,
    marginTop: 20,
    fontSize: 16,
  },

  input2: {
    width: 270,
    height: 70,
    color: '#000000',
    marginLeft: -60,
    marginTop: 2,
    fontSize: 16,
  },

  imagem: {
    marginLeft: 70,
    marginRight: 'auto',
  },

  buttonFacebookStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
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