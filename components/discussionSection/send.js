import React, { useState } from "react";
import Button from "../buttons/button";
import ItalicIcon from "./../../src/assets/italicIcon.svg";
import BoldIcon from "./../../src/assets/boldIcon.svg";

export default function SendMessage({ submit }) {
  const [topicValue, setTopicValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  function sendData() {
    let message = {
      topic: topicValue,
      body: bodyValue,
      author: "Nome Exemplo",
    };
    return message;
  }

  return (
    <div className="flex flex-col items-center border-b border-rose-border py-3.5 gap-y-7 font-quicksand">
      <p className="text-[#5C5C5C] text-lg">
        Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
      </p>
      <form id="topicForm" className="flex flex-col w-full px-3.5">
        <label for="assunto" className="text-orange-500 font-bold">
          Assunto
        </label>
        <input
          type="text"
          name="assunto"
          min="5"
          placeholder="Defina um tópico sucinto para notificar os autores..."
          className="border border-[#CCCCCC] py-2.5 pl-6 mb-3.5 text-[#4D4D4D]"
          value={topicValue}
          onInput={(e) => setTopicValue(e.target.value)}
        />
        <label for="conteudo" className="text-orange-500 font-bold">
          Conteúdo
        </label>
        <textarea
          name="conteudo"
          className="border border-[#CCCCCC]"
          rows="6"
          min="20"
          value={bodyValue}
          onInput={(e) => setBodyValue(e.target.value)}
        ></textarea>
        <div className="flex flex-row border border-[#CCCCCC] bg-[#EAF1F2] justify-between">
          <div className="flex items-center">
            <img
              src={BoldIcon.src}
              className="mx-7 w-6 h-6 hover:cursor-pointer"
            />
            <img
              src={ItalicIcon.src}
              className="w-6 h-6 hover:cursor-pointer"
            />
          </div>
          <Button
            onClick={() => submit(sendData())}
            style="bg-gradient-to-b from-orange-300 to-orange-400 w-64 text-white p-2 px-5 font-semibold self-end"
            type="submit"
            form="topicForm"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}
