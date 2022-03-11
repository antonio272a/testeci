import React from 'react'
import { Link} from 'react-router-dom'

function NotFound() {

  return (
    <div className='container text-center'>
      <div className='fs-2 fw-bold'>Infelizmente não encontramos o que você procura</div>
      <Link to="/">Voltar para Home </Link>
    </div>
  )
}

export default NotFound