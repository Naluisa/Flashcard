import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
    Container,
    AreaInput,
    BotaoCustomizado,
    TextoBotaoCustomizado,
} from './styles';

import Logo from '../../assets/Logo.svg';
import IconeEmail from '../../assets/email.svg';

import LoginInput from '../../components/LoginInput';
import { db } from "../../services/config";


export default () => {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capacidade, setCapacidade] = useState('');


    const CadastraAmbiente = () => {
        if (nome !== '' && descricao !== '' && capacidade !== '') {
            db.collection('Ambiente').add({ nome: nome, descricao: descricao, capacidade: capacidade });
        } else {
            alert("Preencha os campos");
        }
    }


    return (
        <Container>
            <Logo width="100%" height="160" />

            <AreaInput>
                <LoginInput
                    IconSvg={IconeEmail}

                    placeholder="Nome do Ambiente"
                    value={nome}
                    onChangeText={t => setNome(t)}
                />

                <LoginInput
                    IconSvg={IconeEmail}

                    placeholder="Descrição"
                    value={descricao}
                    onChangeText={t => setDescricao(t)}
                />

                <LoginInput
                    IconSvg={IconeEmail}

                    placeholder="Capacidade Máxima"
                    value={capacidade}
                    onChangeText={t => setCapacidade(t)}
                    password={true}
                />

                <BotaoCustomizado onPress={CadastraAmbiente}>
                    <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
                </BotaoCustomizado>

            </AreaInput>



        </Container>
    );
}

