import { Link } from "react-router-dom";
import HomeImage from "../assets/Fotos_para_pagina_de_Myrna/IMG_7976 Medium.jpeg"
import FotoCandidata from "../assets/Fotos_para_pagina_de_Myrna/IMG_7966 Medium.jpeg";
import FotoPerfil1 from "../assets/Fotos_para_pagina_de_Myrna/Foto MC 2x2 para papeleta. MVC.jpeg";

const Home = () => {
  return (
    <div id="home">

      <img src={FotoPerfil1} className="rounded-full home-image"/>

    </div>
  )
}

export default Home