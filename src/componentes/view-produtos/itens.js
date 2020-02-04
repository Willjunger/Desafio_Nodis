import React from 'react';
import Axios from 'axios';
import {Switch , Route, Link} from 'react-router-dom';
import Styles from '../../styles/principal.css'



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
            <div className="card horizontal">
              <div className="card-image alinhamento-imagem-produto">
                <img src={iten.imageUrl} alt={iten.name} className="imagem-produto"></img>
              </div>
              <div className="card-stacked limit-card">
                <div className="card-content">
                  <h5 className="header">{iten.name}</h5>
                  <p className="truncate ">{iten.description}</p>
                  <p className="preco-antigo">R$ <em>{iten.promotionalPrice},00</em></p>
                  <p className="preco-novo">R$ <em>{iten.salePrice},00</em></p>
                </div>
                <div class="card-action">
                  <Link to='/detalhes' className="waves-effect waves-light btn cor-nodis" id={iten.id} href="/">Detalhes do Produto</Link>
                </div>
              </div>
            </div>
          </div>
      )}
      </div>
    )
  }
}

