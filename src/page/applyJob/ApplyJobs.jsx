import React from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch,useSelector } from "react-redux";
import { fetchApplyJob,selectApplyJob } from "../../redux/feature/apply/ApplyJobSlice";


export default function ApplyJobs({ openModal, setOpenModal, job_id }) {
  const dispatch = useDispatch();
  const responseApply = useSelector(selectApplyJob)
  console.log("responseApply", responseApply);
  return (
    <>
      <Modal
        show={openModal}
        size="lg"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <p className="font-medium text-xl mb-8">APPLYING JOBS</p>
            <h3 className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
            You have to create or upload CV first in order to apply for this job.
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  setOpenModal(false), 
                  console.log("id Jobs",job_id);
                  dispatch(fetchApplyJob({job_id:job_id}));
                }}
              >
                {"Apply"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
