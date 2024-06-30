import React, { useRef, useState } from 'react'
import Sidebar from '../Sidebar'
import { FaCircleChevronLeft, FaUser } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import './Dashboard.css'
import Card from './Card'
import { FaCircleUser, FaUserCheck } from "react-icons/fa6";
import Pie from './Pie';
import { BsPercent } from 'react-icons/bs';
import { IoCalculatorSharp } from "react-icons/io5";
import { IoMdDocument } from 'react-icons/io';
import Table from './Table';

const Dashboard = () => {
  const sidebar = useRef();
  const icon = useRef();
  const [click, setClick] = useState(false)
  const handleClick = () => {
    if (click) {
      setClick(false);
      document.body.style.overflow = 'visible';
      sidebar.current.style.top = '-100%';
      icon.current.style.color='white'
    } else {
      setClick(true);
      document.body.style.overflow = 'hidden';
      sidebar.current.style.top = '0';
      icon.current.style.color='black'
    }
  };

  return (
    <>
      <div className="row">
        <div ref={sidebar} className="sie sticky-top col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <div className="top bg-voilet px-3 py-3">
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
            <h6 className="text-white m-0">Dashboard</h6>
            <h1 className="text-white my-5">Dashboard</h1>
          </div>
          <div className="row px-3 py-3 gap-2 mx-auto">
            <Card heading='Declaraciones realizadas' number={110} icon={<BsPercent size={27} color='white' />} />
            <Card heading='Contadores' number={55} bonusnum={10} icon={<IoCalculatorSharp size={27} color='white' />} />
            <Card heading='Supervisores' number={3} icon={<FaUserCheck size={27} color='white' />} />
            <Card heading='Usuarios' number={500} bonusnum={23} icon={<FaUser size={27} color='white' />} />
            <Card heading='Asesorias Legales' number={12} icon={<IoMdDocument size={27} color='white' />} />
          </div>
          <div className="pieChart py-3 px-5 card border-0 shadow rounded-2">
            <h5 className='text-li'>Reportes del mes</h5>
            <Pie />
          </div>
          <Table />
        </div>
      </div>
    </>
  )
}

export default Dashboard