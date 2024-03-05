'use client'

import React from 'react'

// STYLES
import './productos.css'

// SIDEBAR
import Sidebarrr from '@/components/sidebar/Sidebarrr'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPlus, faPenToSquare, faTrash, faXmark);

function page() {
  return (
    <>
        <Sidebarrr />
        <div className="container">
          <div className="productos">
            <div className="producto">
              <div className="degrade"></div>
              <div className="imagen">
                <img src="https://http2.mlstatic.com/D_NQ_NP_628521-MLA29498939597_022019-O.webp" alt="Img producto" />
              </div>
              <hr />
              <div className="texto">
                <h3 className='codigo'>123456789</h3>
                <h3 className='nombre'>Caramelos de Coca Cola</h3>
                <h3 className='cantidad'>x 10</h3>
                <h3 className='precio'>$ 100</h3>
              </div>
              <div className="botones">
                <button className='agregar'><FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#ffffff",}} size='2xl' /></button>
                <button className='editar'><FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{color: "#ffffff",}} size='2xl' /></button>
                <button className='eliminar'><FontAwesomeIcon icon="fa-solid fa-trash" style={{color: "#ffffff",}} size='2xl' /></button>
              </div>
            </div>
          </div>

          <div className="productos2">
            <div className="producto2">
              <div className="degrade"></div>
              <div className="imagen">
                <img src="https://http2.mlstatic.com/D_NQ_NP_628521-MLA29498939597_022019-O.webp" alt="Img producto" />
              </div>
              <hr />
              <div className="texto">
                <h3 className='nombre'>Caramelos de Coca Cola</h3>
              </div>
              <div className="botones">
                <button className='agregar'><FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#ffffff",}} size='2xl' /></button>
                <button className='editar'><FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{color: "#ffffff",}} size='2xl' /></button>
                <button className='eliminar'><FontAwesomeIcon icon="fa-solid fa-trash" style={{color: "#ffffff",}} size='2xl' /></button>
              </div>
            </div>
            <div className="new-bar">
              <h3 className='codigo'>123456789</h3>
              <h3 className='cantidad'>x 10</h3>
              <h3 className='precio'>$ 100</h3>
            </div>
          </div>
        </div>
    </>
  )
}

export default page