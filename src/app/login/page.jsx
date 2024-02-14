import React from 'react';

//MATERIAL UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import Image from 'next/image';
import Logo from './logo.png';




import './login.css'

function page() {  

  return (
    <div className='fondo'>
      <Image className='logo' src={Logo} alt="" />
      <h1 className='titulo'>STOCKAT</h1>

      <div className="usuario">
        <div className="icono">
          <PersonIcon sx={{ color: 'white', fontSize: 40 }} />
        </div>
        <hr />
        <TextField className='text-field' id="outlined-basic" label="Nombre de Usuario" variant="outlined" />
      </div>

      <div className="contraseña">
        <div className="icono">
          <LockIcon sx={{ color: 'white', fontSize: 35 }} />
        </div>
        <hr />
        <TextField className='text-field' id="outlined-basic" label="Contraseña" variant="outlined" />
      </div>


      <Button className='boton' variant="contained">INICIAR SESIÓN</Button>
    </div>
  )
}

export default page