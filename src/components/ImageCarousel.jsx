'use client'

import { useState } from 'react';
import { Carousel } from 'flowbite-react';
import img1 from "../assets/Fotos_para_pagina_de_Myrna/de_noche_verde_relieve.jpg";
import img2 from "../assets/Fotos_para_pagina_de_Myrna/espiritu_navideño.jpg";
import img3 from '../assets/Fotos_para_pagina_de_Myrna/IMG_7966 Medium.jpeg'

const ImageCarousel = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={img1} alt='image1'/>
        <img src={img2} alt='image2'/>
        {/* <img src='../assets/Fotos_para_pagina_de_Myrna/IMG_6215 MC DEPONIENDO VIS PUB SENADO 2017 Medium.jpeg'/>
        <img src='../assets/Fotos_para_pagina_de_Myrna/protesta_a_LUMA.jpg'/> */}
      </Carousel>
    </div>
  )
}

export default ImageCarousel