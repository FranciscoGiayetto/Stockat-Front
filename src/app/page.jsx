'use client'

import {Grid, Box} from "@mui/material"
import { Roboto } from 'next/font/google'
import "./page.css"
import Navbar from "@/components/navbar/Navbar"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Navbar />
      <Grid container spacing={2} className={roboto.className}>
        <Grid item xs={12} className="main">
          <h1>¡Ya es hora de que nos organicemos!</h1>
          <p>Stockat es una plataforma en la nube diseñada para simplificar la gestión empresarial, permitiéndote administrar tu empresa de forma sencilla, rápida y fácil de entender.</p>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <h1 style={{textAlign:"center"}}>¿Qué tenemos de diferente a otras? 👀</h1>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="sec">
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}

