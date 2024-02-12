import {Grid} from "@mui/material"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <Grid container spacing={2} className={roboto.className}>
      <Grid item xs={8}>
        <h1>Starting</h1>
      </Grid>
    </Grid>
  );
}
