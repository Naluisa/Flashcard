import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container, Scroller, ListArea, TextoNegritoMensagemBotao, BotaoCustomizado,
  TextoBotaoCustomizado, BotaoCustomizado2, TextoCartao, View,
} from './styles';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { db } from '../../services/config';
import { updateDoc } from 'firebase/firestore';

export default () => {
  const navigation = useNavigation();
  const [cartoes, setCartoes] = useState([]);

  const alteraCartao = (id) => {
    const cartaoRef = doc(db, "Cartao", id);

    updateDoc(cartaoRef, {
      frente: 'teste',
      verso: 'teste'
    })
  }

  const itemCartoes = ({cartao}) => {
    return (
      <>
        
      </>
    );
  }

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
              <TextInput style={styles.input}
                placeholder="Brinquedos"
                placeholderTextColor="#000000"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainTab')}
              style={styles.buttonFacebookStyle2}
              activeOpacity={0.5}>
              <TextoCartao>Verso</TextoCartao>
              <TextInput
                style={styles.input}
                placeholder="Toys"
                placeholderTextColor="#000000"
              />
            </TouchableOpacity>
          </View>

        <FlatList data={cartoes} renderItem={itemCartoes} keyExtractor={cartao => cartao.id}></FlatList>

        <BotaoCustomizado onPress={() => {alteraCartao(cartao.id)}}>
          <TextoBotaoCustomizado>SALVAR ALTERAÇÕES</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 onPress={() => navigation.navigate('Cartoes')}>
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
