import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Container, Scroller, HeaderArea, HeaderTitle, ListArea,TextoNegritoMensagemBotao,BotaoCustomizado,
  TextoBotaoCustomizado,BotaoCustomizado2,TextoCartao, View,TextoFiltro, TextoVerso,TextoFrente,
  TextoTituloFrente, TextoTituloVerso} from './styles';


import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,button,TextInput
} from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

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
  TextoCartao:{
    textAlign: 'left',
color: 'rgb(119, 119, 119)',
fontSize: 18,
marginLeft: '-25px',
marginTop: '-35px',

  },
  TextoCartao2:{
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
  BotaoCustomizado2:{
  height: '46px',
backgroundColor:'#6A61A1',
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

export default ({}) => {
  const navigation = useNavigation();

  return (
    
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

    <TouchableOpacity style={styles.buttonFiltro}
          activeOpacity={0.5}>
      <TextoFiltro >Filtro</TextoFiltro>

      <TextInput style={styles.input}/>

    </TouchableOpacity>

      <BotaoCustomizado2 >
          <TextoBotaoCustomizado>Jogar!</TextoBotaoCustomizado>
        </BotaoCustomizado2>

        <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <TextoTituloFrente >Frente</TextoTituloFrente>
          <TextoTituloVerso >Verso</TextoTituloVerso>


          <TextoFrente>Árvore</TextoFrente>
          <TextoVerso >Tree</TextoVerso>
          <TouchableOpacity>
            <Image class="edit" source={require('../../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <TextoTituloFrente >Frente</TextoTituloFrente>
          <TextoTituloVerso >Verso</TextoTituloVerso>


          <TextoFrente>Janela</TextoFrente>
          <TextoVerso >Window</TextoVerso>
          <TouchableOpacity>
            <Image class="edit" source={require('../../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <TextoTituloFrente >Frente</TextoTituloFrente>
          <TextoTituloVerso >Verso</TextoTituloVerso>


          <TextoFrente>Porta</TextoFrente>
          <TextoVerso >Door</TextoVerso>
          <TouchableOpacity>
            <Image class="edit" source={require('../../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <TextoTituloFrente >Frente</TextoTituloFrente>
          <TextoTituloVerso >Verso</TextoTituloVerso>


          <TextoFrente>Parede</TextoFrente>
          <TextoVerso >Wall</TextoVerso>
          <TouchableOpacity>
            <Image class="edit" source={require('../../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <TextoTituloFrente >Frente</TextoTituloFrente>
          <TextoTituloVerso >Verso</TextoTituloVerso>


          <TextoFrente>Chão</TextoFrente>
          <TextoVerso >Floor</TextoVerso>
          <TouchableOpacity>
            <Image class="edit" source={require('../../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
        </TouchableOpacity>
       
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacityStyle}
          onPress={() => navigation.navigate('NovoCartao')}>
          <Image
            source={require('../../assets/plus.jpg')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  );
};
