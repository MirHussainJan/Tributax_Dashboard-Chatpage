import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './sidebar.css';
import { MdOutlineAnalytics, MdOutlineModeEdit } from "react-icons/md";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
    const [chat, setChat] = useState(false);
    const handleClick = () => {
        if (chat) {
            setChat(false)
        }
        else {
            setChat(true)
        }
    };

    return (
        <div className="borderr px-3 pt-3">
            <div className="logo d-flex justify-content-center">
                <img width={40} src='./src/assets/Grupo 2845.svg' alt="" />
            </div>
            <ul className='list-unstyled d-flex flex-column gap-3 mt-4'>
                <li onClick={handleClick} className={`${chat ? '' : 'bg-li'}  rounded-1 py-2 px-2`}>
                    <Link to="/" className='text-decoration-none text-black d-flex gap-2 align-items-center'>
                        <MdOutlineAnalytics />Dashboard
                    </Link>
                </li>
                <li onClick={handleClick} className={`${chat ? 'bg-li' : ''}  rounded-1 py-2 px-2`}>
                    <Link to="/chat" className=' text-decoration-none text-black d-flex gap-2 align-items-center'>
                        <IoMdChatbubbles />Chat
                    </Link>
                </li>
                <li className='d-flex rounded-1 align-items-center py-2 px-2 gap-2'><FaUser />Usuarios</li>
                <li className='d-flex rounded-1 align-items-center py-2 px-2 gap-2'><MdOutlineModeEdit />Editar contenido</li>
                <li className='d-flex rounded-1 align-items-center py-2 px-2 gap-2'><IoAnalytics />Reportes</li>
                <li className='d-flex rounded-1 align-items-center py-2 px-2 gap-2'><FaUserEdit />Crear usuario</li>
                <li className='d-flex rounded-1 align-items-center py-2 px-2 gap-2'><CiLogout color='black' />Cerrar sesión</li>
            </ul>
        </div>
    );
};

export default Sidebar;