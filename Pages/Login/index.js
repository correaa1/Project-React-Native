import React, {useState} from 'react';
import {Link} from 'react-router-native';

import {
  View,
  Text,
  Input,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {
  Container,
  Acessar,
  CampoInput,
  CriarCadastro,
  Texto,
  Keyboard,
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('nome', value);
      alert('salvando');
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('nome');
      if (value !== null) {
        alert(email);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <KeyboardAvoidingView>
      <Container>
        <CampoInput
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />

        <Acessar
          onPress={() => {
            storeData(email);
          }}>
          <Link to="/acesso">
            <Texto>Acessar</Texto>
          </Link>
        </Acessar>

        <CriarCadastro>
          <Link to="/create">
            <Texto>Criar Cadastro</Texto>
          </Link>
        </CriarCadastro>
      </Container>
    </KeyboardAvoidingView>
  );
};
export default Login;
