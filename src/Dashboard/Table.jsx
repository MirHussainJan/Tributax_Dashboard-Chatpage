import React from 'react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Table = () => {
    const data = [
        { name: 'Meghan Wright', regime: 'Profesional', users: 10, number: '2453-9028' },
        { name: 'Peggy Diaz', regime: 'Profesional', users: 8, number: '2851-1352' },
        { name: 'Rafael Howard', regime: 'Profesional', users: 10, number: '8084-7142' },
        { name: 'Beatrice Peters', regime: 'Profesional', users: 10, number: '7101-4047' },
        { name: 'Stacy Medina', regime: 'Profesional', users: 10, number: '9060-5442' },
        { name: 'Irma Lewis', regime: 'Profesional', users: 10, number: '9060-5442' },
        { name: 'Connie Gibson', regime: 'Profesional', users: 10, number: '2851-1352' },
        { name: 'Connie Gibson', regime: 'Pequeño Contribuyente', users: 10, number: '8084-7142' },
        { name: 'George Harvey', regime: 'Pequeño Contribuyente', users: 10, number: '7101-4047' },
        { name: 'Mia Ruiz', regime: 'Profesional', users: 10, number: '7101-4047' },
        { name: 'Austin Murphy', regime: 'Profesional', users: 10, number: 'N/A' },
        { name: 'Irma Lewis', regime: 'Pequeño Contribuyente', users: 8, number: '9060-5442' },
        { name: 'Irma Lewis', regime: 'Profesional', users: 10, number: '9060-5442' },
        { name: 'Connie Gibson', regime: 'Pequeño Contribuyente', users: 10, number: '8084-7142' },
    ];
    return (
        <>
            <div className="border-0 shadow my-3 rounded-2 px-5 py-2">
                <div className="top d-flex align-items-center justify-content-between">
                    <div className='left'>
                        <h5 className='text-secondary m-0'>Edna Castillo</h5>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <p className='fs-7 text-secondary m-0 special'>primero</p>
                        <GoChevronLeft className='cursor-pointer' />
                        <p className='Numbs bg-li m-0 px-3 py-1 rounded-pill'>1</p>
                        <p className='Numbs bg-li m-0 px-3 py-1 rounded-pill special'>2</p>
                        <p className='Numbs bg-li m-0 px-3 py-1 rounded-pill special'>3</p>
                        <GoChevronRight className='cursor-pointer' />
                        <p className='fs-7 text-secondary m-0 special'>ultimo</p>
                    </div>
                </div>
                <table className="table-secondary w-100 my-2 text-center">
                    <thead>
                        <tr className='bg-secondary-subtle text-secondary'>
                            <th className='border-top py-3'>NOMBRE</th>
                            <th className='border-top'>RÉGIMEN</th>
                            <th className='border-top'>USUARIOS</th>
                            <th className='border-top'>NÚMERO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className='border-top py-3 fw-bold'>{row.name}</td>
                                <td className='border-top text-secondary'>{row.regime}</td>
                                <td className='border-top text-secondary'>{row.users}</td>
                                <td className='border-top text-secondary'>{row.number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
