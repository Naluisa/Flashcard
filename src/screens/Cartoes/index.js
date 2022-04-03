import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
Scroller,
ListArea, View,TextoFiltro,
BotaoCustomizado2,TextoBotaoCustomizado } from './styles';

import Cartoes from '../../components/Cartoes/Cartoes'
import {
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,button,TextInput
  } from 'react-native';

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Scroller>  
                <ListArea>
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

                            <Cartoes textoFrente="Árvore" textoVerso='Tree'/>
                            <Cartoes textoFrente="Janela" textoVerso='Window'/>
                            <Cartoes textoFrente="Porta" textoVerso='Door'/>
                            <Cartoes textoFrente="Parede" textoVerso='Wall'/>
                            <Cartoes textoFrente="Chão" textoVerso='Floor'/>
                            <Cartoes textoFrente="Cozinha" textoVerso='Kitchen'/>
                            
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
  
  