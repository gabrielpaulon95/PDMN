import React from 'react'
import Imagem from './Imagem'

const ListaImagem = ({photos}) => {
  return (
        photos.map((photo) => (
            <Imagem
              key={photo.id} Imagem 
              src={photo.src.small} 
              alt={`Foto tirada por ${photo.photographer}. ${photo.alt}`}
            />
            
          ))
  )
}

export default ListaImagem