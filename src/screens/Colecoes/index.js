import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Scroller,ListArea} from './styles';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import MenuItem from '../../components/MenuItem';

export default () => {
  const [visible, setVisible] = React.useState(true);

  const navigation = useNavigation();

  return (
    <Container>
      <Scroller>
        <ListArea>

          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>

              <MenuItem nome="Objetos" />
              <MenuItem nome="Cores"/>
              <MenuItem nome="Animais"/>
              <MenuItem nome="Adjetivos"/>
              <MenuItem nome="Pronomes"/>

            {/*   <TouchableOpacity
                activeOpacity={0.7}
                style={styles.touchableOpacityStyle}
                onPress={() => navigation.navigate('NovaColecao')}>
                <Image
                  source={require('../../assets/plus.jpg')}
                  style={styles.floatingButtonStyle}
                />
              </TouchableOpacity> */}

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
});

