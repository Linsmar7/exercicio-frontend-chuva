import React, { useState } from "react";
import Button from "../buttons/button";
import CreateMessage from "./create";
import DoneMessage from "./done";
import SendMessage from "./send";

export default function DiscussionSection() {
  const [createToSend, setCreateToSend] = useState(false);
  const [message, setMessage] = useState();
  return (
    <section className="flex flex-col mb-10">
      <p className="px-3.5 py-2.5 bg-rose-300 border border-gray-border text-xl font-medium text-gray-titleSection">
        Discussões
      </p>
      {createToSend ? (
        message ? (
          <DoneMessage toggle={setCreateToSend} emptyData={setMessage} />
        ) : (
          <SendMessage submit={setMessage} />
        )
      ) : (
        <CreateMessage toggle={setCreateToSend} />
      )}
      <div className="flex flex-col"></div>
    </section>
  );
}
