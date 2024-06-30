import React from 'react';

const Card = ({ heading, number, bonusnum,icon }) => {
  return (
    <>
      <div className="card rounded-2 border-0 shadow col-lg-2 py-2 mx-auto cursor-pointer">
        <h6 className='text-secondary m-0 fw-normal'>{heading}</h6>
        <h3 className='fw-normal'>{number}</h3>
        <div className="d-flex justify-content-between align-items-center">
          {bonusnum && (
            <p className='text-secondary m-0 fw-normal fs-7'>
              <span className="text-li fw-normal">+{bonusnum}</span> Ultima semana
            </p>
          )}
          <div className="ms-auto bg-li rounded-5 p-2">
            {icon}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
