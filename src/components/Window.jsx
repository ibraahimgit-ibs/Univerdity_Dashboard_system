import { useRecoilState } from "recoil";
import StudentWindow from "./items/window_items/StudentWindow";
import { roleMethodState } from "../atom/atom";

const Window = () => {
      const [roleMethod] = useRecoilState(roleMethodState);

  return (
    <div className="h-full w-full border-r border-r-gray-300 hidden md:block">
      <div>
        {roleMethod.student && <StudentWindow />}
      </div>
      <hr className="text-gray-300" />
    </div>
  );
};

export default Window;