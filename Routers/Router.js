import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import Login from '../Pages/Login/index';
import CreateAccount from '../Pages/CreateAccount/index';
import HealthData from '../Pages/HealthData/index';

function routes() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route exact path="/create" component={CreateAccount} />
      <Route exact path="/Health" component={HealthData} />
    </>
  );
}

export default routes;
