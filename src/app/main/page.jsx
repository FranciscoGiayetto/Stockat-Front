import React from 'react'
import './main.css'
import Sidebarrr from "@/components/sidebar/Sidebarrr"

function page() {
  return (
    <>
        <Sidebarrr />
        <div className="page-container">
            <div className='fondo'>
                <div className="resumenes">
                    <div className="resumen">
                        <h2>VENTAS DIARIAS</h2>
                        <hr />
                        <h1>50</h1>
                    </div>
                    <div className="resumen">
                        <h2>VENTAS TOTALES</h2>
                        <hr />
                        <h1>375</h1>
                    </div>
                    <div className="resumen">
                        <h2>PRODUCTOS EN STOCK</h2>
                        <hr />
                        <h1>520</h1>
                    </div>
                </div>
                
                <div className="graficos">
                    <div className="grafico">
                        <h2>Gráfico de Ventas</h2>
                        <hr />
                        <img src="https://imgs.search.brave.com/2KGYcQP4-RM1RiH0Zmi49sdH9HTV97dxN-om4XanUz0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lY29u/b21pcGVkaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9DYXB0/dXJhLWRlLXBhbnRh/bGxhLTIwMjItMDIt/MTItYS1sZXMtMTYu/MjMuMTgucG5n" alt="" />
                    </div>
                    <div className="grafico">
                        <h2>Productos mas Vendidos</h2>
                        <hr />
                        <img src="https://imgs.search.brave.com/rbW5GfGeunBdq1pXx3tFR8YzC_dLqQPztxNjOhdjg-w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvYmFiaWxpZGFk/eWVzdGFkaXN0aWNh/Lm5ldC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wNS9lamVt/cGxvLWRlLWRpYWdy/YW1hLWRlLWJhcnJh/cy5wbmc" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page