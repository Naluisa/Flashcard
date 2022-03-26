import React, { useContext } from 'react';
import styled from 'styled-components/native';

import IconeHome from '../assets/casa.svg';
import IconeProcurar from '../assets/procurar.svg';
import IconeCalendario from '../assets/calendario.svg';
import IconeFavorito from '../assets/favorito.svg';
import IconeConta from '../assets/conta.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #FE5F55;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCentro = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #FE5F55;
    margin-top: -20px;
`;


export default({ state, navigation }) => {

    const irPara = (nomeTela) => {
        navigation.navigate(nomeTela);
    }

    return(
        <TabArea>
            <TabItem onPress={()=>irPara('Home')}>
                <IconeHome style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={()=>irPara('Search')}>
                <IconeProcurar style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItemCentro onPress={()=>irPara('Appointments')}>
                <IconeCalendario width="32" height="32" fill="#FE5F55"/>
            </TabItemCentro>
            <TabItem onPress={()=>irPara('Favorites')}>
                <IconeFavorito style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={()=>irPara('Profile')}>
                <IconeConta style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
        </TabArea>
    );
}