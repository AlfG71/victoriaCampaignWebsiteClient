import { Link } from "react-router-dom";
import HomeImage from "../assets/Fotos_para_pagina_de_Myrna/IMG_7976 Medium.jpeg"
import FotoCandidata from "../assets/Fotos_para_pagina_de_Myrna/IMG_7966 Medium.jpeg";

// /assets/Fotos_para_pagina_de_Myrna/MVC-877874243.png
const Home = () => {
  return (
    <div id="home" className="bg-[url('src/assets/Fotos_para_pagina_de_Myrna/victor-e015e487be9999636f9ea6350ff28a8a-1200x800-876085745.jpeg')] bg-cover bg-center min-h-screen">

    {/* <img src={ HomeImage } alt="Foto de la candidata" className="rounded-full items-center justify-center relative w-22 h-22 top-1/2 left-1/3"/> */}
    {/* <img src={ FotoCandidata } class="inline" alt="Foto de la candidata"/> */}

    </div>
  )
}

export default Home