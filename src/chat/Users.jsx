import React from 'react'
import { FaCircleUser } from "react-icons/fa6";

const users = ({ name, tag, time }) => {
    return (
        <>
            <div className="total d-flex gap-2 my-4 px-3">
                <FaCircleUser size={30} />
                <div className="right">
                    <div className="top d-flex align-items-center justify-content-between">
                        <h6 className='m-0'>{name}</h6>
                    </div>
                    <div className="bottom">
                        <p className="text-secondary fw-normal fs-7 m-0">
                            {tag}
                        </p>
                    </div>
                </div>
                <h6 className="fs-7 fw-normal text-secondary m-0">
                    {time}
                </h6>
            </div>
        </>
    )
}

export default users