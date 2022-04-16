import React from "react";
import Button from "../buttons/button";

export default function Footer() {
  //vi que no figma o Footer era uma imagem, mas preferi fazer tudo na mão mesmo pra ficar melhor pro usuário dependendo da tela (não ficar comprimido, esticado, etc.)
  return (
    <footer className="flex flex-col lg:flex-row mb-16 pt-4 border-t border-gray-border">
      <div className="flex flex-col items-center text-[#341947] font-quicksand">
        <p className="font-bold text-8xl font-dmsans">Galoá</p>
        <div className="text-xl flex flex-row items-center">
          <div className="w-6 h-0.5 bg-[#341947]"></div>
          <p className="mx-2 font-base font-sans">anais e proceedings</p>
          <div className="w-6 h-0.5 bg-[#341947]"></div>
        </div>
        <Button style="rounded-lg bg-[#71478E] text-white p-2 px-5 font-normal hover:bg-[#341947] transition duration-500 w-full text-lg">
          Saiba mais
        </Button>
      </div>
      <div className="px-6 font-quicksand text-xl">
        <p className="my-4">
          <span className="font-bold text-[#696361]">
            Preservar a memória do evento e ampliar o acesso ao conhecimento
            científico
          </span>{" "}
          gerado em eventos é a razão de ser da plataforma Galoá Proceedings.
        </p>
        <p>
          Os trabalhos publicados aqui têm maior alcance e ficam disponíveis
          para toda a comunidade científica, mantendo acesa o debate científico
          fomentado pelos encontros e aumentando o impacto do evento.
        </p>
      </div>
    </footer>
  );
}
