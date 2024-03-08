'use client'

import React from 'react'

// STYLES
import './productos.css'

// SIDEBAR
import Sidebarrr from '@/components/sidebar/Sidebarrr'

// MUI
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrash, faXmark, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPlus, faPenToSquare, faTrash, faXmark, faFileImport);

function page() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <>
        <Sidebarrr />
        <div className="container">

          <div className="barra">
            <div className="contenido-barra">
              <div className="buscador">
                <h1>Productos</h1>
                <Search className='buscar'>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </div>
              <div className="botones-arriba">
                <button className='nuevo'><FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#ffffff",}} size='2xl' /></button>
                <button className='importar'><FontAwesomeIcon icon="fa-solid fa-file-import" style={{color: "#ffffff",}} size='2xl' /></button>
              </div>
            </div>
          </div>

          <div className="opciones">
            <div className="opciones-contenido">
              <button className='filtrar'>FILTRAR v</button>
              <button className='agregar-categoria'>AGREGAR CATEGORÍA</button>
            </div>
          </div>

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
        </div>
    </>
  )
}

export default page