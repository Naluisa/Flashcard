import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';



export default ({Image, Text,}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image style={styles.buttonImageIconStyle} />
          <Text style={styles.buttonTextStyle}></Text>

          <TouchableOpacity>
            <Image />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image />
          </TouchableOpacity>
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
