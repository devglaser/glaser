import './../css/global.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Desenvolvedor & Designer Web - Daniel_GLaser</title>
        
        <link rel='icon' href='./logo.svg'/>
        <link rel="canonical" href="https://glaser.vercel.app"/>

        <meta name="keywords" content="website, site, web, landing page, e-commerce, one page"/>
        <meta name="description" content="Especialista em desenvolvimento & design de sites minimalistas"/>
        <meta property="og:title" content="Desenvolvedor & Designer Web - Daniel_GLaser"/>
        <meta property="og:description" content="Especialista em desenvolvimento & design de sites minimalistas"/>
        <meta property="og:image" content="https://glaser.vercel.app/imgs/imagem.jpg"/>
        <meta property="og:url" content="https://glaser.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Danke Eventos"/>
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
