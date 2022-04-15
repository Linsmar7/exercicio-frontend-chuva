import React, { useState } from "react";
import Button from "../buttons/button";
import PlusIcon from "./../../src/assets/plusIcon.svg";
import Icon1 from "./../../src/assets/icone1.svg";
import Icon2 from "./../../src/assets/icone2.svg";
import Icon3 from "./../../src/assets/icone3.svg";

export default function CreateMessage({ toggle }) {
  return (
    <div className="flex flex-col items-center border border-rose-border py-3.5 gap-y-7">
      <p className="text-orange-500 text-lg font-bold">
        Compartilhe suas ideias ou dúvidas com os autores!
      </p>
      <div className="flex">
        <img src={Icon1.src} />
        <img src={Icon2.src} />
        <img src={Icon3.src} />
      </div>
      <p className="text-sm text-[#595959]">
        Sabia que o maior estímulo no desenvolvimento científico e cultural é a
        curiosidade? Deixe seus questionamentos ou sugestões para o autor!
      </p>
      <Button
        onClick={() => toggle(true)}
        style="-mb-9 bg-gradient-to-b from-orange-300 to-orange-400 w-40 flex items-center gap-x-2 rounded-lg text-white p-2 px-5 font-semibold"
      >
        <img src={PlusIcon.src}></img>criar tópico
      </Button>
    </div>
  );
}
