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
});

export default ({}) => {
  const navigation = useNavigation();

  return (
    
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

        <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/bola.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Objetos</Text>
          <Image source={require('../assets/edit.png')} />
          <Image source={require('../assets/excluir.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/Colors.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Cores</Text>
          <Image source={require('../assets/edit.png')} />
          <Image source={require('../assets/excluir.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorites')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/urso.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Animais</Text>
          <Image source={require('../assets/edit.png')} />
          <Image source={require('../assets/excluir.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/tree.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Adjetivos</Text>
          <Image source={require('../assets/edit.png')} />
          <Image source={require('../assets/excluir.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('CadastroAmbiente')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/seta.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Pronomes</Text>
          <Image source={require('../assets/edit.png')} />
          <Image source={require('../assets/excluir.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
