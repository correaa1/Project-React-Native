import React from 'react';

import {Text} from 'react-native';

import {Link} from 'react-router-native';

import {
  Container,
  CampoInput,
  ViewInput,
  ButtonBack,
  ButtonCreate,
} from './styles';

const HealthData = () => {
  return (
    <Container>
      <ButtonBack>
        <Link to="/Create">
          <Text>Voltar</Text>
        </Link>
      </ButtonBack>

      <ViewInput>
        <Text>Qual a sua religião? </Text>
        <CampoInput
          placeholder="Digite no campo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
      <ViewInput>
        <Text>É doador de órgãos? </Text>
        <CampoInput
          placeholder="Preencha seu nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
      <ViewInput>
        <Text>Tipo sanguíneo? </Text>
        <CampoInput
          placeholder="Preencha seu tipo sanguíneo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
      <ViewInput>
        <Text>Usa marca-passo? </Text>
        <CampoInput
          placeholder="Digite no campo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
      <ViewInput>
        <Text>Possui doenças crônicas? </Text>
        <CampoInput
          placeholder="Digite no campo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
      <ViewInput>
        <Text>Possui Alergias? </Text>
        <CampoInput
          placeholder="Digite no campo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
      <ViewInput>
        <Text>Possui alguma deficiência física?? </Text>
        <CampoInput
          placeholder="Digite no campo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>
      <ViewInput>
        <Text>Quais medicamentos você toma? </Text>
        <CampoInput
          placeholder="Digite no campo"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </ViewInput>

      <ButtonBack>
        <Link to="/">
          <Text>Criar cadastro</Text>
        </Link>
      </ButtonBack>
    </Container>
  );
};

export default HealthData;
