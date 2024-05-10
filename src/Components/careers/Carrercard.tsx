
// import Style from './carrercard.module.css';
// import { BackdropExample } from './careerapply';
// import { useState, useEffect } from 'react';

//  export const Carrercard = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const response = await fetch('https://gomti-script-021.onrender.com/jobs');
//       const data = await response.json();
//       setJobs(data);
//     };

//     fetchJobs();
//   }, []);

//   const handeApplyNow = (job) => {
//     setSelectedJob(job);
//   };

//   return (
//     <div className={Style.joblistings}>
//       <h1>Job Listings</h1>
//       <div className={Style.gridcontainer}>
//         {jobs.map((job) => (
//           <JobListing key={job.id} job={job} />
//         ))}
//       </div>
//       {selectedJob && <BackdropExample job={selectedJob} closeModal={closeModal} />} 
//     </div>
//   );
// };

// const JobListing = ({ job }) => (
//   <div className={Style.joblisting}>
//     <h2>{job.title}</h2>
//       <p className={Style.p2}>{job.type}</p>
//     <p className={Style.p1}>{job.description}</p>
//     {/* <a href="#" className={Style.applybutton} onClick={() => handeApplyNow(job)}>Apply Now</a> */}
//     <button className={Style.applybutton} onClick={() => handleApplyNow(job)}>Apply Now</button>
//   </div>
// );



import { useState, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import Style from './carrercard.module.css';

export const Carrercard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false); // State to track whether user has applied
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://gomti-script-021.onrender.com/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);

      }
    };

    fetchJobs();
  }, []);

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    onOpen(); 
  };

  const closeModal = () => {
    setSelectedJob(null);
    onClose();
    setApplied(false); 
  };

  const handleApply = () => {
    setTimeout(() => {
    
      alert('Your application has been submitted successfully!');
      
      setApplied(false);
      onClose();
    }, 1000);
  };
  

  return (
    <div className={Style.joblistings}>
      <h1>Job Listings</h1>
      <div className={Style.gridcontainer}>
        {jobs.map((job) => (
          <JobListing key={job.id} job={job} handleApplyNow={handleApplyNow} />
        ))}
      </div>

      {selectedJob && (
        <Modal  isCentered isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay 
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
           

          />
          <ModalContent w="70vw" className={Style.modalContent}>
            <ModalHeader className={Style.header} >Job Application for: {selectedJob.title}</ModalHeader>
            <ModalCloseButton w="0" className={Style.sideclose}  />
            <ModalBody >
            
              {applied ? (
                <p>Applied successfully! You will be redirected to the home page shortly.</p>
              ) : (
                <>
                  <h1 className={Style.modalp1}>{selectedJob.title}.</h1>
                  <p className={Style.p3}>{selectedJob.type}</p>
                  <p className={Style.p4}>Descriptions:{selectedJob.description}</p>
                  <p className={Style.requirement}>Requirements: {selectedJob.requirements.join(', ')}</p>

                  <Button  className={Style.button} onClick={handleApply}>Apply Now</Button>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button className={Style.close} onClick={closeModal}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};


const JobListing = ({ job, handleApplyNow }) => (
  <div className={Style.joblisting} key={job.id}>
    <h2>{job.title}</h2>
    <p className={Style.p2}>{job.type}</p>
    <p className={Style.p1}>{job.description}</p>
    <button className={Style.applybutton} onClick={() => handleApplyNow(job)}>Apply Now</button>
  </div>
);
