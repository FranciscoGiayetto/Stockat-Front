"use client"

import React, { useState }from 'react';

//FORMIK
import { Formik, Form, Field } from 'formik';

//MATERIAL UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';


import Image from 'next/image';
import Logo from './logo.png';

// CSS
import './login.css'

function page() {  
  // CONTRASEÑA
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // CHECKBOX RECORDAR
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='fondo'>
      <Formik
        initialValues={{
          user: '',
          password: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form className='form'>
            <Image className='logo' src={Logo} alt="" />
            <h1 className='titulo'>STOCKAT</h1>
            <div className="usuario">
              <div className="icono">
                <PersonIcon sx={{ color: 'white', fontSize: 40 }} />
              </div>
              <hr />
              <Field
                name="user"
                as={TextField}
                className='textfield'
                id="outlined-basic"
                label="Nombre de Usuario"
                variant="outlined"
              />
            </div>

            <div className="contraseña">
              <div className="icono">
                <LockIcon sx={{ color: 'white', fontSize: 35 }} />
              </div>
              <hr />
              <Field
                name="password"
                render={({ field }) => (
                  <FormControl variant="outlined" className='textfield'>
                    <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                    <OutlinedInput
                      {...field}
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Contraseña"
                    />
                  </FormControl>
                )}
              />
            </div>

            <div className="opciones">
              <div className="check">
                <Checkbox {...label} className='checkbox-style'
                sx={{ color: 'white',
                '&.Mui-checked': {
                  color: 'white',
                },}}
                />
                <h3>Recordame</h3>
              </div>

              <div className="olvide">
                <h3>Olvidé mi contraseña</h3>
              </div>
            </div>

            <Button className='boton' variant="contained" type='submit'>INICIAR SESIÓN</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default page