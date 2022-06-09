import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextoVerso, TextoFrente, TextoTituloFrente, TextoTituloVerso } from './styles';
import {
  StyleSheet,
  Image,
  TouchableOpacity, button, TextInput, View
} from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/config';

const props = {
  textoFrente: "",
  textoVerso: "",
}

export default ({ textoFrente, textoVerso }) => {
  const navigation = useNavigation();
  

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MainTab')}
      style={styles.buttonFacebookStyle}
      activeOpacity={0.5}>
      <View >
        <TextoTituloFrente >Frente</TextoTituloFrente>
        <TextoTituloVerso >Verso</TextoTituloVerso>
      </View>

      <View style={styles.itens}>
        <TextoFrente>{textoFrente}</TextoFrente>
        <TextoVerso>{textoVerso}</TextoVerso>
      </View>


      <TouchableOpacity style={styles.icones1} onPress={() => navigation.navigate('EditarCartao')}>
        <Image class="edit" source={require('../../assets/edit.png')} style={styles.buttonEdit} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icones2} onPress={() => navigation.navigate('ExcluirCartao')}>
        <Image class="exclui" source={require('../../assets/excluir.png')} style={styles.buttonExclui} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itens: {
    marginLeft: 34,
  },
  icones1: {
    marginLeft: 65,
  },
  icones2: {
  },
  container: {
    flex: 1,
    backgroundColor: '#332E56',
  },
  buttonFacebookStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
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
    paddingLeft: -90,
    margin: 5,
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 15,
    resizeMode: 'stretch',

  },
  buttonExclui: {
    padding: 10,
    margin: 5,
    height: 23,
    width: 23,
    marginLeft: 10,
    marginTop: 12,
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
    width: 70,
    height: 70,
    backgroundColor: '#7A71AF'
  },
  ImagemTexto: {
    marginRight: -5,
  },
});

