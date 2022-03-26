import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container,
Scroller,
HeaderArea,
HeaderTitle,
ListArea } from './styles';

import Cartoes from '../../components/Cartoes'


export default () => {

    const navigation = useNavigation();
    
    return (
        <Container>
            <Scroller>  

                <ListArea>
                    <Cartoes/>
                </ListArea>
            </Scroller>
        </Container>
    );
}