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

export default ({}) => {
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.navigate('EditarColecao');
}
  const BotaoAdiciona = () => {
    navigation.navigate('EditarColecao');
}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../assets/bola.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Objetos</Text>
          <TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('EditarColecao')}>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LogTeste')} >
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui}/>
            </TouchableOpacity>
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
            <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />
            </TouchableOpacity>
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
            <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />
            </TouchableOpacity>
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
            <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />
            </TouchableOpacity>
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
            <TouchableOpacity>
            <Image class="edit" source={require('../assets/edit.png')} style={styles.buttonEdit}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image class="exclui" source={require('../assets/excluir.png')} style={styles.buttonExclui} />
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacityStyle}
          onPress={() => navigation.navigate('NovaColecao')}>
          <Image
            source={require('../assets/plus.jpg')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
