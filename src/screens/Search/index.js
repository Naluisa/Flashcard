import React from 'react';
import { Container,
AreaHeader,
InputPesquisa } from './styles';

export default () => {
    return (
        <Container>
            <AreaHeader>
                <InputPesquisa
                    placeholder="Busque o nome do Ambiente"
                    placeholderTextColor="#FFFFFF"/>
            </AreaHeader>
        </Container>
    );
}