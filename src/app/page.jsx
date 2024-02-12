import {Grid} from "@mui/material"
import { Roboto } from 'next/font/google'
import "./page.css"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <Grid container spacing={2} className={roboto.className}>
      <Grid item xs={12}>
        <h1>Optimizá tu negocio con Stockat</h1>
      </Grid>
    </Grid>
  );
}

