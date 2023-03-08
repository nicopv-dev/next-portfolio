import { Project } from "@/types";
import Image from "next/legacy/image";

interface IProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: IProjectItemProps) {
  return (
    <div className="relative hover:cursor-pointer overflow-hidden rounded-lg">
      <div className="w-full h-96">
        <Image
          alt={project.title}
          src={project.imageUrl}
          layout="fill"
          objectFit="cover"
          className="rounded-lg scale-100 transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="absolute bottom-4 left-0 p-4">
        <p className="text-white/80 font-light text-sm">JavaScript</p>
        <h3 className="text-white font-bold text-xl">{project.title}</h3>
      </div>
    </div>
  );
}
