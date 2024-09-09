import React, { useRef,useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplyJob, selectApplyJob } from "../../redux/feature/apply/ApplyJobSlice";
import { fetchFileUpload, selectFile } from "../../redux/feature/file/FileUpload";

export default function ApplyJobs({ openModal, setOpenModal, job_id }) {
  const dispatch = useDispatch();
  const responseApply = useSelector(selectApplyJob);
  const responseFile = useSelector(selectFile);
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  // console.log("responseApply", responseApply);
  // console.log("responseFile", responseFile);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      let formData = new FormData();
      formData.append("file", file);
      dispatch(fetchFileUpload(formData));
      console.log("File selected:", file);
      setErrorMessage("");
    }
  };

  const handleApplyJob = () => {
    if (responseFile?.data?.url) {
      dispatch(fetchApplyJob({ job_id: job_id, resume: responseFile.data.url }));
      setOpenModal(false);
      console.log("Job ID:", job_id);
      console.log("Resume URL:", responseFile.data.url);
    } else {
      setErrorMessage("Please upload a CV first.");
    }
  };

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
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <div className="flex justify-center gap-4">
              <Button onClick={handleApplyJob}>
                Apply
              </Button>
              <Button
                color="gray"
                onClick={() => fileInputRef.current.click()}
              >
                Upload CV
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}