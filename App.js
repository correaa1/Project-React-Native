import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
          secureTextEntry={true}
          works
          password={true}
          does
          not
          work
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.submitText2}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    color: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
    marginBottom: 15,
  },
  submitText: {
    color: '#FFF',
    fontSize: 20,
    backgroundColor: '#3498db',
    height: 30,
    borderRadius: 7,
    paddingLeft: 50,
    paddingRight: 50,
  },
  submitText2: {
    color: '#FFF',
    fontSize: 18,
  },
});
