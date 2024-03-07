import { Container, Box, Button } from '@mui/material';
import React from 'react';

function PriceCard({ title, price, features, operations, users, deposits, notifications }) {
  return (
    <Box sx={{ backgroundColor: 'white', width: '300px', height: 'auto', borderRadius: '25px', border:"7px solid orange" }}>
      <Box sx={{ borderRadius: '15px', border:"5px solid violet" }}>
      <h1>{title}</h1>
      <p>$ {price} /mes</p>
      <hr style={{width:"70%"}}/>
      <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ marginTop:"30px" }}>{operations} operaciones al mes</li>
          <li style={{ marginTop:"30px" }}>{users} usuario/s</li>
          <li style={{ marginTop:"30px" }}>{deposits} metodos de deposito</li>
          <li style={{ marginTop:"30px" }}>Facturacion electrónica: {features}</li>
          <li style={{ marginTop:"30px" }}>Sistemas de notificaciones: {notifications}</li>

      </ul>

      <Button 
          variant='contained'
          sx={{
            marginTop: "50px",
            marginBottom: "30px",
            backgroundColor: '#C3E6CB', 
            color: 'black', 
            border: '2px solid #C3E6CB',
            borderRadius: '20px',
            padding: '10px 25px', 
            fontSize: '16px', 
            fontWeight: 'bolder', 
            transition: 'background-color 0.3s, border-color 0.3s',
            '&:hover': { 
              backgroundColor: '#A5D5AF',
              borderColor: '#5F9976', 
            },
          }} 
        >
          Contratar
        </Button>
      </Box>
    </Box>
  );
}

export default PriceCard;
