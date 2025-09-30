
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AppliedHeader from './components/AppliedHeader';
import DeleteApplied from './components/DeleteApplied';
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { HiTrash, HiCheckCircle, HiOutlineDocumentText } from "react-icons/hi";
import { selectListApplied, fetchListApplied, fetchDeleteApplied } from "../../redux/feature/apply/ApplyJobSlice";
import { getAccessToken } from '../../lib/securLocalStorage';

export default function ListApplied() {
  const responseListApplied = useSelector(selectListApplied)
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      dispatch(fetchListApplied());
    }
  }, [dispatch])

  const handleDelete = async (id) => {
    await dispatch(fetchDeleteApplied(id));
    dispatch(fetchListApplied());
  }

  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      width: '60px',
      center: true,
      cell: (row, index) => (
        <span className="font-bold text-blue-600">{index + 1}</span>
      ),
    },
    {
      name: "Job Title",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <HiOutlineDocumentText className="w-5 h-5 text-indigo-500" />
          <span className="font-semibold text-gray-900">{row.title}</span>
        </div>
      ),
    },
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
      cell: (row) => (
        <span className="text-blue-700 font-medium">{row.company}</span>
      ),
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
      cell: (row) => (
        <span className="text-gray-500">{row.location}</span>
      ),
    },
    {
      name: "Status",
      cell: () => (
        <span className="inline-flex items-center gap-1 text-green-600 font-semibold"><HiCheckCircle className="w-4 h-4" /> Applied</span>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      width: '120px',
      center: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => { setOpenModal(true); setJobIdToDelete(row.jobId); }}
          className="p-2 rounded-full bg-red-50 hover:bg-red-100 transition-all"
          title="Delete"
        >
          {console.log(row)}
          <HiTrash className="w-5 h-5 text-red-600" />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      width: '90px',
      center: true,
    },
  ];

  const customStyles = {
    table: {
      style: {
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        overflow: 'hidden',
      },
    },
    headRow: {
      style: {
        background: 'linear-gradient(90deg, #e0e7ff 0%, #f0f9ff 100%)',
        fontWeight: 700,
        fontSize: '1.1rem',
        color: '#312e81',
        borderTopLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem',
      },
    },
    headCells: {
      style: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#3730a3',
        background: 'transparent',
      },
    },
    rows: {
      style: {
        fontSize: '1rem',
        color: '#22223b',
        background: 'transparent',
        minHeight: '56px',
        borderBottom: '1px solid #e0e7ff',
        transition: 'background 0.2s',
        '&:hover': {
          background: 'rgba(59,130,246,0.07)',
        },
      },
    },
    pagination: {
      style: {
        borderRadius: '0 0 1.5rem 1.5rem',
        background: 'rgba(255,255,255,0.7)',
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>My Applied Jobs | JobFinder Cambodia</title>
      </Helmet>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 px-2 overflow-x-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-4" data-aos="fade-up">
              <HiOutlineDocumentText className="w-5 h-5" />
              My Applied Jobs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">
              Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">Applications</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Here you can view all the jobs you have applied for. Stay updated on your application status and manage your job search journey with ease.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 md:p-10">
            <DataTable
              columns={columns}
              data={responseListApplied?.results}
              customStyles={customStyles}
              className="modern-applied-table"
              responsive
              highlightOnHover
              pointerOnHover
              noHeader={false}
              pagination
            />
          </div>
        </div>
        <DeleteApplied
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleDelete={handleDelete}
          jobId={jobIdToDelete}
        />
      </div>
    </>
  );
}
