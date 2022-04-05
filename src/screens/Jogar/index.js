import React, { useState } from 'react';
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

import MenuItem from '../../components/Colecoes/MenuItem';
import Cartao from '../../components/Cartao';
import db from '../../services/config';
import IconeOlho from '../../assets/eye.svg';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { block } from 'react-native-reanimated';
export default () => {

  const navigation = useNavigation();

  const [frente, setFrente] = useState('');
  const [verso, setVerso] = useState('');

  const NovoCartao = () => {
    if (frente !== '' && verso !== '') {
        db.collection('Cartao').add({ frente: frente, verso: verso});
    } else {
        alert("Preencha os campos");
    }
}

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
                  value={frente}
                  onChangeText={t => setFrente(t)}
                  placeholder="Brinquedo"
                  placeholderTextColor="#000000"
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
    padding:50,
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
  Linha:{
    backgroundColor: 'red',
    width: 170,
  }
});
