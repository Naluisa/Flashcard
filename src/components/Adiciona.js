import React from 'react';
import styled from 'styled-components/native';
import Textarea from 'react-native-textarea';


const AreaInput = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    flex-direction: row;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: black;
    margin-left: 10px;
    width: 10px;
    height: 10px;

`;
const styles = StyleSheet.create({
   textareaContainer: {
      height: 180,
      padding: 5,
      backgroundColor: '#F5FCFF',
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 170,
      fontSize: 14,
      color: '#333',
    },
  });

export default ({IconSvg, placeholder, value, onChangeText, password, }) => {
    return(
        <AreaInput>
            <IconSvg width="24" height="24" fill="black" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#6200EE"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />

<Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={this.onChange}
    defaultValue={this.state.text}
    maxLength={120}
    placeholder={'好玩有趣的，大家同乐，伤感忧闷的，大家同哭。。。'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />
        </AreaInput>
    );
}