import React, { useEffect, useState } from 'react';
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

import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { db } from '../../services/config';
import { addDoc, collection, snapshotEqual } from 'firebase/firestore';
import * as ImagePicker from "react-native-image-picker"
import storage from 'react-native-async-storage';



export default () => {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const [imagemColecao, setImagemColecao] = useState();

  const [selectedImage, setSelectedImage] = useState();
  const [imgURL, setImgURL] = useState('');
  const [progress, setProgress] = useState(0);

  async function cadastraColecao() {
    if (nome !== "" && descricao !== "") {

      //forma de salvar dado com firebase 9
      console.log('inicio de funcão do firebase')
      const card = await addDoc(collection(db, "Colecao"), {
        nome,
        descricao,
      });
      console.log('fim de funcão do firebase')

      console.log(card);
    } else {
      alert("Preencha os campos");
    }
  }

  //ImagePicker
  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }
    if (data.error) {
      return;
    }
    if (!data.uri) {
      return;
    }
    setImagemColecao(data);
  }

  //Salvar Imagem firebase
  const salvarImagem = (event) => {
    event.preventDefault()

    const file = event.target[0]?.files[0]
    if (!file) return;

    const storageRef = ref(storage, `imagens/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgURL(url)
        })
      }
    )
  }

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
            onChangeText={(value) => setNome(value)} />
        </AreaInputLogin>

        <TouchableOpacity style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Texto2>Descrição</Texto2>
          <TextInput multiline={true}
            style={styles.input2}
            value={descricao}
            onChangeText={(value) => setDescricao(value)} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFacebookStyle}
          onPress={() => ImagePicker.launchImageLibrary({}, imagePickerCallback)}
          activeOpacity={0.5}>
          <Texto2>Imagem</Texto2>
          <Image type="file" style={styles.imagem}
            source={
              require('../../assets/mais.png')
            } />
          {/* {!imgURL && <progress value={progress} max="100" />}
            {!imgURL && <img src={imgURL} alt="Imagem" />} */}
        </TouchableOpacity>



        {/* <BotaoUp title="+" >
          <TextoBotaoCustomizadoColor>+</TextoBotaoCustomizadoColor>
        </BotaoUp> */}


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
  button: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',

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
const BotaoUp = styled.TouchableOpacity`
height: 116px;
width: 100%;
background-color:#FFFFFF;
    justify-content: center;
    align-items: center;
  margin-top: -10px;
  margin-Bottom: 20;
  padding: 15px;
    
`;

