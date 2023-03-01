import Link from "next/link";
import {
  IoHomeOutline,
  IoPersonSharp,
  IoStatsChart,
  IoFileTrayFullOutline,
} from "react-icons/io5";

export default function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full overflow-hidden z-50 p-10 flex justify-center">
      <div className="w-96 bg-black/20 backdrop-blur-2xl rounded-full text-white flex justify-between items-center h-16 shadow-sm transition-all ease-in-out duration-300 hover:shadow-lg hover:cursor-pointer">
        <Link href={"#"} className="px-8">
          <IoHomeOutline />
        </Link>
        <Link href={"#"} className="px-8">
          <IoPersonSharp />
        </Link>
        <Link href={"#"} className="px-8">
          <IoStatsChart />
        </Link>
        <Link href={"#"} className="px-8">
          <IoFileTrayFullOutline />
        </Link>
      </div>
    </nav>
  );
}
