import { CV } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoSunnyOutline, IoChevronDownOutline } from "react-icons/io5";

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
      <div className="max-w-6xl w-full flex justify-between py-10 px-5 xl:px-0">
        <h1 className="text-white uppercase font-bold">Nicolas Pereira</h1>
        <ul className="flex items-center gap-3 sm:gap-5">
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
              className="text-white p-2 rounded-md font-light flex items-center border border-white/50"
            >
              <IoChevronDownOutline />
              CV
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
