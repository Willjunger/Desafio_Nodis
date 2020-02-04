import React from 'react';
import Axios from 'axios';
import {Switch , Route, Link} from 'react-router-dom';

import Styles from '../../styles/detalhes.css'

export default class detalhes extends React.Component {
  state = {
    detalhes: []
  }

  componentDidMount() {
    Axios.get('https://frontend-challenge-beginner.herokuapp.com/SKUs')
    .then(res =>{
      this.setState({detalhes: res.data})
    })
  }


  render() {
      return(
        <div className="container">
          {this.state.detalhes.map(detalhe =>
            <div key={detalhe.id} className="produto-detalhe">

              <section>
                <Link to="/" className="btn blue-grey lighten-1">Home</Link>
              </section>

              <section className="section-principal">
                <img className="imagem-detalhes" src={detalhe.imageUrl}></img>
                <div className="div-detalhes">
                  <h3>{detalhe.name}</h3>
                  <p className="cor-codigo">(Cod.{detalhe.ean})</p>
                  <p>Vendido e entregue por <strong>Nodis</strong></p>
                  <p className="preco-antigo">R$ <em>{detalhe.promotionalPrice},00</em></p>
                  <p className="preco-novo"><b>R$ {detalhe.salePrice},00</b></p>
                  <button className="waves-effect waves-light btn btn-comprar">Comprar</button>
                </div>
              </section>

              <section className="sobre" >
                <h5 >Sobre o produto</h5>
                <p >{detalhe.description}</p>
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
                    <td>{detalhe.ean}</td>
                  </tr>
                  <tr>
                    <td>Categoria</td>
                    <td>{detalhe.category}</td>
                  </tr>
                  <tr>
                    <td>Peso</td>
                    <td>{detalhe.package.weight}</td>
                  </tr>
                  <tr>
                    <td>Largura</td>
                    <td>{detalhe.package.width}</td>
                  </tr>
                  <tr>
                    <td>Profundidade</td>
                    <td>{detalhe.package.depth}</td>
                  </tr>
                  <tr>
                    <td>Altura</td>
                    <td>{detalhe.package.height}</td>
                  </tr>
                </tbody>
              </table>

            </div>
            )}
        </div>
        
      )
    }
  }