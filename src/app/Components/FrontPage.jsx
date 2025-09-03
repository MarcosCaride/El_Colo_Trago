import React from 'react'

import './FrontPage.css'
import Image from "next/image";

const BlubStyle = {
    position: 'absolute',
    "z-index": "-3",
    top: "-5rem",
    left: '-5rem'
}

const FrontPage = () => {
  return (
    <section>
        <div className='bodyTitle'>
            <h3>El Colo</h3>
            <Image 
                id='Blub'
                src='/Blub.png'
                alt='Fonde de la descripcion del trago'
                width={500}
                height={500}
                style={ BlubStyle }
            />
            <p id='DescTrago' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quos doloremque incidunt repellat cum animi libero excepturi sint est earum atque perferendis, tenetur beatae aut? Nemo esse dolores quibusdam illum!</p>
        </div>
        <div id='Text'>
            <Image
                // className={styles.logo}
                src="/RedDrink.png"
                alt="Imagen del trago El Colo"
                width={500}
                height={500}
                priority
            />
        </div>
    </section>
  )
}

export default FrontPage