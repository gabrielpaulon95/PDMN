import React from "react"
import { Gato } from "./Gato.jsx"
import EstacaoClimatica from "./EstacaoClimatica.jsx"
import { Loading } from "./loading.jsx"
class App extends React.Component{
  constructor(props){
  super(props)
  this.state ={
    latitute: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }
  console.log('constructor')
  }

  state = {
    latitute: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }
  componentDidMount(){
    console.log('componentDidMount')
    //this.obterLocalizacao()
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  icones = {
    'Primavera': 'flower',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowflake'
  }

  obterEstacao= (dataAtual, latitude) =>{
    //ano, mes(0 a 11), dia ( 1 a 31)
    const anoAtual =  dataAtual.getFullYear()
    // 21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estaNoSul = latitude < 0 
    if(dataAtual >= d1 && dataAtual < d2)
      return estaNoSul  ? "Inverno" : "Verão"
    
    if (dataAtual >= d2 && dataAtual < d3)  
      return estaNoSul ? "Primavera" : "Outono" 
    
 
    if(dataAtual >= d3 && dataAtual < d1)
      return estaNoSul  ? "Verão" : "Inverno" 
      return estaNoSul ? "Outono" : "Primavera" 
 
  }

  obterLocalizacao =() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(dataAtual,position.coords.latitude)
        const icone = this.icones[estacao]
        this.setState({
          latitute: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleString(),
          icone: icone
        })

      },
      (erro) => {
        console.log(erro)
        this.setState({mensagemDeErro: 'Tente novamente'})
      }
    )
  }
    

  render(){
    console.log('render')
    return(
      <div className="container mt-2">
        <div className="col-12">
          <Gato tamanho="2"/>
          <Gato tamanho="2" direcao="horizontal"/>
        </div>
        <div className="row">
          <div className="col-12">
            {
              (!this.state.latitute && !this.state.mensagemDeErro) ?
              <Loading/>
              :
              this.state.mensagemDeErro ?
              <p className="border rounded p-2 fs-1 text-center">
                É preciso dar permissão de acesso à localização.
                Atualize a página e tente novamente, ajustando a configuração do seu navegador</p>

              :
              <EstacaoClimatica
              latitude={this.state.latitute}
              longitude={this.state.longitude}
              estacao={this.state.estacao}
              icone={this.state.icone}
              obterLocalizacao={this.obterLocalizacao}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App