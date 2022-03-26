import React from 'react';
import {useNavigation, StyleSheet} from '@react-navigation/native';
import {Container, Scroller, HeaderArea, HeaderTitle, ListArea} from './styles';


import MenuItem from '../../components/MenuItem';
import Colecoes from '../../components/Colecoes';
import {FAB, Icon} from 'react-native-elements';

import IconeOlho from '../../assets/eye.svg';

export default () => {
  const [visible, setVisible] = React.useState(true);

  const navigation = useNavigation();

  return (
    <Container>
      <Scroller>
        <ListArea>

          <MenuItem />
        </ListArea>
      </Scroller>
    </Container>
  );
};
