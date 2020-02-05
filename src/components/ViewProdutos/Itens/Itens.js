import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import '../../../styles/principal.css';

export default function Itens() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    api.get('/skus').then(res => {
      setItens(res.data);
    });
  }, []);

  return (
    <div className="container">
      {itens.map(iten => (
        <div key={iten.id} className="col s12 m7 hoverable">
          <div className="card horizontal">
            <div className="card-image alinhamento-imagem-produto">
              <img
                src={iten.imageUrl}
                alt={iten.name}
                className="imagem-produto"
              ></img>
            </div>
            <div className="card-stacked limit-card">
              <div className="card-content">
                <h5 className="header">{iten.name}</h5>
                <p className="truncate ">{iten.description}</p>
                <p className="preco-antigo">
                  R$ <em>{iten.promotionalPrice},00</em>
                </p>
                <p className="preco-novo">
                  R$ <em>{iten.salePrice},00</em>
                </p>
              </div>
              <div className="card-action">
                <Link
                  to={`/detalhes/${iten.id}`}
                  className="waves-effect waves-light btn cor-nodis"
                >
                  Detalhes do Produto
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
