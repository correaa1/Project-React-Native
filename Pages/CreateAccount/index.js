import React, {useState} from 'react';
import {Link} from 'react-router-native';
import {Text, View, TouchableOpacity} from 'react-native';

import {Container, CampoInput, ViewInput, ButtonBack} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateAccount = () => {
  const [nome, setNome] = useState();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('nome', value);
      alert(value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('nome');
      if (value) alert(value);
    } catch (e) {
      // error reading value
    }
  };
  return (
    <Container>
      <ButtonBack>
        <Link to="/">
          <Text>Voltar</Text>
        </Link>
      </ButtonBack>
      <ButtonBack
        onPress={() => {
          storeData(nome);
        }}>
        <Text>Proximo</Text>
      </ButtonBack>
      <ViewInput>
        <Text>Nome: </Text>
        <CampoInput
          placeholder="Preencha seu nome"
          autoCorrect={false}
          onChangeText={(text) => setNome(text)}
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
