import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { padding } from '@mui/system';

export default ({nome, }) => {
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.navigate('EditarColecao');
}
  const BotaoAdiciona = () => {
    navigation.navigate('EditarColecao');
}

  return (
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>

<View style={styles.titulo}>
          <Image
            source={require('../assets/bola.png')}
            style={styles.buttonImageIconStyle}
          />

          <View style={styles.texto}>
            <Texto style={styles.buttonTextStyle}>{nome}</Texto>
          </View>
          </View>
          <TouchableOpacity>
           {/*  <View style={styles.botoes}>
            <TouchableOpacity onPress={() => navigation.navigate('EditarColecao')}  style={styles.icones1}>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('LogTeste')} style={styles.icones2}>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui}/>
            </TouchableOpacity>
            </View> */}
          </TouchableOpacity>

        </TouchableOpacity>

        
  );
};
const Texto = styled.Text`
color: #27ACA7;
font-weight: bold;
font-size: 32;
margin-top: 33px;
margin-left: 73px;
margin-right: -63px;
padding-right:30px;
`;
 

const styles = StyleSheet.create({
  botoes:{
borderWidth:2
  },
  titulo:{
borderWidth:2,
paddingRight:-30
  },
  icones1:{
    marginLeft:65,  
    borderWidth:2
  },
  icones2:{
    marginTop:2,
} ,
  texto:{
    borderWidth:2,
    marginTop:-60,
    marginLeft:95,
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
    flexDirection: 'row',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 70,
    width: 70,
    resizeMode: 'stretch',
    borderWidth:2
             },
  buttonEdit: {
    padding: 10,
    paddingLeft: -90,
    margin: 5,
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: -10,
    resizeMode: 'stretch',
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
    color: '#27ACA7',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft:-5,
    marginTop:-5,
marginRight:10
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
