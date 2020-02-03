import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';


import Header from './componentes/header';
import Itens from './componentes/itens';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="titulo-promocao cor-nodis">
        <h4 className="container d-flex cor">Produtos em Promoção</h4>
      </div>
      <Itens />
      <Footer />
    </div>
  );
}

export default App;
