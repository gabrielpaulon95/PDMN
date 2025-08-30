import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Hippo from "./Hippo"
import Feedback from "./Feedback"

const App = () => {
  const textoOK ="ja chegou!"
  const textoNOK ="Ainda nao chegou!"
  const funcaoOK = () => alert("Obrigado pelo Feedback")
  const funcaoNOK = () => alert("Verificando")
  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}/>
  )
  const pedidos = [
    {
      data: '22/08/2025',
      icone: 'fa-solid fa-hdd',
      titulo: 'SSD',
      descricao: 'SDD 512GB'
    },
    {
      data: '27/08/2025',
      icone: 'fa-solid fa-mouse',
      titulo: 'MOUSE GAMER',
      descricao: 'Mouse Bluetooth'
    },
    {
      data: '21/08/2025',
      icone: 'fa-solid fa-keyboard',
      titulo: 'GAMER KEYBOARD',
      descricao: 'Mechanical Keyboard'
    },
    {
      data: '20/08/2025',
      icone: 'fa-solid fa-headphones',
      titulo: 'HEADPHONES',
      descricao: 'Headphones Bluetooth'
    }
  ]
  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Hippo size='fa-4x'/>
            <span className="mx-1"> </span>
            <Hippo 
              size='fa-3x'
              rotate='fa-flip-horizontal'
            />
        </div>
      </div>
      <div className="row">
        {
          pedidos.map(pedido=>(
            <div className="col-12 col-lg-6 col-xxl-3">
              <Cartao
                cabecalho={pedido.data}>
                <Pedido
                  icone={pedido.icone}
                  titulo={pedido.titulo}
                  descricao={pedido.descricao} />
                {componenteFeedback}
              </Cartao>
            </div>
          ))
        }
      </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="25/08/2025">
            <Pedido
            icone="fa-solid fa-mouse"
            titulo="MOUSE"
            descricao="Mouse Bluetooth" />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="25/08/2025">
            <Pedido
            data="12/08/2025"
            icone="fa-solid fa-keyboard"
            titulo="KEYBOARD"
            descricao="Mechanical Keyboard" />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="25/08/2025">
            <Pedido
            data="19/08/2025"
            icone="fa-solid fa-headphones"
            titulo="HEADPHONE"
            descricao="Headphone sem fio" />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
  )
}


export default App