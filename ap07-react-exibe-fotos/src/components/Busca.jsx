import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/IconField'
import {InputIcon } from 'primereact/InputIcon'
import { InputText } from 'primereact/InputText' 

export default class Busca extends Component {

    state={
        termoDeBusca: ''
    }

  onTermoAlterado = (evento) => {
    //console.log(evento.target.value)
    this.setState({
        termoDeBusca: evento.target.value
    })
    }
    onForSubmit = (evento) => {
        evento.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.onForSubmit}> 
            <div className='flex-column'>
                <IconField
                    className='w-full'
                    iconPosition='left'>
                    <InputIcon className='pi pi-search'/>
                    <InputText
                        value={this.state.termoDeBusca}
                        onChange={this.onTermoAlterado}
                        className='w-full'
                        placeholder={this.props.dica}
                    />
                </IconField>
                <Button
                className='mt-3'
                label='OK'/>
            </div>
        </form>
    )
  }
}

Busca.defaultProps = {
        dica: 'Buscar'
}