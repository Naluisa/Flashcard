import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput, 
  } from 'react-native';
  
export const View = styled.View`
    margin-bottom: -50px;
`;
export const TextoCartao = styled.Text`
text-align: left;
color: 'rgb(119, 119, 119)';
font-size: 18;
margin-left: -25px;
margin-Top: -35px;
`;

export default ({placeholder }) => {
  return(
<View>
    <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
      <TextoCartao>Frente</TextoCartao>
      <TextInput style={styles.input}
        placeholder="Digite Aqui"
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('MainTab')}
      style={styles.buttonFacebookStyle2}
      activeOpacity={0.5}>
      <TextoCartao>Verso</TextoCartao>
      <TextInput
        style={styles.input}
        placeholder="Digite Aqui"
        />
      </TouchableOpacity>
</View>
  )
}
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
    marginLeft: 10,
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
