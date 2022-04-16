import React, { useState } from "react";
import Button from "../buttons/button";
import CreateMessage from "./create";
import DoneMessage from "./done";
import SendMessage from "./send";
import Comment from "./comments";
import BlurComment from "./comments/blurComment";

const allReplies = [
  {
    name: "Adriano da Silva",
    msg: "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.",
    author: true,
    coAuthor: false,
  },
  {
    name: "Carlos Henrique Santos",
    msg: `Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.
    Obrigada pela resposta, muito interessante o seu trabalho!`,
    author: false,
    coAuthor: false,
  },
  {
    name: "Carmila Ferreira Andrade",
    msg: `Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.

    Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
    author: false,
    coAuthor: true,
  },
  {
    name: "Ana Carolina",
    msg: `Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
    author: false,
    coAuthor: true,
  },
];

export default function DiscussionSection() {
  const [createToSend, setCreateToSend] = useState(false);
  const [message, setMessage] = useState();
  return (
    <section className="flex flex-col mb-10 border border-gray-border">
      <p className="px-3.5 py-2.5 bg-rose-300 text-xl font-medium text-gray-titleSection border-b border-gray-border">
        Discussões
      </p>
      <span className="px-3.5">
        {createToSend ? (
          message ? (
            <DoneMessage toggle={setCreateToSend} emptyData={setMessage} />
          ) : (
            <SendMessage submit={setMessage} />
          )
        ) : (
          <CreateMessage toggle={setCreateToSend} />
        )}
        <div className="flex flex-col pt-7">
          {message ? (
            <BlurComment
              subject={message.topic}
              author={message.author}
              comment={message.body}
            />
          ) : (
            <></>
          )}
          <Comment
            subject="Assunto da pergunta aparece aqui"
            author="Carlos Henrique Santos"
            comment="Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo..."
          />
          <Comment
            subject="Assunto da pergunta aparece aqui"
            author="Carlos Henrique Santos"
            comment="Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo..."
            allreplies={allReplies}
          />
        </div>
      </span>
    </section>
  );
}
