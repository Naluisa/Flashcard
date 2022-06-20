import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Scroller,
  ListArea, View, TextoFiltro,
  BotaoCustomizado2, TextoBotaoCustomizado
} from './styles';

import Cartoes from '../../components/Cartoes/Cartoes'
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity, TextInput
} from 'react-native';
import { db } from '../../services/config';
import { collection, deleteDoc, getDocs, query, where } from 'firebase/firestore';

export default () => {

  const navigation = useNavigation();
  const route = useRoute();
  const [cartoes, setCartoes] = useState([]);
  const [filtraCartao, setFiltraCartao] = useState('');

  const cartoesCollectionRef = collection(db, "Cartao");

  const { colecao, recarrega, frente } = route.params;

  const [arrayCartao, setArrayCartao] = useState([]);

  const getCartoes = async (colecao) => {
    const q = query(cartoesCollectionRef, where("colecao", "==", colecao));
    const data = await getDocs(q);
    setArrayCartao(data.docs.map((doc) => ({ ...doc.data(), id: doc.id  }))) ;
    setCartoes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCartoes(colecao);
  }, [colecao, recarrega]);

  const buscaCartao = async (t) => {
    setFiltraCartao(t)
    const dataFinal = arrayCartao.filter(cartao => {
      return cartao.frente.includes(t) || cartao.verso.includes(t);
    });
    setCartoes(dataFinal.map((doc) => ({ ...doc, id: doc.id })));
  };

  return (
    <Container>
      <Scroller>
        <ListArea>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

              <TouchableOpacity style={styles.buttonFiltro}
                activeOpacity={0.5}>
                <TextoFiltro >Filtro</TextoFiltro>
                <TextInput style={styles.input}
                  value={filtraCartao}
                  onChangeText={(t) => { buscaCartao(t) }} />
              </TouchableOpacity>

              <BotaoCustomizado2 onPress={() => navigation.navigate('Jogar', { colecao: colecao, frente: frente })}>
                <TextoBotaoCustomizado>Jogar!</TextoBotaoCustomizado>
              </BotaoCustomizado2>

              {cartoes.map((cartao) => {
                return (
                  <>
                    <Cartoes textoFrente={cartao.frente} textoVerso={cartao.verso} idCartao={cartao.id} colecao={colecao} />
                  </>
                );
              })}

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.touchableOpacityStyle}
                onPress={() => navigation.navigate('NovoCartao', { colecao })}>
                <Image
                  source={require('../../assets/plus.png')}
                  style={styles.floatingButtonStyle}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

        </ListArea>
      </Scroller>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#332E56',
  },
  buttonFacebookStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
  },
  buttonFiltro: {
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
    marginTop: -30,
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    height: 50,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#27ACA7',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  TextoCapac: {
    color: 'black',
    marginBottom: 4,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: 'black',
    width: 1,
    height: 50,
  },
  TextoCartao: {
    textAlign: 'left',
    color: 'rgb(119, 119, 119)',
    fontSize: 18,
    marginLeft: '-25px',
    marginTop: '-35px',

  },
  TextoCartao2: {
    textAlign: 'left',
    color: 'rgb(119, 119, 119)',
    fontSize: 18,
    marginLeft: '-25px',
    marginTop: '-35px',

  },
  buttonEdit: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    marginLeft: 80,
    marginTop: 15,
    resizeMode: 'stretch',
  },
  buttonExclui: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    marginLeft: 130,
    marginTop: -30,
    resizeMode: 'stretch',
  },
  BotaoCustomizado2: {
    height: '46px',
    backgroundColor: '#6A61A1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '150px',
  },
  input: {
    width: 320,
    height: 60,
    color: '#000000',
    marginLeft: -40,
    marginTop: -10,
    fontSize: 14,
  },
  botoes: {
    display: 'inline',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 55,
    height: 55,
    marginLeft: 45,
    marginTop: -85
  },
  ImagemTexto: {
    marginRight: -5,
  },
});

