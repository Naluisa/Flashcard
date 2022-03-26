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

export default ({IconSvg, placeholder, value, onChangeText, password, }) => {
    return(
        <AreaInput>
            <IconSvg width="24" height="24" fill="black"/>
            <Input
                placeholder={placeholder}
                placeholderTextColor="#6200EE"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </AreaInput>
    );
}