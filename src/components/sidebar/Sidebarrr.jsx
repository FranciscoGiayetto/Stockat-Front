'use client'

import React from 'react'

// SIDEBAR
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

// STYLES
import './sidebar.css'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCartShopping, faBox, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHouse, faCartShopping, faBox, faArrowRightArrowLeft);

function Sidebarrr() {

  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className='back'>
      <Sidebar
        width='20%'
        collapsed={collapsed}
        backgroundColor='#F56F16'
        style={{ height: '100vh' }}
      >

        <div className="stockat">
          <img src="" alt="" />
          <h1>STOCKAT</h1>
        </div>
        <Menu
          color='white'
        >
          <MenuItem icon={<FontAwesomeIcon icon="house" style={{ color: "#ffffff" }} size="xl" />}> Inicio </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon="cart-shopping" style={{ color: "#ffffff" }} size="xl" />}> Ventas </MenuItem>
          <MenuItem suffix='⚠️' icon={<FontAwesomeIcon icon="box" style={{ color: "#ffffff" }} size="xl" />}> Productos </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon="arrow-right-arrow-left" style={{ color: "#ffffff" }} size="xl" />}> Historial </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            Collapse
          </button>
        </div>
      </main>
    </div>
  )
}

export default Sidebarrr