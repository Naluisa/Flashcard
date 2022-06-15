import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container, Scroller, ListArea, TextoNegritoMensagemBotao, BotaoCustomizado,
  TextoBotaoCustomizado, View,
} from './styles';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import db from '../../services/config';
export default () => {

  const navigation = useNavigation();
  const [Frente, setFrente] = useState('');

  const route = useRoute();

  const { textoFrente, textoVerso} = route.params;

  useEffect(() => {
    setFrente(textoFrente);
  }, []);

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
              <TextInput style={styles.input}
                value={Frente}
                onChangeText={(value) => setFrente(value)}
              />
            </TouchableOpacity>
          </View>

          <BotaoCustomizado onPress={() => navigation.navigate('Jogar2')}>
            <TextoBotaoCustomizado>VIRAR</TextoBotaoCustomizado>
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
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
    padding: 50,
    paddingTop: 50,
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonFacebookStyle2: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    marginTop: -27,
    padding: 70,
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
    marginTop: 110,
    marginBottom: 110,
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
