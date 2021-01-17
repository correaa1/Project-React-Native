import React, {Component} from 'react';

import Login from './Pages/Login/index';

import CreateAccount from './Pages/CreateAccount/index';

import {NativeRouter} from 'react-router-native';
import Route from './Routers/Router.js';

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
    <NativeRouter>
      <Route />
    </NativeRouter>
  );
}
