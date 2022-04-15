import Avatar from "./../../src/assets/avatar.svg";

export default function Header() {
  const options = [
    { value: "ptbr", label: "PT-BR" },
    { value: "eng", label: "ENG" },
  ];
  return (
    <header className="flex flex-col lg:flex-row items-center bg-rose-300 w-full pr-14 lg:pr-0 lg:pl-56">
      <div className="flex flex-col text-[#725C5C] lg:mr-28 lg:pl-9">
        <p className="text-sm lg:text-base">
          Anais do Simpósio Latino Americano de Ciências de Alimentos{" "}
        </p>
        <h1 className="text-lg lg:text-2xl">
          Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
        </h1>
        <p className="text-sm lg:text-base">ISSN: 1234-5678</p>
      </div>
      <div className="flex flex-row items-center pl-9 lg:pl-0 ml-auto mr-11">
        <select className="selectMenu">
          <option>PT, BR</option>
          <option>ENG</option>
        </select>
        <div className="flex flex-col font-quicksand text-[#333333]">
          <p className="text-right text-sm lg:text-base">Bem vindo!</p>
          <p className="text-xs lg:text-base">alguem12@galoascience.com</p>
        </div>
        <div className="relative lg:pl-0 lg:w-auto pl-2 w-10">
          <img
            className="ml-1.5 border rounded-3xl lg:rounded-2xl object-cover w-8 h-8 lg:w-9 lg:h-9"
            src={Avatar.src}
          />
          <span className="absolute bg-[#F85959] px-1 rounded-2xl -top-1 -right-1 text-white text-xs font-bold">
            2
          </span>
        </div>
      </div>
    </header>
  );
}
