import { useState } from "react";
import { BsPerson } from "react-icons/bs";

const ProfileCard = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    };

    return (
        <div className="">
            <button
                className="font-semibold h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center"
                onClick={handleShow}
            >JD</button>

            {show &&
                <div className="absolute right-5 text-sm rounded-xl w-60 p-0 py-1 m-2 shadow-lg bg-white shadow-gray-300 border border-gray-200 transition">
                    <div className="w-full pb-3 px-3">
                        <h1 className="font-semibold text-md">John Doe</h1>
                        <p className="text-gray-500 text-sm">john.doe@student.edu</p>
                    </div>
                    <div className="flex flex-col px-3 mb-3 py-2 border-0 border-b border-t border-gray-300">
                        <div
                            className="flex items-center p-2 gap-3 rounded-lg hover:bg-gray-200 transition"
                            onClick={handleShow}
                        >
                            <BsPerson color="gray" className="person_icon"/>
                            <p>Profile</p>
                        </div>
                        <div
                            className="p-2 rounded-lg hover:bg-gray-200 transition"
                            onClick={handleShow}
                        >
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="p-3 pt-0">
                        <button
                            className="text-left p-2 w-full rounded-lg hover:bg-gray-200 transition"
                            onClick={handleShow}
                        >Log out</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileCard;