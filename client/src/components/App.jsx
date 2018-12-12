import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Callback from './Callback';
import { Container } from 'reactstrap';
import Main from './Main';
import Result1 from './Result1';

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/callback" component={Callback} />
      <Route exact path="/result-1" component={Result1} />
    </Switch>
  </Container>
);

export default App;
