import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Scroller,
} from './styles';
import { Text , FlatList} from 'react-native';
import { db } from '../../services/config';

const Ambiente= ({ nome, descricao, lotacao }) => (
    <>
      <Nome>{nome}</Nome>
      <Descricao>{descricao}</Descricao>
      <Lotacao>{lotacao}</Lotacao>
    </>
  );
export default () => {

    const navigation = useNavigation();
    let listaAmbientes = [];
    useEffect(() => {
        db.collection("Ambiente").get().then((ambientes) => {
            ambientes.forEach((doc) => {
                console.log(doc.data());
                listaAmbientes.push(doc.data());
            });
            console.log(listaAmbientes);
        });
    }, []);

    return (
<FlatList
  data={listaAmbientes}
  renderItem={({item}) => <Ambiente {...item}/>}
/>
    );
}