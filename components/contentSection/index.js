import React, { useState } from "react";
import Button from "../buttons/button";
import DownloadIcon from "./../../src/assets/downloadIcon.svg";
import CatLimitless from "./../../src/assets/catlimitless.jpg";
import AvatarVideo from "./../../src/assets/avatarOverlayVideo.svg";
import DoiIcon from "./../../src/assets/doi.svg";

//Array de objetos com os detalhes do trabalho
const details = {
  type: "Pôster",
  thematicAxis: "Alimentação e saúde (AS)",
  keywords: "Alimentos funcionais, alimentação escolar.",
  authors: [
    {
      name: "Galileo Galilei¹",
    },
    {
      name: "Berta Lange de Morretes²",
    },
    {
      name: "Isaac Newton³",
    },
    {
      name: "Cesar Lattes¹",
    },
    {
      name: "Stephen Hawking⁴",
    },
  ],
  sources: [
    {
      place: "¹Universidade Estadual de Campinas",
    },
    {
      place: "²Universidade de São Paulo",
    },
    {
      place: "³Instituto Nacional de Pesquisas Espaciais",
    },
    {
      place: "⁴Universidade Federal do Rio de Janeiro",
    },
  ],
};

export default function Content() {
  const [favorite, setFavorite] = useState(false); //hook pra trocar a cor da estrelina
  const [play, setPlay] = useState(false); //hook pra dar play no vídeo
  const url = play
    ? "https://www.youtube.com/embed/uwmeH6Rnj2E?autoplay=1"
    : "https://www.youtube.com/embed/uwmeH6Rnj2E";
  return (
    <section className="flex flex-col lg:flex-row mt-5 gap-x-2">
      <div className="flex flex-col lg:w-10/12 lg:mr-8">
        <h1 className="font-black text-xl text-orange-500 mb-5">
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
        </h1>
        <div
          className="relative w-full h-[530px]"
          onClick={() => setPlay(!play)}
        >
          <iframe
            width="100%"
            height="100%"
            src={url}
            className="absolute"
          ></iframe>
          <div className="absolute flex flex-col px-8 py-14 gap-y-44 sm:gap-y-72">
            <p className="font-black text-white text-2xl tracking-wider leading-6">
              Análise sensorial de preparações funcionais desenvolvidas para
              escolares entre 09 e 15 anos, do município de Campinas/SP
            </p>
            <div className="flex items-center gap-x-4">
              <img
                src={AvatarVideo.src}
                className="border border-orange-500 p-0.5 rounded-full"
              />
              <div className="text-white font-black text-xl">
                <p>Beatriz Christiane Melo</p>
                <p>FCA / Universidade Estadual de Campinas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-3/12">
        <div className="flex flex-row lg:justify-end justify-center lg:mt-0 mt-2 gap-x-2">
          <Button>
            <a href={CatLimitless.src} download className="flex font-medium">
              <img src={DownloadIcon.src} className="mr-2 max-w-none" />
              Download
            </a>
          </Button>
          <Button onClick={() => setFavorite(!favorite)}>
            {/* <img src={StarIcon.src} className="max-w-none text-black" /> */}
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51375 0.5625C8.70125 0.1875 9.00333 0 9.42 0C9.83667 0 10.1388 0.1875 10.3263 0.5625L12.3575 4.6875L16.92 5.375C17.3367 5.41667 17.6075 5.63542 17.7325 6.03125C17.8575 6.42708 17.7742 6.77083 17.4825 7.0625L14.17 10.2812L14.9513 14.8438C15.0138 15.2396 14.8783 15.5521 14.545 15.7812C14.2117 16.0312 13.8679 16.0625 13.5138 15.875L9.42 13.75L5.32625 15.875C4.97208 16.0833 4.62833 16.0625 4.295 15.8125C3.96167 15.5625 3.82625 15.2396 3.88875 14.8438L4.67 10.2812L1.3575 7.0625C1.06583 6.77083 0.9825 6.42708 1.1075 6.03125C1.2325 5.63542 1.50333 5.41667 1.92 5.375L6.4825 4.6875L8.51375 0.5625Z"
                style={{
                  fill: favorite ? "#ff1e00" : "white",
                  transition: "fill .4s ease",
                }}
              />
            </svg>
          </Button>
          <Button>
            <img src={DoiIcon.src} className="max-w-none" />
          </Button>
        </div>
        <p className="font-semibold text-lg lg:self-end self-center my-3 text-orange-500">
          COMO CITAR ESSE TRABALHO?
        </p>
        <div className="flex flex-col border border-gray-border w-10/12 lg:self-end self-center">
          <div className="w-full py-2.5 px-4 bg-rose-300 border-b border-gray-border">
            <p className="text-gray-titleSection font-semibold text-xl">
              Detalhes
            </p>
          </div>
          <div className="flex flex-col gap-y-1 font-quicksand font-sm text-sm text-[#5C5C5C] py-2.5 px-4">
            <p>
              Tipo de Apresentação:{" "}
              <span className="font-bold">{details.type}</span>
            </p>
            <p>
              Eixo temático:{" "}
              <span className="font-bold">{details.thematicAxis}</span>
            </p>
            <p>
              Palavras-chaves:
              <span className="font-bold">{details.keywords}</span>
            </p>
            <p className="font-bold mt-4">Autores:</p>
            {details.authors.map((e, idx) => (
              <p key={idx}>{e.name}</p>
            ))}
            <div className="my-10">
              {details.sources.map((e, idx) => (
                <p className="opacity-60" key={idx}>
                  {e.place}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
