import { Link } from "react-router-dom";
import FotoPerfil1 from "../assets/Fotos_para_pagina_de_Myrna/Foto MC 2x2 para papeleta. MVC.jpeg";
import FotoPerfilWhiteBckgrnd from "../assets/Fotos_para_pagina_de_Myrna/perfilMyrnaWhiteBckgrnd.jpeg"


const Home = () => {
  return (
    <div className="flex items-end h-screen justify-start h-full w-full bg-backgroundBlue">

      <img src={FotoPerfil1} className="rounded-full home-image max-w-full h-auto object-contain"/>

    </div>
  )
}

export default Home