import { MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";

const GradeEntry_a = () => {
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-xl h-full w-full p-4 px-6">
      <div>
        <h1 className="font-semibold">Grade Entry System</h1>
        <p className="text-gray-500">Enter and manage student grades</p>
      </div>
      <div className="flex space-x-3">
        <div className="up_ex_divs"><MdOutlineFileUpload /> Bulk Upload</div>
        <div className="up_ex_divs"><MdOutlineFileDownload /> Export</div>
      </div>
    </div>
  )
}

export default GradeEntry_a;