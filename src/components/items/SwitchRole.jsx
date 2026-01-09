import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const SwitchRole = () => {

    const initialRole = {
        student: false,
        sbo_admin: false,
        registrar_admin: false,
        super_admin: false,
    }

    const [show, setShow] = useState(false);
    const [roleMethod, setRoleMethod] = useState(initialRole);


    const handleShow = () => {
        setShow(!show)
    };

    return (
        <div>
            <div
                className="bg-white z-100 flex items-center justify-center space-x-2 border border-gray-300 w-full p-1 px-2 rounded-[10px] hover:bg-gray-200 transition"
                onClick={handleShow}
            >
                <h1 className="font-semibold md:text-md sm:text-sm lg:text-md">Switch Role</h1>
                <AiOutlineDown />
            </div>

            {show &&
                <div className="absolute right-34 rounded-xl w-50 p-0 py-1 m-2 shadow-lg bg-white shadow-gray-300 border border-gray-200 transition">
                    <h1 className="font-semibold px-4 py-3 w-full border-b border-b-gray-300">Switch Role</h1>
                    <div className="grid space-y-1 px-1 py-3 text-sm">
                        <div className={`w-full p-2 pl-4 rounded-lg hover:bg-gray-200 transition ${roleMethod.student && "selected"}`}
                            onClick={() => setRoleMethod({ ...initialRole, student: true })}
                        >
                            <button className="role_btn">Student</button>
                        </div>
                        <div className={`w-full p-2 pl-4 rounded-lg hover:bg-gray-200 transition ${roleMethod.sbo_admin && "selected"}`}
                            onClick={() => setRoleMethod({ ...initialRole, sbo_admin: true })}
                        >
                            <button className="role_btn bg-green-100 text-green-700">SBO Admin</button>
                        </div>
                        <div className={`w-full p-2 pl-4 rounded-lg hover:bg-gray-200 transition ${roleMethod.registrar_admin && "selected"}`}
                            onClick={() => setRoleMethod({ ...initialRole, registrar_admin: true })}
                        >
                            <button className="role_btn bg-purple-100 text-purple-700">Registrar Admin</button>
                        </div>
                        <div className={`w-full p-2 pl-4 rounded-lg hover:bg-gray-200 transition ${roleMethod.super_admin && "selected"}`}
                            onClick={() => setRoleMethod({ ...initialRole, super_admin: true })}
                        >
                            <button className="role_btn bg-red-100 text-red-700">Super Admin</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SwitchRole;