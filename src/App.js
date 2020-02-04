import React, {component} from 'react';
import {Switch , Route, Link} from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';

import Header from './componentes/view-produtos/header';
import Footer from './componentes/view-produtos/footer';
import ViewProdutos from './componentes/view-produtos/viewProdutos';
import ViewDetalhes from './componentes/view-detalhes/viewDetalhes';

function App()  {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={ViewProdutos}/>
        <Route path="/detalhes" component={ViewDetalhes}/>       
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
