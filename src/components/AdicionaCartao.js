import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { db } from '../services/config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
export const View = styled.View`
    margin-bottom: -50px;
`;
export const TextoCartao = styled.Text`
text-align: left;
color: 'rgb(119, 119, 119)';
font-size: 18;
margin-left: -25px;
margin-Top: -35px;
`;

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [frente, setFrente] = useState("");
  const [verso, setVerso] = useState("");

  const {colecao} = route.params;


  async function adicionarCartao() {
    if (frente !== "" && verso !== "") {

      //forma de salvar dado com firebase 9
      console.log('inicio de funcão do firebase')
      const card = await addDoc(collection(db, "Cartao"), {
        frente,
        verso,
        colecao
      });
      console.log('fim de funcão do firebase')

      console.log(card);
    } else {
      alert("Preencha os campos");
    }
    navigation.navigate('Cartoes',{colecao:colecao, recarrega:true})
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonFacebookStyle}
        activeOpacity={0.5}>
        <TextoCartao>Frente</TextoCartao>
        <TextInput style={styles.input}
          value={frente}
          onChangeText={(value) => setFrente(value)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonFacebookStyle2}
        activeOpacity={0.5}>
        <TextoCartao>Verso</TextoCartao>
        <TextInput
          style={styles.input}
          value={verso}
          onChangeText={(value) => setVerso(value)}
        />
      </TouchableOpacity>

      <BotaoCustomizado onPress={adicionarCartao}>
        <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
      </BotaoCustomizado>
      <BotaoCustomizado2 onPress={() => navigation.navigate('Cartoes')}>
        <TextoBotaoCustomizado>CANCELAR</TextoBotaoCustomizado>
      </BotaoCustomizado2>


    </View>
  )
}
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
    marginLeft: 25,
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
  Linha: {
    backgroundColor: 'red',
    width: 170,
  }
});

const BotaoCustomizado = styled.TouchableOpacity`
    height: 46px;
    background-color:#6A61A1;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 60px;
`;

const BotaoCustomizado2 = styled.TouchableOpacity`
    height: 46px;
    background-color:#00000000;
    justify-content: center;
    align-items: center;
    border-color: white;
    borderWidth:1;
`;

const TextoBotaoCustomizado = styled.Text`
    font-size: 14px;
    color: white;
    font-weight: bold;
`;