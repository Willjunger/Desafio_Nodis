import React from 'react';
import Axios from 'axios';

import Styles from '../styles/principal.css'



export default class Itens extends React.Component {
  state = {
    itens: []
  }

  componentDidMount() {
    Axios.get('https://frontend-challenge-beginner.herokuapp.com/SKUs')
    .then(res =>{
      this.setState({itens: res.data})
    })
  }


  render() {
    return(
      <div className="container">
      {this.state.itens.map(iten =>
          <div key={iten.id} className="col s12 m7 hoverable">
            <div class="card horizontal">
              <div class="card-image alinhamento-imagem-produto">
                <img src={iten.imageUrl} alt={iten.name} className="imagem-produto"></img>
              </div>
              <div class="card-stacked limit-card">
                <div class="card-content">
                  <h5 class="header">{iten.name}</h5>
                  <p className="truncate ">{iten.description}</p>
                  <p className="preco-antigo">R$ <em>{iten.promotionalPrice},00</em></p>
                  <p className="preco-novo">R$ <em>{iten.salePrice},00</em></p>
                </div>
                <div class="card-action">
                  <a className="waves-effect waves-light btn cor-nodis" href="/">Detalhes do Produto</a>
                </div>
              </div>
            </div>
          </div>
      )}
      </div>
    )
  }
}

