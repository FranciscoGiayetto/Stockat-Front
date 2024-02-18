'use client'

import {Grid, Box, Button, Container} from "@mui/material"
import { Roboto } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import PriceCard from "@/components/priceCard"

//STYLES
import 'swiper/css';
import 'swiper/css/pagination';
import "./page.css"

//ICONS
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import GridOffRoundedIcon from '@mui/icons-material/GridOffRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';




const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const classes = {
  paper: {
    padding: 20,
    textAlign: "center",
    color: "#343434",
    fontFamily: "Roboto"
  }
};


export default function Home() {

  return (
    <>
      <Navbar />
      <Grid container spacing={2} className={roboto.className}>
        <Grid item xs={12} className="main">
            <div className="image-container">
              <img src="https://th.bing.com/th/id/OIG4.mkQdvYSxfPRRlfOSc7s6?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
            </div>
          <h1>¡Ya es hora de que nos organicemos!</h1>
          <p>Stockat es una plataforma en la nube diseñada para simplificar la gestión empresarial, permitiéndote administrar tu empresa de forma sencilla, rápida y fácil de entender.</p>
          <Button 
          color="primary" 
          variant="contained" 
          className="btn-main"
          >COMENCEMOS</Button>
        </Grid>
        <Box sx={{ width: '100%', flexGrow:1, marginTop:"180px" }}>
          <h1 style={{textAlign:"center"}}>¿QUÉ TENEMOS PARA VOS?</h1>  
          <img src="https://th.bing.com/th/id/OIG1.ZysMkac4PtuYwbzy.MEF?pid=ImgGn" alt="" />

        </Box>
        <Box sx={{ width: '100%', flexGrow:1 }}>
          <h1 style={{textAlign:"center"}}>HACEMOS LA DIFERENCIA 👀</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} sm={6}>
              <Paper style={classes.paper}>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <GridOffRoundedIcon />
                    <h2>Olvidate de usar Excel</h2>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} sm={6} >
              <Paper style={classes.paper}>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <ContactSupportRoundedIcon />
                    <h2>Soporte 24hs</h2>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <Paper style={classes.paper}>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <AutoFixHighRoundedIcon />
                    <h2>Herramientas unicas</h2>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <Paper style={classes.paper}>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <LocalOfferRoundedIcon />
                    <h2>Facurá online</h2>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{width: '100%', height:"100%", flexGrow:3, textAlign:"center",  }}>
          <h1 style={{textAlign:"center"}}>Planes hechos para tu negocio</h1>  
          <Swiper
            style={{}}
            slidesPerView={4}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            
            }}
            modules={[Pagination]}
            
          >
            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><PriceCard
            title={"Básico"}
            price={20000}
            features={"X"}
            operations={1}
            deposits={3}
            notifications={"✓"}
            users={1}
            /></SwiperSlide>

            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><PriceCard
            title={"Básico"}
            price={20000}
            features={"X"}
            operations={1}
            deposits={3}
            notifications={"✓"}
            users={1}
            /></SwiperSlide>

            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><PriceCard
            title={"Básico"}
            price={20000}
            features={"X"}
            operations={1}
            deposits={3}
            notifications={"✓"}
            users={1}
            /></SwiperSlide>

            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><PriceCard
            title={"Básico"}
            price={20000}
            features={"X"}
            operations={1}
            deposits={3}
            notifications={"✓"}
            users={1}
            /></SwiperSlide>
          
          </Swiper>
        </Box>
        <Box sx={{ width: '100%', flexGrow:1, textAlign:"center" }}>
          <h1 style={{textAlign:"center"}}>Empezar es muy fácil</h1>  
          <p>* Steper MUI *</p>
        </Box>
      </Grid>
    </>
  );
}

