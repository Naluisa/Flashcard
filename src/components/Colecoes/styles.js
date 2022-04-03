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
export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;
export const LocationArea = styled.View`
  background-color: #373D43;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #FFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const BotaoCustomizado = styled.TouchableOpacity`
  height: 46px;
  background-color: #6A61A1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 150px;

`;

export const BotaoCustomizado2 = styled.TouchableOpacity`
  width: 130px;
  height: 46px;
  background-color: #57966A;
  justify-content: center;
  align-items: center;
  borderWidth: 1;
  marginTop: 15px;
  marginLeft: 110;
  marginBottom: 25;
  border-radius: 5px;

`;
export const TextoBotaoCustomizado = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;

`;
export const TextoFiltro = styled.Text`
  font-size: 12px;
  color: #6200EE;
  margin-top: -10px;
`;
export const TextoTituloFrente = styled.Text`
  font-size: 12px;
  color: #868686;
  margin-top: -5px;
  margin-right: 90px;
`;
export const Texto = styled.Text`
  color: #27ACA7;
  font-size: 22;
  font-weight: bold;
  margin-top: 55px;
  margin-left: -175px;
  padding-Right: 20px;
`;
export const TextoTituloVerso = styled.Text`
  font-size: 12px;
  color: #868686;
  margin-top: -15px;
  margin-left: 105px;
`;
export const TextoVerso = styled.Text`
  color: #27ACA7;
    font-weight: bold;
    font-size: 22;
    margin-top: -33px;
    margin-left: -63px;
    margin-right: -63px;
padding-right:30px;
`;
export const TextoNegritoMensagemBotao = styled.Text`
  font-size: 19px;
  color: white;
  margin-left: 5px;
  text-align: center;
  margin-bottom: 50px;

`;

export const TextoCartao = styled.Text`
  text-align: left;
  color: 'rgb(119, 119, 119)';
  font-size: 18;
  margin-left: -25px;
  margin-Top: -35px;
`;

export const View = styled.View`
  margin-bottom: -50px;

  background-color:>
`;