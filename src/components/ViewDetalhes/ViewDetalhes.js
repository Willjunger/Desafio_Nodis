import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import '../../styles/detalhes.css';

export default function Detalhes(props) {
  const [detalhes, setDetalhes] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;

    api
      .get(`/skus/${id}`)
      .then(res => {
        setDetalhes(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return 'loading...';
  }

  return (
    <div className="container">
      <div className="produto-detalhe">
        <section>
          <Link to="/" className="btn blue-grey lighten-1">
            Home
          </Link>
        </section>

        <section className="section-principal">
          <img
            className="imagem-detalhes"
            alt={detalhes.name}
            src={detalhes.imageUrl}
          ></img>
          <div className="div-detalhes">
            <h3>{detalhes.name}</h3>
            <p className="cor-codigo">(Cod.{detalhes.ean})</p>
            <p>
              Vendido e entregue por <strong>Nodis</strong>
            </p>
            <p className="preco-antigo">
              R$ <em>{detalhes.promotionalPrice},00</em>
            </p>
            <p className="preco-novo">
              <b>R$ {detalhes.salePrice},00</b>
            </p>
            <button className="waves-effect waves-light btn btn-comprar">
              Comprar
            </button>
          </div>
        </section>

        <section className="sobre">
          <h5>Sobre o produto</h5>
          <p>{detalhes.description}</p>
        </section>

        <table>
          <thead>
            <tr>
              <td>
                <h5>Detalhes Técnicos</h5>
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Número do produto</td>
              <td>{detalhes.ean}</td>
            </tr>
            <tr>
              <td>Categoria</td>
              <td>{detalhes.category}</td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>{detalhes.package.weight}</td>
            </tr>
            <tr>
              <td>Largura</td>
              <td>{detalhes.package.width}</td>
            </tr>
            <tr>
              <td>Profundidade</td>
              <td>{detalhes.package.depth}</td>
            </tr>
            <tr>
              <td>Altura</td>
              <td>{detalhes.package.height}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
