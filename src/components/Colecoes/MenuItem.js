import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Texto} from './styles';

import styled from 'styled-components/native';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default ({nome, image}) => {
  const navigation = useNavigation();

  return (
      <TouchableOpacity onPress={() => navigation.navigate('Cartoes',{colecao: nome})}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>

        <View style={styles.titulo}>
           <Image
                source={image}
                style={styles.buttonImageIconStyle}
            />
   
            <Texto style={styles.buttonTextStyle}>{nome}</Texto>
        
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity onPress={() => navigation.navigate('EditarColecao')}>
            <Image class="edit" source={require('../../assets/edit.png')} style={styles.editIcon}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ExcluirColecao')}>
            <Image class="exclui" source={require('../../assets/excluir.png')} style={styles.editIcon}/>
          </TouchableOpacity>
        </View>

      </TouchableOpacity>


  );
};

const styles = StyleSheet.create({
  botoes: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  titulo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',

  },



  container: {
    flex: 1,
    backgroundColor: '#332E56',
  },

  buttonFacebookStyle: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  buttonImageIconStyle: {
    padding: 10,
    height: 70,
    width: 70,
    resizeMode: 'stretch',

  },

  editIcon: {
    paddingBottom: 15,
  },


  buttonExclui: {
    padding: 10,
    margin: 5,
    height: 26,
    width: 26,
    marginLeft: 70,
    marginTop: 20,
    resizeMode: 'stretch',
  },

  buttonTextStyle: {
    fontSize: 38,
    paddingLeft: 15,
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
    width: 70,
    height: 70,
    backgroundColor: '#7A71AF'
  },

  ImagemTexto: {
    marginRight: -5,
  },

});
