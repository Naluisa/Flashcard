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


export default ({}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
    <TouchableOpacity
          onPress={() => navigation.navigate('MainTab')}
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Frente</Text>
          <Text style={styles.buttonTextStyle}>Verso</Text>


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
    padding: 40,
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
    color: '#777777',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 18,
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

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: black;
  margin-left: 10px;
  width: 10px;
  height: 10px;
`;

