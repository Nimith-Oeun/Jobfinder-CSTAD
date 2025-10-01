import React, { useEffect, useRef,useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplyJob, fetchGetResume, selectApplyJob, selectResume } from "../../redux/feature/apply/ApplyJobSlice";
import { fetchPostResume } from "../../redux/feature/apply/ApplyJobSlice";
import { getAccessToken } from "../../lib/securLocalStorage";

export default function ApplyJobs({ openModal, setOpenModal, job_id, profileId }) {
  const [applyError, setApplyError] = useState(false);
  const dispatch = useDispatch();
  const responseApply = useSelector(selectApplyJob);
  const resumeResponse = useSelector(selectResume);
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [cvUploaded, setCvUploaded] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  // console.log("responseApply", responseApply);
  // console.log("responseFile", responseFile);

  useEffect(() => {
    const token = getAccessToken();
  if (!resumeResponse || !resumeResponse.responeData) {
    if (token) {
      dispatch(fetchGetResume());
    }
  }
}, [dispatch, resumeResponse]);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(fetchPostResume(file));
      setCvUploaded(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Missing file.");
    }
  }

  const handleApplyJob = () => {
    const token = getAccessToken();
    if(token){
      if (cvUploaded && resumeResponse && resumeResponse.responeData.id) {
        const resumeId = resumeResponse.responeData.id;
        console.log("resumeId", resumeId);
        let jobIdInt = Number(job_id);
        if (isNaN(jobIdInt)) {
          jobIdInt = 0; // fallback if job_id is a UUID
        }
        dispatch(fetchApplyJob({
          "Job-Id": jobIdInt,
          "resume-Id": resumeId,
        }))
          .unwrap()
          .then((res) => {
            res.errorCode === 400?setApplyError(true):setApplySuccess(true);
            setTimeout(() => {
              setApplySuccess(false);
              setOpenModal(false);
            }, 2000);
          })
          .catch((err) => {
            setApplyError("Application failed: " + (err?.message || "Unknown error"));
          });
      } else {
        setErrorMessage("Please upload a CV first.");
      }
    } else {
      Navigate('/login');
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
              <h3 className="mb-8 text-lg font-normal text-green-600">
                Application submitted successfully!
              </h3>
            ) : applyError || (responseApply?.errorCode === 400) ? (
              <h3 className="mb-8 text-lg font-normal text-red-600">
                {applyError ||
                  responseApply?.message ||
                  "You have already applied for this position."}
              </h3>
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