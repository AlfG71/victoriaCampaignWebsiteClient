import LOGOConNombre from "../assets/Fotos_para_pagina_de_Myrna/logo_nombre_de_Mryna.jpg"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-teal-500 p-6 w-full">

        <img src={ LOGOConNombre } alt="Foto del logo del movimiento" className="rounded-full w-24 h-14 top-1/2"/>

      <div className="flex flex-shrink-0 mr-6">

      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

        <div className="text-sm lg:flex-grow">

          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Campaña
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Prensa
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Eventos
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Podcast
          </a>
        </div>

        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white text-center border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 rounded-full w-24 h-14 top-1/2 flex items-center justify-center"
          >Donativo</a>
        </div>
      </div>

    </nav>
  );
}

export default Navbar