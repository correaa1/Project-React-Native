import React, {Component} from 'react';
import {Link} from 'react-router-native';
import AsyncStorage from 'react-native-community/async-storage';

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
          onpress={this.gravaEmail}
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
