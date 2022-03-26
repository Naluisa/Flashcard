import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;    
    background-color: #27323D;
`;
export const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;
export const Imagem = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;
export const Info = styled.View`
margin-left: 20px;
    justify-content: space-between;`;

export const Nome = styled.Text`
font-size: 17px;
    font-weight: bold;`;

