import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';

import Login from '../Pages/Login/index';
import CreateAccount from '../Pages/CreateAccount/index';
import Acesso from '../Pages/Acesso/index';

function routes() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route exact path="/create" component={CreateAccount} />
      <Route exact path="/acesso" component={Acesso} />
    </>
  );
}

export default routes;
