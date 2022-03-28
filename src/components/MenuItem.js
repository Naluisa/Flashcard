import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
    height: 70,
    width: 70,
    resizeMode: 'stretch',
  },
  buttonEdit: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    marginLeft: 60,
    marginTop: -5,
    resizeMode: 'stretch',
  },
  buttonExclui: {
    padding: 10,
    margin: 5,
    height: 26,
    width: 26,
    marginLeft: 60,
    marginTop: 20,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#27ACA7',
    marginBottom: 4,
    marginLeft: 20,
    fontSize: 32,
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

          <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/Colors.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Cores</Text>

          <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
        
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
          
          <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
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
          
          <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
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
          <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />

          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
