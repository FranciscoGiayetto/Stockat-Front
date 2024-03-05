'use client'

import React, { useEffect, useState } from 'react'

// SIDEBAR
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

// STYLES
import './sidebar.css'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCartShopping, faBox, faArrowRightArrowLeft, faDownload, faRightFromBracket, faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHouse, faCartShopping, faBox, faArrowRightArrowLeft, faDownload, faRightFromBracket, faBars, faChevronUp);

function Sidebarrr() {
  const [collapsed, setCollapsed] = useState(true);

  // const [width, setWidth] = useState(window.innerWidth);
  // function getSize() {
  //   setWidth(window.innerWidth);
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', getSize);
  //   if (width < 625) {
  //     setCollapsed(true);
  //   } else {
  //     setCollapsed(false);
  //   }

  //   return () => {
  //     window.removeEventListener('resize', getSize);
  //   };
  // }, [width]);


  return (

    <div className="general">
      <div className='all'>
        <Sidebar
          width='225px'
          collapsed={collapsed}
          backgroundColor='#F56F16'
          style={{ height: '100vh' }}
        >

          <div className="stockat">
            <img className='logo' src="https://media.discordapp.net/attachments/1202708685084823554/1213108492345286686/logoBlanco.png?ex=65f44653&is=65e1d153&hm=08c09a7132f1e489632e60e98757e645c525af6f9b82c1ada91d2b5097d9a21a&=&format=webp&quality=lossless" alt="Logo" />
            <h1 className={`nombre ${collapsed ? 'hidden' : ''}`}>TOCKAT</h1>
          </div>
          <div className="menues">
            <Menu color='white'>
              <hr />
              <a href="/main"><MenuItem style={{ fontSize: '1.3rem', color: 'white' }} icon={<FontAwesomeIcon icon="house" style={{ color: "#ffffff" }} size="xl" />}> Inicio </MenuItem></a>
              <MenuItem style={{ fontSize: '1.3rem', color: 'white' }} icon={<FontAwesomeIcon icon="cart-shopping" style={{ color: "#ffffff" }} size="xl" />}> Ventas </MenuItem>
              <a href="/productos">
                <MenuItem style={{ fontSize: '1.3rem', color: 'white' }} suffix='⚠️' icon={<FontAwesomeIcon icon="box" style={{ color: "#ffffff" }} size="xl" />}> Productos </MenuItem>
              </a>
              <MenuItem style={{ fontSize: '1.3rem', color: 'white' }} icon={<FontAwesomeIcon icon="arrow-right-arrow-left" style={{ color: "#ffffff" }} size="xl" />}> Historial </MenuItem>
            </Menu>
            <Menu color='white'>
              <hr />
              <MenuItem style={{ fontSize: '1.3rem', color: 'white' }} icon={<FontAwesomeIcon icon="download" style={{ color: "#ffffff" }} size="xl" />}> Descargar App </MenuItem>
            </Menu>
          </div>
        </Sidebar>
        <div className='navbar' style={{ padding: 10 }}>
          <div className='contenido'>
            <div className="izquierda">
              <button style={{ fontSize: '1.3rem', color: 'white' }} className={`sb-button ${collapsed ? 'collapsed' : ''}`} onClick={() => setCollapsed(!collapsed)}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-up" size="xl" style={{color: "#000000",}} />
              </button>
            </div>
            <div className="derecha">
              <h1>EL KIOSCO DE MARIO</h1>
              <hr className='derecha-hr' />
              <a href="/login"><FontAwesomeIcon icon="fa-solid fa-right-from-bracket" style={{color: "#000000",}} size='xl' /></a>
            </div>
          </div>
          <hr className='hr-final'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebarrr