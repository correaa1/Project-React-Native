import React from 'react';

import {Text} from 'react-native';

import {Container} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Ficha = () => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('nome');
      if (value) {
        alert(value);
        return value;
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <Container>
      <Text>Ficha</Text>
    </Container>
  );
};

export default Ficha;
