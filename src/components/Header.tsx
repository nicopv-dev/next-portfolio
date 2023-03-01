import { CV } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  IoSunnyOutline,
  IoChevronDownOutline,
  IoMenuOutline,
} from "react-icons/io5";

interface IHeaderProps {
  cv_link: string;
}

export default function Header({ cv_link }: IHeaderProps) {
  const router = useRouter();

  const goTo = () => {
    window.open(cv_link, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center">
      <div className="max-w-6xl w-full flex items-center justify-end sm:justify-between py-5 xs:py-10 px-5 xl:px-0">
        <h1 className="text-white uppercase font-bold hidden sm:block">
          Nicolas Pereira
        </h1>
        <ul className="hidden sm:flex items-center gap-3 sm:gap-5">
          <li>
            <button className="text-white p-2">
              <IoSunnyOutline className="w-5 h-5" />
            </button>
          </li>
          <li>
            <a
              href="#"
              className="text-white bg-gradient-to-r from-cyan-500 to-teal-400 py-2 px-4 rounded-md font-light"
            >
              Contacto
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={goTo}
              className="text-white p-2 rounded-md font-light flex items-center gap-1 border border-white/50"
            >
              <IoChevronDownOutline />
              CV
            </button>
          </li>
        </ul>
        <button type="button" className="block sm:hidden text-white p-2">
          <IoMenuOutline className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
