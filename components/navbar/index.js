import React from "react";
import LogoEvento from "../../src/assets/logoevento.svg";

const links = [
  {
    name: "Apresentação",
    active: false,
  },
  {
    name: "Comitês",
    active: false,
  },
  {
    name: "Autores",
    active: false,
  },
  {
    name: "Eixos temáticos",
    active: false,
  },
  {
    name: "Trabalhos",
    active: true,
  },
  {
    name: "Contato",
    active: false,
  },
];

export default function Navbar({ open }) {
  // tem a prop open que é usada na página principal (/pages/index.js) pra poder abrir e fechar a navbar na versão mobile utilizando translate,
  // em telas grandes sempre se mantém como "lg:translate-x-0"
  return (
    <nav
      className={
        "transform lg:translate-x-0 " +
        open +
        " flex flex-col h-full w-56 fixed shadow-r transition duration-300 z-50 bg-white"
      }
    >
      <div className="bg-gradient-to-b from-orange-300 to-orange-400 h-20 flex items-center justify-center">
        <p className="text-white font-bold text-3xl">SLACA 2019</p>
      </div>
      <img src={LogoEvento.src} alt="Logo do Evento" />
      <ul>
        {links.map((e, idx) =>
          e.active ? ( //Se for ativo, adiciona a div com gradient ao lado esquerdo (como se fosse uma borda)
            <li
              key={idx}
              className="bg-rose-300 font-quicksand font-medium pl-6 py-1.5 text-[#725C5C] border-b-2 border-[#E7E7E7] relative"
            >
              <div className="bg-gradient-to-b from-orange-300 to-orange-400 w-1 h-full absolute inset-y-0 left-0"></div>
              <a className="ml-1" href="">
                {e.name}
              </a>
            </li>
          ) : (
            <li
              key={idx}
              className="hover:bg-rose-300 font-quicksand font-medium pl-6 py-1.5 text-[#725C5C] border-b-2 border-[#E7E7E7] bg-white"
            >
              <a href="">{e.name}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
