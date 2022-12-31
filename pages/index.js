import Intro from "../components/Intro/Intro";

export default function Home() {
  return (
    <div className="h-[96vh] flex justify-between gap-x-3 select-none">
      <div className="w-64 ">
        <Intro />
      </div>
      <div className="w-9/12 bg-gray-700">
        cover pic
      </div>
      <div className="w-20 bg-gray-700">
        nav
      </div>
    </div>
  )
}