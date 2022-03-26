import React, { useState, useref, useEffect } from 'react';
import {
  Container,
  AreaBotao,
  BotaoSair,
  TextoBotao,
  Title,
  Formulario,
  CaixaFormulario
} from './styles';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const styles = StyleSheet.create({
  BotaoSair: {
    width: 162,
    backgroundColor: '#FE5F55',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EstiloTextoBotao: {
    color: 'white',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default () => {
  const [currentUser] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('email').then((user) => {
      setCurrentUser(user)
    });
  }, []);
  return (
    <Container>
      <Title>Meu perfil</Title>
      <Text>{currentUser}</Text>
      <TouchableOpacity onPress={() => {
        AsyncStorage.removeItem('@SalvaLogin');
        navigation.navigate('Login')
      }}
        style={styles.BotaoSair}
        activeOpacity={0.5}>
        <Text style={styles.EstiloTextoBotao}>Desconectar</Text>
      </TouchableOpacity>
      <AreaBotao>
        <BotaoSair>
          <TextoBotao>Sair</TextoBotao>
        </BotaoSair>
      </AreaBotao>
    </Container>
  );
}