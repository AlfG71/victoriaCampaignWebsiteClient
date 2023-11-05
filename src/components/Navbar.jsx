import MVCLogo from "../assets/Fotos_para_pagina_de_Myrna/el-logo-de-victoria-ciudadana_Autogiro-Arte-Actual.jpg"

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
      <img src={ MVCLogo } alt="Foto del logo del movimiento" className="rounded-full w-14 h-14 top-1/2"/>
        <span class="left-1/3 font-semibold text-xl tracking-tight">
          Myrna Conty 2024
        </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Campaña
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Prensa
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Eventos
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black text-lg hover:text-white mr-4 p-4"
          >
            Podcast
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Donativo</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar