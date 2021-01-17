import React, {Component} from 'react';
import {Link} from 'react-router-native';

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
          <Link to="/create">
            <Texto>Criar Cadastro</Texto>
          </Link>
        </CriarCadastro>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
