import React, { useState } from "react";
import Button from "../buttons/button";

export default function DoneMessage({ toggle, emptyData }) {
  return (
    <div className="flex flex-col items-center border-b border-rose-border py-3.5 gap-y-7">
      <p className="text-orange-500 text-lg font-bold">
        Seu tópico foi enviado com sucesso! :D
      </p>
      <p className="font-quicksand text-[#595959]">
        Agradecemos por sua contribuição, uma notificação será enviada ao seu
        email assim que seu tópico for respondido!
      </p>
      <a href="#" className="text-orange-400 underline">
        Descubra outros trabalhos!
      </a>
      <Button
        onClick={() => (toggle(true), emptyData(false))}
        style="-mb-9 bg-gradient-to-b from-orange-300 to-orange-400 w-60 rounded-lg text-white p-2 px-5 font-semibold z-10"
      >
        criar novo tópico
      </Button>
    </div>
  );
}
