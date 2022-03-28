import React from 'react';
import styled from 'styled-components/native';

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

const Texto = styled.Text`
    flex: 1;
    font-size: 10px;
    color: #6200EE;
    margin-left: 10px;
    width: 10px;
    height: 10px;
`;



export default ({IconSvg, placeholder, value, onChangeText, password, text}) => {
    return(
        <AreaInput>
            <Texto text={text}></Texto>
            <Input
                placeholderTextColor="#6200EE"
                secureTextEntry={password}
            />

        </AreaInput>
    );
}