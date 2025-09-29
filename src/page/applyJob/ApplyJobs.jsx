import React, { useRef,useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplyJob, selectApplyJob } from "../../redux/feature/apply/ApplyJobSlice";
import { fetchFileUpload, selectFile } from "../../redux/feature/file/FileUpload";

export default function ApplyJobs({ openModal, setOpenModal, job_id, profileId }) {
  const dispatch = useDispatch();
  const responseApply = useSelector(selectApplyJob);
  const responseFile = useSelector(selectFile);
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [cvUploaded, setCvUploaded] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  // console.log("responseApply", responseApply);
  // console.log("responseFile", responseFile);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(fetchFileUpload(file));
      setCvUploaded(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Missing file.");
    }
  };

  const handleApplyJob = () => {
    if (cvUploaded) {
      // Try to get resumeId as integer from responseFile if available
      let resumeId = 1;
      if (responseFile && responseFile.resumeId) {
        resumeId = Number(responseFile.resumeId);
      }
      dispatch(fetchApplyJob({
        "Job-Id": job_id,
        resume: resumeId,
        profileId: profileId
      }));
      setApplySuccess(true);
      setTimeout(() => {
        setApplySuccess(false);
        setOpenModal(false);
      }, 2000);
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
            {!cvUploaded ? (
              <>
                <h3 className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
                  You have to create or upload CV first in order to apply for this job.
                </h3>
                {errorMessage && (
                  <p className="text-red-500 mb-4">{errorMessage}</p>
                )}
                <div className="flex justify-center gap-4">
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
              </>
            ) : applySuccess ? (
              <h3 className="mb-8 text-lg font-normal text-green-600">Application submitted successfully!</h3>
            ) : (
              <>
                <h3 className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
                  CV uploaded successfully! You can now apply for this job.
                </h3>
                <div className="flex justify-center gap-4">
                  <Button onClick={handleApplyJob}>
                    Apply
                  </Button>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}