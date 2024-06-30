import React, { useRef, useState } from 'react'
import Sidebar from '../Sidebar'
import Users from './Users'
import { FaCircleChevronLeft, FaUser, FaCircleUser } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import './Chat.css'
import Chatbox from './Chatbox';

const Chat = () => {
    const users = [
        {
            name: "Mehgan Wright",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        },
        {
            name: "Peggy Díaz",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        },
        {
            name: "Rafael Howard",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        },
        {
            name: "Beatrice Peters",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        },
        {
            name: "Stacy Medina",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        },
        {
            name: "Irma Lewis",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        },
        {
            name: "Connie Gibson",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        },
        {
            name: "George Harvey",
            tag: "El Usuario Claire Stanley ha prese...",
            time: "10:32 AM"
        }
    ];
    const sidebar = useRef();
    const icon = useRef();
    const [click, setClick] = useState(false)
    const handleClick = () => {
        if (click) {
            setClick(false);
            document.body.style.overflow = 'visible';
            sidebar.current.style.top = '-100%';
            icon.current.style.color = 'white'
        } else {
            setClick(true);
            document.body.style.overflow = 'hidden';
            sidebar.current.style.top = '0';
            icon.current.style.color = 'black'
        }
    };
    return (
        <>
            <div className="row">
                <div ref={sidebar} className="sie sticky-top col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    <div className="top bg-voilet px-3 py-3 mb-3">
                        <div className="top-header d-flex justify-content-between align-items-center">
                            <FaCircleChevronLeft color='white' size={27} />
                            <div className="user-cred d-flex align-items-center gap-2">
                                <GoBellFill color='white' size={15} />
                                <FaCircleUser color='white' size={27} />
                                <p className="text-white m-0">Bievenido, Harvey Romero</p>
                            </div>
                            <i ref={icon} onClick={handleClick} size={20} className={`${click ? 'bi bi-x-lg text-black' : 'bi bi-list text-white'} fs-4 menu-icon cursor-pointer`}></i>
                        </div>
                        <hr />
                        <h6 className="text-white m-0">Chat</h6>
                    </div>
                    <div className="row pe-3">
                        <div className="col-lg-4">
                            <div className="input px-2 py-2 border d-flex align-items-center gap-2 rounded-1">
                                <CiSearch size={20} />
                                <input type="text" className='w-100 border-0 fs-7 letter-spacing' placeholder='Busca chat, personas o documentos' />
                            </div>
                            <div className="card border-0 h-100 shadow px-3 py-2 my-2">
                                <div className="principal d-flex align-items-center gap-0">
                                    <IoMdArrowDropdown size={20} className='text-li' />
                                    <h6 className="text-li m-0">Principal</h6>
                                </div>
                                <div className="users mx-auto">
                                    {users.map((user, index) => (
                                        index === 3 ? (
                                            <div className="principal d-flex align-items-center gap-0 my-2" key={index}>
                                                <IoMdArrowDropdown size={20} className='text-li' />
                                                <h6 className="text-li m-0">General</h6>
                                            </div>
                                        ) : (
                                            <Users key={index} name={user.name} time={user.time} tag={user.tag} />
                                        )
                                    ))}

                                </div>
                            </div>
                        </div>
                        <Chatbox />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Chat