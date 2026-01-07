import StudentWindow from "./items/window_items/StudentWindow";

const Window = () => {

  return (
    <div className="h-full w-full border-r border-r-gray-300 hidden md:block">
      <div>
        <StudentWindow />
      </div>
      <hr className="text-gray-300" />
    </div>
  )
}

export default Window;