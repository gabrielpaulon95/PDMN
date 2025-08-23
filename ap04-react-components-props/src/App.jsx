import Pedido from "./Pedido"
const App = () => {
  return(
    <div className="container p-5">
      <div className="row">
        <div className="col-12">
          <i className="fa-hippo fa-solid fa-2x"></i>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
          data="22/08/2025"
          icone="fa-solid fa-hdd"
          titulo="SSD"
          descricao="SSD 512GB" />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
           <Pedido
          data="23/08/2025"
          icone="fa-solid fa-mouse"
          titulo="MOUSE"
          descricao="Mouse Bluetooth" />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
           <Pedido
          data="12/08/2025"
          icone="fa-solid fa-keyboard"
          titulo="KEYBOARD"
          descricao="Mechanical Keyboard" />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
          data="19/08/2025"
          icone="fa-solid fa-headphones"
          titulo="HEADPHONE"
          descricao="Headphone sem fio" />
        </div>
      </div>
    </div>
  )
}

export default App