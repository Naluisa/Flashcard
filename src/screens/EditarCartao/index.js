import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container, Scroller, ListArea, TextoNegritoMensagemBotao, BotaoCustomizado,
  TextoBotaoCustomizado, BotaoCustomizado2, TextoCartao, View,
} from './styles';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { db } from '../../services/config';
import { doc, updateDoc } from 'firebase/firestore';
import { TextoFrente } from '../../components/Cartoes/styles';
import { TextoVerso } from '../../components/Colecoes/styles';

export default () => {
  const navigation = useNavigation();
  const [cartoes, setCartoes] = useState([]);
  const [Frente, setFrente] = useState('');
  const [Verso, setVerso] = useState('');
  const route = useRoute();

  const {colecao, id, textoFrente, textoVerso} = route.params;

  const alteraCartao = () => {
    const cartaoRef = doc(db, "Cartao", id);

    updateDoc(cartaoRef, {
      frente: Frente,
      verso: Verso,
      colecao: colecao
    })
    navigation.navigate('Cartoes',{colecao:colecao, recarrega:true})
  }

  useEffect(() => {
    setFrente(textoFrente);
    setVerso(textoVerso);
  }, []);

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
              value={Frente}
              onChangeText={(value) => setFrente(value)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainTab')}
              style={styles.buttonFacebookStyle2}
              activeOpacity={0.5}>
              <TextoCartao>Verso</TextoCartao>
              <TextInput
                style={styles.input}
                value={Verso}
                onChangeText={(value) => setVerso(value)}
              />
            </TouchableOpacity>
          </View>

        
        <BotaoCustomizado onPress={() => {alteraCartao()}}>
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
