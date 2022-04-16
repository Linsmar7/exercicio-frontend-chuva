import React, { useState } from "react";
import Button from "../../buttons/button";
import MoreIcon from "./../../../src/assets/more.svg";
import Reply from "./reply";

export default function Comment({ subject, author, comment, allreplies }) {
  const [like, setLike] = useState(false);
  const [incLike, setIncLike] = useState(0);
  function toggleIncLike() {
    if (incLike == 1) setIncLike(0);
    else setIncLike(1);
  }
  const [openReplies, setOpenReplies] = useState(false);
  return (
    <div className="flex flex-col my-3.5 border border-gray-border rounded shadow-comment font-quicksand py-4 ">
      <div className="px-6 pb-4">
        <p className="font-bold text-orange-500 text-xl">{subject}</p>
        <p className="text-[#5C5C5C] text-sm">{author}</p>
        <p className="text-[#4D4D4D] my-2">{comment}</p>
        <div className="flex font-sans font-light text-[#757575] gap-x-4">
          <img
            src={MoreIcon.src}
            alt="Mais opções"
            className="hover:cursor-pointer"
          />
          <Button
            onClick={() => (setLike(!like), toggleIncLike())}
            style="rounded-sm bg-orange-500 text-white px-2 font-semibold hover:bg-orange-300 transition duration-500"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11.4414L5.15234 10.6758C4.1862 9.80078 3.48438 9.15365 3.04688 8.73438C2.60938 8.3151 2.11719 7.79557 1.57031 7.17578C1.04167 6.55599 0.677083 6 0.476562 5.50781C0.276042 4.9974 0.175781 4.47786 0.175781 3.94922C0.175781 3.05599 0.476562 2.29948 1.07812 1.67969C1.69792 1.0599 2.46354 0.75 3.375 0.75C4.43229 0.75 5.30729 1.16016 6 1.98047C6.69271 1.16016 7.56771 0.75 8.625 0.75C9.53646 0.75 10.293 1.0599 10.8945 1.67969C11.5143 2.29948 11.8242 3.05599 11.8242 3.94922C11.8242 4.66016 11.5872 5.39844 11.1133 6.16406C10.6393 6.92969 10.1198 7.59505 9.55469 8.16016C9.00781 8.72526 8.10547 9.57292 6.84766 10.7031L6 11.4414Z"
                style={{
                  fill: like ? "#ff1e00" : "white",
                  transition: "fill .4s ease",
                }}
              />
            </svg>
          </Button>
          <p>{incLike} like</p>
          <p
            onClick={() => setOpenReplies(!openReplies)}
            className="hover:cursor-pointer"
          >
            {allreplies ? allreplies.length : 0} resposta(s)
          </p>
        </div>
      </div>
      {openReplies ? <Reply replies={allreplies} /> : <></>}
    </div>
  );
}
