
const Profile = () => {
    return (
        <div className="max-w-full min-w-full">
            <div className="space-y-3">
                <h1 className="text-2xl">Student Profile</h1>
                <p className="text-gray-500">Manage your personal information and account settings.</p>
            </div>

            <div className="mt-6 w-full grid md:grid-cols-1 sm:grid-cols-1 gap-7 lg:grid-cols-[1fr_1fr]">
                <div className="w-full h-108.75 relative border border-gray-300 rounded-lg p-5">
                    <div>
                        <h1 className="font-semibold">Personal Information</h1>
                        <p className="text-gray-500">Your basic academic and contact details</p>
                    </div>
                    <div className="text-sm grid gap-2 my-5">
                        <h1 className="font-semibold">Full Name</h1>
                        <p className="text-gray-500">John Doe</p>
                    </div>
                    <div className="text-sm grid gap-2 mb-5">
                        <h1 className="font-semibold">Student ID</h1>
                        <p className="text-gray-500">1</p>
                    </div>
                    <div className="text-sm grid gap-2 mb-5">
                        <h1 className="font-semibold">Email Address</h1>
                        <p className="text-gray-500">john.doe@student.edu</p>
                    </div>
                    <label className="font-semibold text-sm">Major</label>
                    <p className="mt-5 font-semibold text-sm">Academic Year</p>

                    <button className="bg-black absolute bottom-5 py-1 px-2 text-white rounded-md font-bold">Edit Profile</button>
                </div>

                <div className="w-full h-108.75 relative border border-gray-300 rounded-lg p-5">
                    <div>
                        <h1>Academic Summary</h1>
                        <p className="text-gray-500">Your current academic standing</p>
                    </div>
                    <div className="text-sm grid gap-2 my-5">
                        <h1 className="font-semibold">Overall GPA</h1>
                        <p className="text-gray-500">3.85</p>
                    </div>
                    <div className="text-sm grid gap-2 mb-5">
                        <h1 className="font-semibold">Credits Completed</h1>
                        <p className="text-gray-500">18 / 120</p>
                    </div>
                    <div className="text-sm grid gap-2 mb-5">
                        <h1 className="font-semibold">Expected Graduation</h1>
                        <p className="text-gray-500">May 2025</p>
                    </div>
                    <label className="font-semibold text-sm">Academic Status</label>
                    <p className="mt-5 font-semibold text-sm">Academic Year</p>

                    <button className="bg-black absolute bottom-5 py-1 px-2 text-[12px] text-white rounded-xl font-semibold">Good Standing</button>
                </div>
            </div>
        </div >
    )
}

export default Profile;