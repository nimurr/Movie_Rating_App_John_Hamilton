'use client';
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { RiEyeCloseLine } from "react-icons/ri";


function EditProfile() {
    const [showUpdateButton, setShowUpdateButton] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                {
                    !showUpdateButton &&
                    <button onClick={() => setShowUpdateButton(!showUpdateButton)} className="absolute top-6 right-6 bg-secondary hover:bg-orange-900 p-3 rounded-lg">
                        <FiEdit />
                    </button>

                }
            </div>
            <Input label="User Name" value={"tasmia_sahabu"} />
            <Input label="Email" value="tasmiasahabu@gmail.com" />
            <label className="mt-3 block relative" htmlFor="">
                <Input label="Password" type={showPassword ? 'text' : 'password'} value={'1sd6sdf454'} />
                {
                    !showPassword ?
                        <RiEyeCloseLine onClick={() => setShowPassword(!showPassword)} size={20} className="absolute top-11 right-6 cursor-pointer" /> :
                        <IoEyeOutline onClick={() => setShowPassword(!showPassword)} size={22} className="absolute top-11 right-6 cursor-pointer" />
                }
            </label>
            <Input label="Contact Number" value="01712345678" />
            {
                showUpdateButton &&
                <button onClick={() => setShowUpdateButton(!showUpdateButton)} className="w-full bg-secondary text-white py-3 rounded-lg">Update</button>
            }
        </div>
    );
}

function Input({ label, type = 'text', value }) {
    return (
        <div>
            <label className="block text-sm text-gray-300 mb-2">{label}</label>
            <input
                type={type}
                defaultValue={value}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition"
            />
        </div>
    );
}

export default EditProfile;