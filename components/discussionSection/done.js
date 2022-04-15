import React, { useState } from "react";
import Button from "../buttons/button";

export default function DoneMessage({ toggle, emptyData }) {
  return (
    <div className="flex flex-col items-center border border-rose-border py-3.5 gap-y-7">
      <p className="text-orange-500 text-lg font-bold">RAAAAPAAAAAAAAIX</p>
      <p className="text-sm text-[#595959]">
        Sabia que o maior estímulo no desenvolvimento científico e cultural é a
        curiosidade? Deixe seus questionamentos ou sugestões para o autor!
      </p>
      <Button
        onClick={() => (toggle(true), emptyData(false))}
        style="-mb-9 bg-gradient-to-b from-orange-300 to-orange-400 w-40 flex items-center gap-x-2 rounded-lg text-white p-2 px-5 font-semibold"
      >
        criar novo tópico
      </Button>
    </div>
  );
}
