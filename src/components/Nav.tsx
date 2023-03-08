import { Link } from "react-scroll";
import {
  IoHomeOutline,
  IoPersonSharp,
  IoStatsChart,
  IoFileTrayFullOutline,
} from "react-icons/io5";

export default function Nav() {
  return (
    <nav className="fixed top-0 right-0 h-screen overflow-hidden z-50 flex items-center pr-8">
      <div className="bg-transparent text-white flex flex-col gap-8">
        <Link
          to="home"
          smoth={"true"}
          spy={true}
          activeClass="text-primary"
          className="transition-all duration-300 ease-in-out hover:cursor-pointer p-2"
        >
          <IoHomeOutline />
        </Link>
        <Link
          to="info"
          smoth={"true"}
          spy={true}
          offset={-50}
          activeClass="text-primary"
          className="transition-all duration-300 ease-in-out hover:cursor-pointer p-2"
        >
          <IoPersonSharp />
        </Link>
        <Link
          to="experience"
          smoth={"true"}
          spy={true}
          offset={-50}
          activeClass="text-primary"
          className="transition-all duration-300 ease-in-out hover:cursor-pointer p-2"
        >
          <IoStatsChart />
        </Link>
        <Link
          to="projects"
          smoth={"true"}
          spy={true}
          offset={-50}
          activeClass="text-primary"
          className="transition-all duration-300 ease-in-out hover:cursor-pointer p-2"
        >
          <IoFileTrayFullOutline />
        </Link>
      </div>
    </nav>
  );
}
