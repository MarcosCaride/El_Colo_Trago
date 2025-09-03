'use client'
import React, { useEffect } from 'react'

import './HomeSection.css'
import Image from "next/image";

const BlubStyle = {
    position: 'absolute',
    "z-index": "-3",
    top: "-3rem",
    left: '-5rem',
    height: "auto"
}

const BlubStyleMini = {
    position: 'absolute',
    "z-index": "-3",
    width: "300%",
    height: '125%',
    top: '-10%'
}

const BlubStyleRight = {
    position: 'absolute',
    "z-index": "-3",
    top: "-7rem",
    right: '-2rem'
}

const BottomDeco = {
    position: 'absolute',
    'z-index': '-2',
    bottom: '-7rem',
    right: '6rem'
}

const BottomDecoMini = {
    position: 'absolute',
    'z-index': '-2',
    bottom: '20%',
    width: '50%',
    height: 'auto'
}

const TopDeco = {
    position: 'absolute',
    'z-index': '-2',
    top: '2rem',
    right: '30%',
    width: '30%',
    height: 'auto'
}

const TopDecoMini = {
    position: 'absolute',
    'z-index': '-2',
    top: '20%',
    right: '20%',
    width: '20%',
    height: 'auto'
}

const ImgPrincipal = {
    width: '100%',
    height: 'auto'
}
let screenWidth

let blubVariable = screen.width < 700 ? "BlubStyleMini" : "BlubStyle"
console.log(blubVariable);


const HomeSection = ( {Title, imgSrc, DescTrago, blubPosition, largo} ) => {
    useEffect( () => {
        screenWidth = window.screen.width
        console.log(screenWidth);

        console.log(screen.width < 700 ? 'BottomDecoMini' : 'BottomDeco');
        
        
        screenWidth < 700 ? console.log(true): console.log(false);
        
    }, [screenWidth])
    
    let Blub
    if (blubPosition == "left") {
        Blub = "/Blub.png"
        return (
            <section>
                <div className='bodyTitle '>
                    <h3>{Title}</h3>
                    <Image 
                        id='Blub'
                        src={Blub}
                        alt='Fondo de la descripcion del trago'
                        width={(screen.width < 700) ? 100 : 550}
                        height={(screen.width < 700) ? 100 : 550}
                        style={ screen.width < 700 ? BlubStyleMini : BlubStyle }
                    />
                    <p id='DescTrago' >{DescTrago}</p>
                </div>
                <div id='Text'>
                    <Image
                        // className={styles.logo}
                        id=''
                        src={imgSrc}
                        alt="Imagen del trago El Colo"
                        width={500}
                        height={500}
                        style={ImgPrincipal}
                        priority
                    />
                    <Image 
                        src='/Frutillas.webp'
                        alt=''
                        width={350}
                        height={350}
                        style={ screen.width < 700 ? BottomDecoMini : BottomDeco }
                    />

                    <Image 
                        src='/Frutilla.webp'
                        alt=''
                        width={100}
                        height={100}
                        style={screen.width < 700 ? TopDecoMini : TopDeco}
                    />
                </div>
            </section>
        )
    }else{
        Blub = "/BlubRight.png"
        return (
            <section>
                <div id='Text' className={largo ? 'under' : '' }>
                    <Image
                        src={imgSrc}
                        style={ ImgPrincipal }
                        alt="Imagen del trago El Colo"
                        width={(screen.width < 700) ? 100 : 550}
                        height={(screen.width < 700) ? 100 : 550}
                        priority
                    />
                </div>
                <div className='bodyTitle positionRight'>
                    <h3 className={largo ? 'tooLong' : ''}>{Title}</h3>
                    <Image 
                        id='Blub'
                        src={Blub}
                        alt='Fondo de la descripcion del trago'
                        width={(screen.width < 700) ? 100 : 550}
                        height={(screen.width < 700) ? 100 : 550}
                        style={ screen.width < 700 ? BlubStyleMini : BlubStyle }
                    />
                    <p id='DescTrago' >{DescTrago}</p>
                </div>
            </section>
        )
    }
}

export default HomeSection