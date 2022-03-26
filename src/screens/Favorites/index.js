import React from 'react';
import { Container,
Area,
Imagem,
Info,
Nome } from './styles';

export default () => {
    return (
        <Container>
            <Area>
                <Imagem/>
                <Info/>
                <Nome/>
            </Area>
            <Area>
            <Imagem/>
                <Info/>
                <Nome/>
            </Area>
            <Area>
            <Imagem/>
                <Info/>
                <Nome/>
            </Area>
            <Area>
            <Imagem/>
                <Info/>
                <Nome/>
            </Area>
        </Container>
    );
}