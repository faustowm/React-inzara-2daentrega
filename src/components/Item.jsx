import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ({ producto }) => {

  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="producto">
      <img src={producto.imagen} />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}`}>Mas info</Link>
      <button className='boton-carrito' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}