import React from "react";

export default function Reply({ replies }) {
  //Usei alguns ternários pra verificar se o comentário a mensagem é feita por um autor ou coAutor pra mudar o bg e ter o nome ao lado
  if (!replies) return <></>;
  return replies.map((e, idx) => {
    let bgcolor = e.author || e.coAuthor ? "bg-[#F8F8F8]" : "bg-white";
    return (
      <div
        key={idx}
        className={
          "flex flex-col border-t border-gray-border font-quicksand px-6 py-4 " +
          bgcolor
        }
      >
        <div className="flex flex-row justify-between">
          <p className="text-[#5C5C5C] font-bold">{e.name}</p>
          <div className="flex flex-row justify-center gap-x-5 mr-2">
            <p className="font-bold text-orange-500">
              {e.author ? "Autor" : e.coAuthor ? "Coautor" : ""}
            </p>
            {e.author || e.coAuthor ? (
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z"
                  fill="#ED7839"
                />
              </svg>
            ) : (
              <></>
            )}
          </div>
        </div>
        <p className="text-[#4D4D4D] my-2">{e.msg}</p>
      </div>
    );
  });
}
