import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="min-h-screen text-white grid place-content-center">
      <div className="flex items-center flex-col xl:flex-row gap-8">
        <section className="w-full xl:w-3/5 flex flex-col gap-6 items-center sm:items-start">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h3 className="text-2xl">Hola!, mi nombre es</h3>
            <h1 className="text-6xl font-bold">Nicolas Pereira</h1>
            <h3 className="text-3xl font-semibold">
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
              Soy estudiante de la universidad de la Frontera de Temuco, Chile,
              estudio Ingenieria Informatica, estoy en mi ultimo año de
              formacion.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="py-2 px-6 rounded-md bg-gradient-to-r from-cyan-400 to-teal-400 shadow-sm"
            >
              Contacto
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link href={"https://github.com/nicopv-dev"} target="_blank">
              <AiFillGithub className="w-6 h-6" />
            </Link>
            <button type="button">
              <AiFillLinkedin className="w-6 h-6" />
            </button>
          </div>
        </section>
        <section className="grow">
          <Image
            alt="Nicolas Pereira"
            src={
              "https://cdn.pixabay.com/photo/2016/11/29/08/51/city-1868530_1280.jpg"
            }
            width={500}
            height={200}
            className="rounded-xl shadow-md"
          />
        </section>
      </div>
    </div>
  );
}
