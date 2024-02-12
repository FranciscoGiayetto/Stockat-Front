export const metadata = {
  title: 'Stockat',
  description: 'Tu gestionador de confianza',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
