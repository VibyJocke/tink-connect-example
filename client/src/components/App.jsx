import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Callback from './Callback';
import { Container } from 'reactstrap';
import Main from './Main';
import Result1 from './Result1';
import Result2 from './Result2';
import Result3 from './Result3';
import Result4 from './Result4';
import Result5 from './Result5';
import Result6 from './Result6';
import Result7 from './Result7';
import Result8 from './Result8';
import Result9 from './Result9';
import Result10 from './Result10';
import Result11Opts from './Result11Opts';
import Result11Result from './Result11Result';
import Result12Opts from './Result12Opts';
import Result12Result from './Result12Result';
import Result13 from './Result13';

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/callback" component={Callback} />
      <Route exact path="/result-1" component={Result1} />
      <Route exact path="/result-2" component={Result2} />
      <Route exact path="/result-3" component={Result3} />
      <Route exact path="/result-4" component={Result4} />
      <Route exact path="/result-5" component={Result5} />
      <Route exact path="/result-6" component={Result6} />
      <Route exact path="/result-7" component={Result7} />
      <Route exact path="/result-8" component={Result8} />
      <Route exact path="/result-9" component={Result9} />
      <Route exact path="/result-10" component={Result10} />
      <Route exact path="/result-11-opts" component={Result11Opts} />
      <Route exact path="/result-11-res" component={Result11Result} />
      <Route exact path="/result-12-opts" component={Result12Opts} />
      <Route exact path="/result-12-res" component={Result12Result} />
      <Route exact path="/result-13" component={Result13} />
    </Switch>
  </Container>
);

export default App;
