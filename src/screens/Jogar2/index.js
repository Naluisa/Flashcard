import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container, Scroller, ListArea, TextoNegritoMensagemBotao, BotaoCustomizado,
  TextoBotaoCustomizado, TextoCartao, View,
} from './styles';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import db from '../../services/config';

export default () => {

  const navigation = useNavigation();

  const [frente, setFrente] = useState('');
  const [verso, setVerso] = useState('');
  const [cartoes, setCartoes] = useState([]);
  const [index, setIndex] = useState(0);

  const route = useRoute();

  const {colecao, id, textoFrente, textoVerso} = route.params;

  useEffect(() => {
    setCartoes(route.params?.cartoes)
  }, [])
  
  return (
    <Container>
      <Scroller>
        <ListArea>

          <TextoNegritoMensagemBotao>
            Cartão 1/8
          </TextoNegritoMensagemBotao>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainTab')}
              style={styles.buttonFacebookStyle}
              activeOpacity={0.5}>
              <TextoCartao>Frente</TextoCartao>
              <TextInput style={styles.input}
                value={frente}
                onChangeText={t => setFrente(t)}
                placeholder="Brinquedo"
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
                value={verso}
                onChangeText={t => setVerso(t)}
                placeholder="Toy."
                placeholderTextColor="#000000"
              />
            </TouchableOpacity>
          </View>

          <BotaoCustomizado onPress={() => navigation.navigate('Jogar3')}>
            <TextoBotaoCustomizado>PRÓXIMO</TextoBotaoCustomizado>
          </BotaoCustomizado>

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
    marginBottom: 30,
    padding: 50,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonFacebookStyle2: {
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
    marginTop: -27,
    padding: 50,
    flexDirection: 'row',
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 60,
    margin: 12,
    borderBottomWidth: 2,
    alignItems: 'center',
    color: 'black',
    marginLeft: -5,
    fontSize: 25,
    fontWeight: 'bold',
    width: 170,
    textAlign: 'center',
    paddingBottom: -17,
    marginBottom: 25,
    marginTop: 35,
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
