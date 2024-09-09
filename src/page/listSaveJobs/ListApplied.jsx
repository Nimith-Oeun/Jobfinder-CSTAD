import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet'
import AppliedHeader from './components/AppliedHeader'
import DeleteApplied from './components/DeleteApplied'
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { HiTrash } from "react-icons/hi";
import { selectListApplied, fetchListApplied, fetchDeleteApplied } from "../../redux/feature/apply/ApplyJobSlice";

export default function ListApplied() {
  const responseListApplied = useSelector(selectListApplied)
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchListApplied());
  }, [dispatch])

  const handleDelete = async (id) => {
    await dispatch(fetchDeleteApplied(id));
    dispatch(fetchListApplied());
  }

  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Jobs_ID",
      selector: (row) => row.applied_job_id
      ,
    },
    {
      name: "User Name",
      selector: (row) => row.user.username,
    },
    {
      name: "Email",
      selector: (row) => row.user.email,
    },
    {
      name: "Apply For",
      selector: (row) => row.job.title,
    },
    {
      name: "Active",
      selector: (row) =>
        <div>
          <button onClick={() => { setOpenModal(true); setJobIdToDelete(row.applied_job_id); }} ><HiTrash className="w-7 h-auto text-red-600" /></button>
        </div>
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: '15px', fontWeight: 'mid', color: '#000',
      },
    },
  };
  return (
    <>
      <header className='pt-[80px]'>
        <Helmet>
          <title>List Applied / HR . Contact</title>
        </Helmet>
        <AppliedHeader />
      </header>
      <main className='w-[90%] my-[100px] mx-auto'>
        <section>
          <DataTable
            columns={columns}
            data={responseListApplied?.results}
            customStyles={customStyles} className="shadow-md"
            responsive
          />
        </section>
      </main>
      <DeleteApplied
        openModal={openModal}
        setOpenModal={setOpenModal}
      handleDelete={handleDelete}
      jobId={jobIdToDelete}
      />
    </>
  )
}
