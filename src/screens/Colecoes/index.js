import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Scroller, ListArea } from './styles';
import { dataMenu } from '../../mocks/dataMenu';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import MenuItem from '../../components/Colecoes/MenuItem';
import { db } from '../../services/config';
import { collection, getDocs } from 'firebase/firestore';

export default () => {
  const [visible, setVisible] = React.useState(true);

  const navigation = useNavigation();

  const [colecoes, setColecoes] = useState([]);

  const colecoesCollectionRef = collection(db, "Colecao");

  useEffect(() => {
    const getColecoes = async () => {
      const data = await getDocs(colecoesCollectionRef);
      setColecoes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getColecoes();
  }, []);

  return (
    <Container>
      <Scroller>
        <ListArea>

          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              {colecoes.map((item) => (

                <MenuItem nome={item.nome} descricao={item.descricao} idColecao={item.id} />
              ))}

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.touchableOpacityStyle}
                onPress={() => navigation.navigate('NovaColecao')}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#332E56',
  },
  buttonFacebookStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
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
    fontSize: 36,
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
    borderRadius: 3,
    marginLeft: 55,
    marginTop: 85
  },
  ImagemTexto: {
    marginRight: -5,
  },
});

