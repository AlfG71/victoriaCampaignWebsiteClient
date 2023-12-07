import LOGOConNombre from "../assets/Fotos_para_pagina_de_Myrna/logo_nombre_de_Mryna.jpg"
import FotoPerfil1 from "../assets/Fotos_para_pagina_de_Myrna/Foto MC 2x2 para papeleta. MVC.jpeg"

const Navbar = () => {
  return (
    <nav className="flex fixed bg-campaignGreen px-10 py-8 w-full">
      {/* <div>
        <img src={FotoPerfil1} className="rounded-full home-image w-20"/>
      </div> */}

      <div>
        <img src={ LOGOConNombre } alt="Foto del logo del movimiento" className="rounded-full w-3200 h-20 top-1/2"/>
      </div>

      {/* <div className="flex flex-shrink-0 mr-6"> */}

      <div className="w-full block flex-grow justify-center lg:flex lg:items-center lg:w-auto">

        {/* <div className="text-sm lg:flex-grow"> */}

        <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-campaignYellow text-xl hover:text-black mr-4 p-4"
          >
            Quien es Myrna Conty
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-black mr-4 p-4"
          >
            Campaña
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-black mr-4 p-4"
          >
            Prensa
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-black mr-4 p-4"
          >
            Eventos
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-black mr-4 p-4"
          >
            Podcast
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-xl px-4 py-2 leading-none border bg-campaignYellow text-black text-center border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0 rounded-full w-24 h-14 top-1/2 flex items-center justify-center"
          >Donativo</a>
        </div>
      {/* </div> */}
      {/* </div> */}

    </nav>
  );
}

export default Navbar