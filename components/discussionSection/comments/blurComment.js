import React from "react";

export default function BlurComment({ subject, author, comment }) {
  return (
    <div className="relative w-full h-40 my-3.5 border border-gray-border rounded shadow-comment font-quicksand py-4">
      <div className="absolute flex flex-col -z-10 w-full h-full top-0 left-0 pt-4 blur-sm">
        <div className="px-6 pb-4">
          <p className="font-bold text-orange-500 text-xl">{subject}</p>
          <p className="text-[#5C5C5C] text-sm">{author}</p>
          <p className="text-[#4D4D4D] my-2">{comment}</p>
        </div>
      </div>
      <div className="z-10 absolute bg-gray-bluropacity w-full h-full top-0 left-0 rounded shadow-comment flex flex-col justify-center items-center gap-y-2">
        <svg
          width="35"
          height="35"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z"
            fill="#707070"
          />
        </svg>
        <p className="text-[#707070] text-xl font-bold">
          Aguardando feedback dos autores
        </p>
        <a href="#" className="text-orange-400 underline text-lg">
          Editar tópico
        </a>
      </div>
    </div>
  );
}
