import { Languaje, Project } from "@/types";
import { IoSearchSharp } from "react-icons/io5";
import ProjectItem from "./ProjectItem";

const LANGUAJES: Languaje[] = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "Python" },
  { id: "3", name: "Go" },
  { id: "4", name: "Java" },
];

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Projecto Whatsapp Clone 2.0",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/10/26/18/19/architecture-7549184_640.jpg",
  },
  {
    id: "2",
    title: "Projecto React.js",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/12/25/04/05/living-room-7676789_640.jpg",
  },
  {
    id: "3",
    title: "Projecto Java (SpringBoot)",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/10/26/18/19/architecture-7549184_640.jpg",
  },
  {
    id: "4",
    title: "Servicio en Golang",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/12/25/04/05/living-room-7676789_640.jpg",
  },
  {
    id: "5",
    title: "Nuevo proyecto",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/01/23/23/20/altar-7739897_1280.jpg",
  },
];

export default function Projects() {
  return (
    <section className="mb-52 flex flex-col gap-8" id="projects">
      <div className="space-y-2">
        <h2 className="text-white text-2xl font-semibold text-center">
          Mis <span className="text-primary">Proyectos</span>
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          vitae minima quam distinctio laudantium, consectetur illo excepturi
          iure enim fugit, quod unde! Magnam, voluptatibus molestias culpa ab
          fugiat recusandae nisi.{" "}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="grow text-white flex items-center gap-12 flex-nowrap overflow-auto scrollbar-hide">
          <button type="button" className="text-primary text-sm">
            Todos
          </button>
          {LANGUAJES.map((item) => (
            <button
              key={item.id}
              type="button"
              className="text-sm transition-all duration-300 ease-in-out hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="w-full sm:w-2/6 bg-white divide-x flex items-center py-2 px-4 rounded-lg shadow-none transition-all duration-300 ease-in-out hover:shadow-lg">
          <input
            type="text"
            placeholder="Buscar proyecto"
            className="w-full text-sm focus:outline-none"
          />
          <button type="button" className="pl-2 py-1">
            <IoSearchSharp className="text-black " />
          </button>
        </div>
      </div>
      {/* PROJECTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
