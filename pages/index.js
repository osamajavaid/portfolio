import Intro from "../components/Intro/Intro";

export default function Home() {
  return (
    <div className="h-screen flex justify-between m-3 overflow-x-hidden gap-x-3">
      <div className="w-1/5 ">
        <Intro />
      </div>
      <div className="w-9/12 bg-gray-700">
        cover pic
      </div>
      <div className="w-[5%] bg-gray-700">
        nav
      </div>
    </div>
  )
}