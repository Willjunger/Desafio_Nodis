import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ViewProdutos from './components/ViewProdutos/ViewProdutos';
import ViewDetalhes from './components/ViewDetalhes/ViewDetalhes';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ViewProdutos} />
        <Route path="/detalhes/:id" component={ViewDetalhes} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
