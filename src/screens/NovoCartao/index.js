import React from 'react';
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

import MenuItem from '../../components/MenuItem';
import Cartao from '../../components/Cartao';

import IconeOlho from '../../assets/eye.svg';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { block } from 'react-native-reanimated';
export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Scroller>
        <ListArea>

        <TextoNegritoMensagemBotao>
          Preencha os dados da frente e do verso do flashcard
        </TextoNegritoMensagemBotao>

<View>
    <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <TextoCartao>Frente</TextoCartao>
          <TextInput
                  style={styles.input}
                  placeholder="Digite Aqui"
                  />

        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle2}
          activeOpacity={0.5}>
          <TextoCartao>Verso</TextoCartao>
          <TextInput
                  style={styles.input}
                  placeholder="Digite Aqui"
                  />
        </TouchableOpacity>
        </View>

          <BotaoCustomizado >
          <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 >
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

  },
  buttonFacebookStyle2: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginTop: -17,
    padding: 40,
    flexDirection: 'row',
    borderRadius: 10,
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
    textAlign: 'center'
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
