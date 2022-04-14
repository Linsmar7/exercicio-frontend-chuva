import Button from "../buttons/button";
import DownloadIcon from "./../../src/assets/downloadIcon.svg";
import StarIcon from "./../../src/assets/starIcon.svg";
import DoiIcon from "./../../src/assets/doi.svg";

const details = {
  type: "Pôster",
  thematicAxis: "Alimentação e saúde (AS)",
  keywords: "Alimentos funcionais, alimentação escolar.",
  authors: [
    {
      name: "Galileo Galilei¹",
    },
    {
      name: "Berta Lange de Morretes²",
    },
    {
      name: "Isaac Newton³",
    },
    {
      name: "Cesar Lattes¹",
    },
    {
      name: "Stephen Hawking⁴",
    },
  ],
  sources: [
    {
      place: "¹Universidade Estadual de Campinas",
    },
    {
      place: "²Universidade de São Paulo",
    },
    {
      place: "³Instituto Nacional de Pesquisas Espaciais",
    },
    {
      place: "⁴Universidade Federal do Rio de Janeiro",
    },
  ],
};

export default function Content() {
  return (
    <section className="flex my-5 gap-x-2">
      <div className="flex flex-col w-10/12 mr-8">
        <h1 className="font-black text-xl text-orange-500 mb-5">
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
        </h1>
        <iframe
          width="100%"
          height="530"
          src="https://www.youtube.com/embed/uwmeH6Rnj2E"
        ></iframe>
      </div>
      <div className="flex flex-col w-3/12">
        <div className="flex flex-row justify-end gap-x-2">
          <Button>
            <a href="" download className="flex">
              <img src={DownloadIcon.src} className="mr-2 max-w-none" />
              Download
            </a>
          </Button>
          <Button>
            <a href="">
              <img src={StarIcon.src} className="max-w-none" />
            </a>
          </Button>
          <Button>
            <a href="">
              <img src={DoiIcon.src} className="max-w-none" />
            </a>
          </Button>
        </div>
        <p className="font-semibold text-lg self-end my-3 text-orange-500">
          COMO CITAR ESSE TRABALHO?
        </p>
        <div className="flex flex-col border border-[#ECECEC] w-10/12 self-end">
          <div className="w-full py-2.5 px-4 bg-[#FDF1EB] border border-[#ECECEC]">
            <p className="text-[#4E4E4E] font-semibold text-xl">Detalhes</p>
          </div>
          <div className="flex flex-col gap-y-1 font-quicksand font-sm text-sm text-[#5C5C5C] py-2.5 px-4">
            <p>
              Tipo de Apresentação:{" "}
              <span className="font-bold">{details.type}</span>
            </p>
            <p>
              Eixo temático:{" "}
              <span className="font-bold">{details.thematicAxis}</span>
            </p>
            <p>
              Palavras-chaves:
              <span className="font-bold">{details.keywords}</span>
            </p>
            <p className="font-bold mt-4">Autores:</p>
            {details.authors.map((e, idx) => (
              <p>{e.name}</p>
            ))}
            <div className="my-10">
              {details.sources.map((e, idx) => (
                <p className="opacity-60">{e.place}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
