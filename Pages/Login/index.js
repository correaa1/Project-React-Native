import React, {Component} from 'react';
import {
  View,
  Text,
  Input,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {Container, Acessar, CampoInput, CriarCadastro, Texto} from './styles';

const Login = () => {
  return (
    <KeyboardAvoidingView>
      <Container>
        <CampoInput
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <Acessar>
          <Texto>Acessar</Texto>
        </Acessar>

        <CriarCadastro>
          <Texto>Criar Cadastro</Texto>
        </CriarCadastro>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
