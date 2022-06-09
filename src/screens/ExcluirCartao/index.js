import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  AreaInput,
} from '../NovaColecao/styles';

import { TouchableOpacity, StyleSheet, View } from 'react-native';

import styled from 'styled-components/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { auth, db } from '../../services/config';
import { deleteDoc, doc } from 'firebase/firestore';

export default () => {

  const navigation = useNavigation();

  const [cartoes, setCartoes] = useState([]);

  async function deleteCartao(id) {
    const cartaoDoc = doc(db, "Cartao", id);
    await deleteDoc(cartaoDoc);
  }

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
      navigation.navigate('MainTab');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'Cadastro' }],
    });
  };

  return (
    <Container>
      <AreaInput>
        <View style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Texto2>Você tem certeza que deseja excluir esse cartão?</Texto2>
          
          <TouchableOpacity onPress={deleteCartao}>
            <Texto3>SIM</Texto3>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cartoes')}>
            <Texto4>CANCELAR</Texto4>
          </TouchableOpacity>

        </View>
      </AreaInput>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonFacebookStyle: {
    backgroundColor: '#332E56',
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

const Texto2 = styled.Text`
font-size: 18px;
color: white;
margin-top: 20px;
margin-left: 20px;
`;
const Texto3 = styled.Text`
font-size: 18px;
color: white;
margin-top: 90px;
margin-left: -250px;
margin-rigt: -190px;

`;
const Texto4 = styled.Text`
font-size: 18px;
color: white;
margin-top: 90px;
margin-left: -75px;
`;

