import React from 'react';
import { getAccessToken } from '../../../lib/securLocalStorage';
import { useNavigate } from 'react-router-dom';

function ApplyButton({ openModal, setOpenModal, id , setJob_id }) {
  const token = getAccessToken();
  const navigate = useNavigate();
  
  const handleClick = (id) => {
    if (!token) {
      navigate('/login');
    }
    setJob_id(id)
    setOpenModal(true);
  }
  return (
    <button
      onClick={()=>handleClick(id)}
      className="overflow-hidden gap-2.5 self-end px-3 py-4 mt-20 mr-12 text-xl font-medium text-sky-500 bg-blue-50 rounded-md border border-sky-500 border-solid min-h-[55px] max-md:mt-10 max-md:mr-2.5">
      Apply Now
    </button>
  );
}

export default ApplyButton;