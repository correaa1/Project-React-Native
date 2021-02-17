import React, {Component} from 'react';

import {Alert, Text} from 'react-native';

import {
  Container,
  CampoInput,
  ViewInput,
  Button,
  Menu,
  AsyncStorage,
} from './styles';

const Menus = () => {
  return (
    <Menu>
      <Button>
        <Text>Lembrete Rémedios</Text>
      </Button>

      <Button>
        <Text>Minha Ficha Técnica</Text>
      </Button>
      <Button>
        <Text>Minha Ficha Técnica</Text>
      </Button>
    </Menu>
  );
};

export default Menus;
