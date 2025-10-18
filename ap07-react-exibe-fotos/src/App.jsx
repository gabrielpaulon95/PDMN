import React, { Component } from 'react'
import Busca from './components/Busca'
import Imagem from './components/Imagem'
import { createClient } from 'pexels'
import PexelsLogo from './components/PexelsLogo'
export default class App extends Component {

  state ={
    photos: []
  }

  pexelsClient = null

  onBuscaRealizada =(termo) => {
    this.pexelsClient.photos.search({query: termo}).then(result=> this.setState({photos: result.photos}))
  }

  componentDidMount(){
    this.pexelsClient = createClient('n1ZQOkaGWkZS2ZbWXdbYgfmyKTajPkdrWn19mRnOQ8uloztsdedGSZAV')
  }
  render() {
    return (
      <div className='grid w-9 m-auto border-1 border-400'>
        <div className='col-12'>
          <PexelsLogo/>
        </div>
        <div className="col-12">
          <h1> Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca 
            dica="Procurar..."
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">{
          this.state.photos.map((photo) => (
            <div key={photo.id}>
              <Imagem src={photo.src.small} alt={`Foto tirada por ${photo.photographer}. ${photo.alt}`}/>
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}


