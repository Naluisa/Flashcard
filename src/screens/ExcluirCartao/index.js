import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  AreaInput,
} from '../NovaColecao/styles';

import { TouchableOpacity, StyleSheet, View } from 'react-native';

import styled from 'styled-components/native';


import { db } from '../../services/config';
import { deleteDoc, doc } from 'firebase/firestore';

export default () => {

  const navigation = useNavigation();

  const route = useRoute();

  const { id, colecao } = route.params;

  async function deleteCartao(id) {
    const cartaoDoc = doc(db, "Cartao", id);
    await deleteDoc(cartaoDoc);
    navigation.navigate('Cartoes', { colecao: colecao, recarrega: true })
  }

  return (
    <Container>
      <AreaInput>
        <View style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Texto2>Você tem certeza que deseja excluir esse cartão?</Texto2>

          <TouchableOpacity onPress={() => deleteCartao(id)}>
            <Texto3>SIM</Texto3>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cartoes', { colecao: colecao })}>
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

