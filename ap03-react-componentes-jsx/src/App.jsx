import './styles.css'
const App =() => {
  const estilosBotao={marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}

  const textoDoRotulo= 'Nome:'

  const obterTextoDoBotao = () => {return "Enviar"}
  
  const aoClicar = () =>{alert('Hello')}

  return <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE',padding: 12, borderRadius: 8}}>
  <label 
  className='rotulo'
  htmlFor='nome'
  style={{display: 'block', marginBottom: 4}}
  >Nome:  </label>
  <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hiden', width: '100%', borderRadius: 8, outline: 'none'}}/>
  <button style={estilosBotao}
        onClick={() => aoClicar()}>
        {obterTextoDoBotao()}</button>
  </div>
}

export default App