import React from 'react'

export const Imagem = ({src, alt}) => {
  return (
    <div>
        <img src={src} alt = {alt}/>
    </div>
  )
}

export default Imagem