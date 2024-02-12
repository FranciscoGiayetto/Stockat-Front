import {Grid} from "@mui/material"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Dashboard() {
  return (
    <Grid container spacing={2} className={roboto.className}>
      <Grid item xs={8}>
        <h1>Dashboard</h1>
        <h2>Aca salo labura</h2>
      </Grid>
    </Grid>
  );
}
