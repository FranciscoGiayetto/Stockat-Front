'use client'

import React, {Typography, useState} from "react"
import {Grid, Box, Button, Container} from "@mui/material"
import { Roboto } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import VerticalLinearStepper from "@/components/Stepper"


import PriceCard from "@/components/priceCard"
import Footer from "@/components/footer/Footer"



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
    fontFamily: "Roboto",
    borderRadius:"40px"
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
          <h1>¡Ya es hora de que <span class="sub">nos organicemos!</span></h1>
          <p>Stockat es una plataforma en la nube diseñada para simplificar la gestión empresarial, permitiéndote administrar tu empresa de forma sencilla, rápida y fácil de entender.</p>
          <Button 
          color="primary" 
          variant="contained" 
          className="btn-main"
          >COMENCEMOS</Button>
        </Grid>
        <Box sx={{ width: '100%', flexGrow:1 }} className="div-que-tenemos">
          <h1 style={{textAlign:"center", fontSize:"50px", marginTop:"250px"}}><span class="shades">¿QUÉ TENEMOS PARA VOS?</span></h1>  
          <div className="inf-right">
          <img src="https://th.bing.com/th/id/OIG1.ZysMkac4PtuYwbzy.MEF?pid=ImgGn" alt="" style={{width:"200px", height:"200px"}} />
            <div className="inf-right-txt">
              <h2>Analisis de tu negocio</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div className="inf-left">
            <img src="https://th.bing.com/th/id/OIG1.ZysMkac4PtuYwbzy.MEF?pid=ImgGn" alt="" style={{width:"200px", height:"200px"}} />
            <div className="inf-left-txt">
              <h2 >Control de distribuidores</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div className="inf-right">
          <img src="https://th.bing.com/th/id/OIG1.ZysMkac4PtuYwbzy.MEF?pid=ImgGn" alt="" style={{width:"200px", height:"200px"}} />
            <div className="inf-right-txt">
              <h2>Gráficos en tiempo real</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div className="inf-left">
            <img src="https://th.bing.com/th/id/OIG1.ZysMkac4PtuYwbzy.MEF?pid=ImgGn" alt="" style={{width:"200px", height:"200px"}} />
            <div className="inf-left-txt">
              <h2 >Me quedé sin ideas</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

        </Box>
        <Box sx={{ width: '100%', flexGrow:1 }} className="div-hacemos-diferencia">
          <h1 style={{textAlign:"center"}} ><span className="shades">HACEMOS LA DIFERENCIA 👀</span></h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sm={6} xl={3}>
              <Paper style={classes.paper}>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <h2>Olvidate de usar Excel</h2>
                    <GridOffRoundedIcon sx={{marginLeft:"10px"}}/>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={6} xl={3}>
              <Paper style={classes.paper}>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", }}>
                    <h2>Soporte 24hs</h2>
                    <ContactSupportRoundedIcon sx={{marginLeft:"10px"}}/>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={6} xl={3}>
              <Paper style={classes.paper}>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <h2>Herramientas unicas</h2>
                    <AutoFixHighRoundedIcon sx={{marginLeft:"10px"}}/>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={6} xl={3}>
              <Paper style={classes.paper}>
              <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={roboto.className}>
                  <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <h2>Facurá online </h2>
                    <LocalOfferRoundedIcon sx={{marginLeft:"10px"}}/>
                  </Box>
                  <p style={{width:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{width: '100%', height:"100%", flexGrow:3, textAlign:"center",  }}>
          <h1 style={{textAlign:"center"}}>Planes hechos <span className="circle">para tu negocio</span></h1>  
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
            title={"Normal"}
            price={20000}
            features={"X"}
            operations={1}
            deposits={3}
            notifications={"✓"}
            users={1}
            /></SwiperSlide>

            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><PriceCard
            title={"Completito"}
            price={20001}
            features={"X"}
            operations={1}
            deposits={3}
            notifications={"✓"}
            users={1}
            /></SwiperSlide>

            <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><PriceCard
            title={"Profesional"}
            price={20000}
            features={"X"}
            operations={1}
            deposits={3}
            notifications={"✓"}
            users={1}
            /></SwiperSlide>
          
          </Swiper>
        </Box>
        <Box sx={{ width: '100%', flexGrow:1, textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
          <h1 style={{textAlign:"center", marginBottom:"100px", fontSize:"60px", color:"orange"}} >Empezar es muy fácil</h1>  
          <VerticalLinearStepper />

        </Box>
      </Grid>
      
      <Footer />
    </>
  );
}

