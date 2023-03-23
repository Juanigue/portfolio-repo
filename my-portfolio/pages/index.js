import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
import Image from 'next/image';
import devjuani from '../public/juaniFoto.jpg';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import code from '../public/code.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Juan Ignacio Guerrero</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className="bg-gradient-to-r from-emerald-100 to-teal-100 px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-sans">Mi Portfolio</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Juan Ignacio Guerrero</h2>
          <h3 className="text-2xl py-2">Test Automation and Frontend Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Estudiante avanzado de licenciatura en Informatica y desarrollo de software en Universidad del Aconcagua, Mendoza, Argentina.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillMail />
        </div>
        <div className="flex justify-center mt-20 overflow-hidden">
          <Image className="rounded-full w-80" src={devjuani}/>
        </div>
      </section>
      
      <section>
        <div>
          <h3 className="text-3xl py-1 flex justify-center">Servicios que ofrezco</h3>
          <p className="text-md py-2 leading-8 text-gray-800 flex justify-center">
            Como programador frontend, ofrezco servicios de diseño y desarrollo de sitios web interactivos, atractivos y receptivos que se ajustan a las necesidades y objetivos de mis clientes.
            Como programador de test automation, ofrezco servicios para ayudar a garantizar la calidad del software mediante la automatización de pruebas, lo que puede reducir el tiempo y el costo de las pruebas manuales, mejorar la eficiencia de los equipos de desarrollo y aumentar la confianza en el software lanzado al mercado.
          </p>
        </div>
        <div>
          <div>
            <Image src={design} width={100} height={100}/>
            <h3>Diseño UX/UI</h3>
            <p>Creo una experiencia de usuario acorde a tu sitio</p>
            <h4>Herramientas de diseño que uso</h4>
            <Image src={code} width={100} height={100}/>
            <Image src={consulting} width={100} height={100}/>
          </div>
        </div>
      </section>
     </main>
    </>
  )
}
