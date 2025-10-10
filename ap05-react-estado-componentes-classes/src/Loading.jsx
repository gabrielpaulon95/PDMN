import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center border rounded p-3">
            <div className='spinner-border text-primary mb-2' 
            style={{width: '4rem', height: '4rem'}}
            role='status'>
             <span className='visually-hidden'>
                Carregando...
              </span>
            </div>
            <p>{this.props.texto ? this.props.texto : 'aguarde...'}</p>
        </div>
    )
  }
}

Loading.defaultProps = {
  texto: 'Aguarde...'
}

export default Loading