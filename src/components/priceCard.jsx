import { Container, Box, Button } from '@mui/material';
import React from 'react';

function PriceCard({ title, price, features, operations, users, deposits, notifications }) {
  return (
    <Box sx={{ backgroundColor: 'orange', width: '300px', height: 'auto', borderRadius: '15px' }}>
      <h1>{title}</h1>
      <p>$ {price} /mes</p>
      <hr />
      <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ marginTop:"30px" }}>{operations} operaciones al mes</li>
          <li style={{ marginTop:"30px" }}>{users} usuario/s</li>
          <li style={{ marginTop:"30px" }}>{deposits} metodos de deposito</li>
          <li style={{ marginTop:"30px" }}>Facturacion electrónica: {features}</li>
          <li style={{ marginTop:"30px" }}>Sistemas de notificaciones: {notifications}</li>

      </ul>

      <Button sx={{marginTop:"70px", marginBottom:"30px"}} variant='contained'>Contratar</Button>
    </Box>
  );
}

export default PriceCard;
