'use client'
import Image from "next/image";
import styles from "./page.module.css";

import Header from "./Components/Header"
import FrontPage from "./Components/FrontPage";
import HomeSection from "./Components/HomeSection";
import { useEffect } from "react";

export default function Home() {

  const IngredientStyle = {
    'list-style-type': 'none'
  }

  const IngredientList = (
  <ul>
      <li style={IngredientStyle}>Tequila 1oz</li>
      <li style={IngredientStyle}>Licor de Frutilla 1oz</li>
      <li style={IngredientStyle}>Granadina 1oz</li>
      <li style={IngredientStyle}>Macerado de Moron</li>
      <li style={IngredientStyle}>(1 Cuchara)</li>
    </ul>
  )

  
          let screenWidth
  useEffect( () => {
          screenWidth = window.screen.width
          console.log(screenWidth);
          console.log("HOla");
          
          
          screenWidth < 700 ? console.log(true): console.log(false);
          
      }, [screenWidth])
  return (
    <div /*className={styles.page}*/>
      <Header/>
      
      <HomeSection 
        Title= "El Colo"
        imgSrc= '/trago_kralo.png'
        DescTrago= 'El Colo es un trago para los que les gusta experimentar y dejarse sorprender con lo inesperado. Para los aventureros y amantes de la cocina. Por eso utiliza un insumo muy inusual, el moron. Pero al mismo tiempo el Colo busca refrescar y traernos una sensacion de verano utilizando el licor de frutilla para darle su toque frutal. Finalmente con la base de Tequila promete levantarte en toda situacion de fiesta, sea un noche en un boliche o un mediodia en el caribe el Colo siempre esta dispuesto a traerte buenos momentos. '
        blubPosition= "left"
      />

      <HomeSection 
        Title= "Los Ingredientes"
        imgSrc= '/Insumos.png'
        DescTrago= {IngredientList}
        blubPosition= 'right' 
        largo={true}
      />

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
