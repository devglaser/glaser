import Image from 'next/image'
import home from './../css/home.module.css'
import ContactButton from '@/Components/ContactButton/Button'
import Link from 'next/link';
import Head from 'next/head';


export default function Home() {

  return (
    <>
        <main>
          
          <section id={home.ChamaPrincipal}>
            
            <main id={home.textosChamada}>
              <span>
                Desenvolvedor & Designer Web
                
                <svg width={382} height={54}>
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#17EEEF"/>
                        <stop offset="100%" stopColor="#7cfc00"/>
                    </linearGradient>
                </defs>
                
                <rect x={10} y={5} width={362} height={34} rx={5} ry={5}/>
            </svg>
              </span>
              <h1>Daniel_GLaser</h1>
              <h2>Para o sucesso online, um site profissional é a sua porta de entrada</h2>
              <h3>Criar <span className="marcarVerde">credibilidade, confiança</span> através de um site, é a sua <span className='marcarVerde'>oportunidade de impulsionar o nível profissional</span> do seu negócio <span className='marcarVerde'>e aumentar seus resultados</span> se conectando com os seus clientes</h3>
              <ContactButton/>
            </main>


            <section id={home.ilustracoes}>

              <div id={home.nuvensTop}>

                <div id={home.nuvenTop}>
                  <Image src={'/svgs/TopNuvemA.svg'} alt="" priority width={235} height={66} />
                </div>

                <div id={home.nuvenTop}>
                  <Image src={'/svgs/TopNuvemB.svg'} alt="" priority width={159} height={45} />
                </div>

                <div id={home.nuvenTop}>
                  <Image src={'/svgs/TopNuvemC.svg'} alt="" priority width={243} height={68} />
                </div>

              </div>
              
              <div id={home.ilustraTrofeu}>
                <Image src={'/svgs/IlustracaoTopoTrofeu.svg'} alt="" priority width={565} height={600} />
              </div>

              <div id={home.nuvemCentroBack}>
                <Image src={'/svgs/NuvemCentroBack.svg'} alt="" width={1470} height={504}/>
              </div>

              <div id={home.nuvemEsquerdaFront}>
                <Image src={'/svgs/NuvemEsquerdaFront.svg'} alt="" width={663} height={308}/>
              </div>

              <div id={home.nuvemDireitaFront}>
                <Image src={'/svgs/NuvemDireitaFront.svg'} alt="" width={665} height={332}/>
              </div>

            </section>
          </section>
          
          <section id={home.beneficios}>

            <h1>Porque deve <span className='marcarVerde'>investir em</span> um site e quais <span className='marcarVerde'>benefícios</span> isso me ofecere?</h1>

            <ul id={home.listaBeneficios}>
              <li className={home.itemListaBeneficios}>
                <div>
                  <div>
                    <span>01</span>  
                  </div>
                  
                  <div>Acessibilidade</div>
                </div>
                <p>Permite que <span className='marcarVerde'>sua empresa</span> esteja <span className='marcarVerde'>disponível 24 horas por dia</span>, permitindo que os clientes acessem informações sobre sua empresa a qualquer momento.</p>
              </li>
              <li className={home.itemListaBeneficios}>
                <div>
                  <div>
                    <span>02</span>  
                  </div>
                  
                  <div>Alcance</div>
                </div>
                <p>Sua empresa pode <span className='marcarVerde'>atingir um público global, ao invés de ser limitada</span> a uma área geográfica específica.</p>
              </li>
              <li className={home.itemListaBeneficios}>
                <div>
                  <div>
                    <span>03</span>  
                  </div>
                  
                  <div>Marketing</div>
                </div>
                <p>Uma <span className='marcarVerde'>excelente ferramenta de marketing</span>, permitindo que você promova seus produtos e serviços, <span className='marcarVerde'>alcance novos clientes e aumente sua base de clientes</span> existente.</p>
              </li>
              <li className={home.itemListaBeneficios}>
                <div>
                  <div>
                    <span>04</span>  
                  </div>
                  
                  <div>Eficiência</div>
                </div>
                <p>Pode ajudar a <span className='marcarVerde'>automatizar processos comerciais, como vendas e atendimento ao cliente</span>, melhorando a eficiência de sua empresa.</p>
              </li>
              <li className={home.itemListaBeneficios}>
                <div>
                  <div>
                    <span>05</span>  
                  </div>
                  
                  <div>Credibilidade</div>
                </div>
                <p>Ter um website profissional e bem projetado <span className='marcarVerde'>ajuda a construir a confiança dos clientes em sua empresa e seus produtos ou serviços.</span></p>
              </li>
            </ul>

            <h2>
            Ter um site é uma excelente maneira de <span className='marcarVerde'>aumentar sua visibilidade, alcançar novos clientes e construir confiança</span> para sua empresa e seus produtos ou serviços.
            </h2>

            <ContactButton/>
          </section>

          <section id={home.eu}>
          
            <main>
              
              <h1>Quem sou eu?</h1>

              <h2>Eu sou Daniel_GLaser</h2>

              <h3>Especialista em desenvolvimento & design de sites minimalistas</h3>

              <p>
              Trago comigo <span className='marcarVerde'>conhecimentos especializados para tornar cada site único e personalizado de acordo com o projeto estabelecido</span>, utilizando as melhores práticas de design para criar <span className='marcarVerde'>sites visualmente atraentes, funcionais e eficazes</span>, levando em consideração as mudanças atuais da internet, e as preferências do seu público-alvo e as melhores práticas de SEO. 
              </p>

              <p>
              Meu objetivo é criar <span className='marcarVerde'>uma experiência de navegação intuitiva e envolvente, aumentando sua presença online e alcançando os resultados desejados.</span> 
              </p>

              <ul>

                <li><Link href={'https://instagram.com/danielglaseroficial'} target='_blank'><Image src="/svgs/square-instagram.svg" alt='' width={35} height={35}/></Link></li>
                
                <li><Link href={'https://be.net/daniel_gl'} target='_blank'><Image src="/svgs/square-behance.svg" alt='' width={35} height={35}/></Link></li>
                
                <li><Link href={'https://wa.me/5527999678371'} target='_blank'><Image src="/svgs/square-whatsapp.svg" alt='' width={35} height={35}/></Link></li>
              
              </ul>

              <p>
              Entre em contato para discutir seu projeto e começar a transformar suas ideias em realidade.
              </p>

              <ContactButton/>

            </main>

            <div><Image src="/imgs/dgl.jpg" alt={'Foto de Daniel_GLaser'} loading='lazy' width={395} height={395} quality={100}/></div>
          
          </section>
        </main>
        <footer style={{textAlign: 'center', padding: '25px'}}>
          by Daniel_GLaser
        </footer>
    </>
  )
}
