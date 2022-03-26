import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #27323D;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const AreaInput = styled.View`
    width: 100%;
    padding:40px;
`;
export const BotaoCustomizado = styled.TouchableOpacity`
    height: 60px;
    background-color:#FE5F55;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const TextoBotaoCustomizado = styled.Text`
    font-size: 18px;
    color: white;
`;


