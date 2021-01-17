import React, {Component} from 'react';

import Login from './Pages/Login/index';

import CreateAccount from './Pages/CreateAccount/index';

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
    <>
      {/* <Login /> */}
      <CreateAccount />
    </>
  );
}
