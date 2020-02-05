import React from 'react';

import Itens from './Itens/Itens';

import '../../styles/principal.css';

const ViewProdutos = () => {
  return (
    <>
      <div className="titulo-promocao cor-nodis">
        <h4 className="container d-flex cor">Produtos em Promoção</h4>
      </div>
      <Itens />
    </>
  );
};

export default ViewProdutos;
