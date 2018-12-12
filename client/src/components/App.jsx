import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Callback from './Callback';
import { Col, Container, Row } from 'reactstrap';
import Main from './Main';

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/callback" component={Callback} />
    </Switch>
  </Container>
);

export default App;
