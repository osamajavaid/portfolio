import { CgMenuRightAlt } from "react-icons/cg";
import Intro from "../components/Intro/Intro";
import Nav from "../components/Nav/Nav";

export default function Home() {

  return (
    <div className="h-[96vh] flex justify-between gap-x-3 select-none">
      <div className="w-64 ">
        <Intro />
      </div>
      <div className="w-9/12 bg-[#20202A] shadow-2xl">
        main
      </div>
      <div className="w-20 relative bg-[#20202A] shadow-2xl">
        <div className="bg-gray-800 flex items-center h-16 justify-center text-2xl ">
          <CgMenuRightAlt />
        </div>
        <Nav />
      </div>
    </div>
  )
}