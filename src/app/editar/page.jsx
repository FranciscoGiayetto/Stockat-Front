'use client'

import React from 'react'

// STYLES
import './editar.css'

// SIDEBAR
import Sidebarrr from '@/components/sidebar/Sidebarrr'

// MUI
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputAdornment from '@mui/material/InputAdornment';

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faBackward, faDollarSign);


function page() {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });


    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file.name);
        }
    };


      
  return (
    <>
        <Sidebarrr />
        <div className="back">
            <div className="cont">
                <div className="cont-cont">
                    <div className="cabeza">
                        <button className='volver'><FontAwesomeIcon icon="fa-solid fa-backward" size="xl" style={{color: "#F56F16",}} /></button>
                        <h1>EDITAR PRODUCTO</h1>
                        <button className='guardar'>GUARDAR</button>
                    </div>
                    <div className="cuerpo">
                        <div className="code"><TextField className='field' id="outlined-basic" label="CÓDIGO:" variant="outlined" defaultValue="123456789" /></div>
                        <div className="name"><TextField className='field' id="outlined-basic" label="NOMBRE:" variant="outlined" defaultValue="Caramelos de Coca Cola" /></div>
                        <div className="numbers">
                        <TextField 
                                className='field' 
                                id="outlined-basic" 
                                label="PRECIO:" 
                                variant="outlined" 
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faDollarSign} style={{ color: "#000000" }} />
                                        </InputAdornment>
                                    ),
                                }}   
                                defaultValue="100"      
                            />
                            <TextField className='field' id="outlined-basic" label="STOCK MÍNIMO:" variant="outlined" defaultValue="100" />
                        </div>
                        <div className="category"><TextField className='field' id="outlined-basic" label="CATEGORÍA:" variant="outlined" defaultValue="Chucherías" /></div>
                        <div className="description"><TextField className='field' id="outlined-basic" label="DESCRIPCIÓN:" variant="outlined" defaultValue="Lorem Ipsum" /></div>
                        <div className="file">
                            <Button
                                className='file-button'
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                {selectedFile ? selectedFile : 'Upload file'}
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page