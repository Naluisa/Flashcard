import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;    
    background-color: #332E56;
`;

export const Scroller = styled.ScrollView`
    flex: 1;    
    padding: 20px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const TextoNegritoMensagemBotao = styled.Text`
    font-size: 19px;
    color: white;
    margin-left: 5px;
    text-align: center;
    margin-bottom: 30px;
`;

export const BotaoCustomizado = styled.TouchableOpacity`
    height: 46px;
    background-color:#6A61A1;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 60px;
`;

export const BotaoCustomizado2 = styled.TouchableOpacity`
    height: 46px;
    background-color:#00000000;
    justify-content: center;
    align-items: center;
    border-color: white;
    borderWidth:1;
`;

export const TextoBotaoCustomizado = styled.Text`
    font-size: 14px;
    color: white;
    font-weight: bold;
`;