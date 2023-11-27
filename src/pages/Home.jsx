import { Link } from "react-router-dom";
import FotoPerfil1 from "../assets/Fotos_para_pagina_de_Myrna/Foto MC 2x2 para papeleta. MVC.jpeg";


const Home = () => {
  return (
    <div className="flex items-end min-h-screen justify-center h-full w-full">

      <img src={FotoPerfil1} className="rounded-full home-image"/>

    </div>
  )
}

export default Home