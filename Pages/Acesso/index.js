import React from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

import Menu from './Components/Menu/index';
import Ficha from './Ficha/index';

const Acesso = () => {
  return (
    <Container>
      <Menu />
      <Ficha />
    </Container>
  );
};

export default Acesso;
