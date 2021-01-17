import React from 'react';

import {Text, View} from 'react-native';

import {Container, CampoInput, ViewInput} from './styles';

const CreateAccount = () => {
  return (
    <Container>
      <ViewInput>
        <Text>Nome: </Text>
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
    </Container>
  );
};

export default CreateAccount;
