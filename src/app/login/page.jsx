import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';

import './login.css'

function page() {  

  return (
    <div className='fondo'>
        <h1 className='titulo'>STOCKAT</h1>

        <TextField className='usuario' id="outlined-basic" label="Nombre de usuario" variant="outlined"
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="https://imgs.search.brave.com/ApKtkR7lY1oktTi0fLkD9yKXdLcjD-j_I1e7bJ7E3xM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9qZW5u/YS1vcnRlZ2EtNjQ5/OWI3OWUzYWVhYy5q/cGc_Y3JvcD0xeHc6/MC40NDk2NjY5MTMz/OTc0ODMzeGg7Y2Vu/dGVyLHRvcCZyZXNp/emU9MTIwMDoq" alt="" />
              </InputAdornment>
            ),
          }} />

        <TextField className='contraseña' id="outlined-basic" label="Contraseña" variant="outlined" />


        <Button className='boton' variant="contained">INICIAR SESIÓN</Button>
    </div>
  )
}

export default page