import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";

const Chatbox = () => {
    return (
        <>
            <div className="col-lg-8 rounded-2 shadow border-0 ">
                <div className="top px-3 py-3">
                    <div className="top-header d-flex justify-content-between align-items-center">
                        <div className="user-cred d-flex align-items-center gap-2">
                            <FaCircleUser size={30} />
                            <div className="online">
                                <p className="m-0">Mehgan Wright</p>
                                <p className="fs-7 m-0 text-secondary">Online</p>
                            </div>
                        </div>
                        <h6 className="text-li m-0">
                            Finalizer chat
                        </h6>
                    </div>
                    <hr />
                </div>
                <div className="upper">

                    <div className="d-flex gap-3">
                        <FaCircleUser size={30} />
                        <div className='d-flex w-25 message flex-column gap-1'>
                            <h6 className="fs-7 border bg-secondary-subtle rounded-1 px-2 py-2 m-0">El usuario Claire Stanley he presentado atrasos en su pago de impuesto</h6>
                            <p className='fs-8 ms-auto text-secondary'>Hoy 1:30 PM</p>
                        </div>
                    </div>
                    <div className="ms-autoo d-flex gap-3">
                        <FaCircleUser size={30} />
                        <div className='d-flex w-25 message flex-column gap-1'>
                            <h6 className="fs-7 border bg-li rounded-1 px-2 py-2 m-0">El usuario Claire Stanley he</h6>
                            <p className='fs-8 ms-auto text-secondary'>Hoy 1:30 PM</p>
                        </div>
                    </div>
                </div>
                <div className="input px-2 py-2 border d-flex align-items-center gap-2 rounded-1 margin">
                    <input type="text" className='w-100 border-0 fs-7 letter-spacing' placeholder='Escribe tu mensaje...' />
                    <FiPaperclip />
                </div>
            </div>
        </>
    )
}

export default Chatbox