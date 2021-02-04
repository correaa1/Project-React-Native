import React from 'react';

import {Link} from 'react-router-native';

import {Text, View, TouchableOpacity} from 'react-native';

import {Container, CampoInput, ViewInput, ButtonBack} from './styles';

import AsyncStorage from 'react-native-community/async-storage';

const CreateAccount = () => {
  return (
    <Container>
      <ButtonBack>
        <Link to="/">
          <Text>Voltar</Text>
        </Link>

        <Link to="/Health">
          <Text>Dados de Saúde</Text>
        </Link>
      </ButtonBack>

      <ViewInput>
        <Text>Nome: </Text>
        <CampoInput
          placeholder="Preencha seu nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>

      <ViewInput>
        <Text>Email: </Text>
        <CampoInput
          placeholder="Preencha seu nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>

      <ViewInput>
        <Text>Data de Nascimento: </Text>

        <CampoInput
          placeholder="Digite no campo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>

      <ViewInput>
        <Text>Altura </Text>
        <CampoInput
          placeholder="Preencha a sua altura"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>

      <ViewInput>
        <Text>Peso: </Text>
        <CampoInput
          placeholder="Preencha seu peso"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
    </Container>
  );
};

export default CreateAccount;
