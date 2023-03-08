import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";

interface IBannerProps {
  university: string;
}

export default function Banner({ university }: IBannerProps) {
  return (
    <section className="min-h-[80vh] text-white grid place-content-center">
      <div className="flex items-center flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-3/5 flex flex-col gap-6 items-center sm:items-start">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h3 className="text-lg sm:text-2xl text-white/80">
              Hola!, mi nombre es
            </h3>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl font-bold">
              Nicolas <span className="text-primary">Pereira</span>
            </h1>
            <h3 className="text-lg xs:text-xl sm:text-3xl flex flex-col items-center sm:flex-row sm:items-start sm:gap-2 font-semibold">
              tengo experiencia en{" "}
              <span className="text-primary uppercase">
                <Typewriter
                  words={[
                    "Desarrollo Web",
                    "Frontend",
                    "Backend",
                    "AWS",
                    "Base de datos",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p className="text-center sm:text-left">
              Soy estudiante de Ingenieria Informatica de la{" "}
              <a href={university} className="underline" target={"_blank"}>
                Universidad de la Frontera
              </a>{" "}
              de Temuco, Chile, estoy en mi ultimo año de formacion.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="py-2 px-6 rounded-md bg-gradient-to-r from-cyan-400 to-teal-400 shadow-sm"
            >
              Más información
            </button>
          </div>
          <div className="flex items-center gap-4">
            <ButtonIcon
              link={"https://github.com/nicopv-dev"}
              icon={<AiFillGithub className="w-6 h-6" />}
            />
            <ButtonIcon
              link={"https://github.com/nicopv-dev"}
              icon={<AiFillLinkedin className="w-6 h-6" />}
            />
          </div>
        </div>
        <div className="grow">
          <Image
            alt="Nicolas Pereira"
            src={
              "https://cdn.pixabay.com/photo/2016/11/29/08/51/city-1868530_1280.jpg"
            }
            width={500}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
