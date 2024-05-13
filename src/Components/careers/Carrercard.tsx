import { useState, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import Style from './carrercard.module.css';

// Define the type for the job object
interface Job {
  id: number;
  title: string;
  type: string;
  description: string;
  requirements: string[];
}

export const Carrercard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null); // Specify the type as Job | null
  const [applied, setApplied] = useState(false);
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

  const handleApplyNow = (job: Job) => {
    setSelectedJob(job);
    onOpen(); 
  };

  const closeModal = () => {
    setSelectedJob(null); // Set selectedJob to null when closing the modal
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
      <h1 className={Style.joblist}>Job Listings</h1>
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
          <ModalContent w="1000vw" className={Style.modalContent}>
            <ModalHeader className={Style.header} >Job Application for: {selectedJob.title}</ModalHeader>
            <ModalCloseButton w="0" className={Style.sideclose}  />
            <ModalBody >
            
              {applied ? (
                <p>Applied successfully! You will be redirected to the home page shortly.</p>
              ) : (
                <>
                {/* <h1 className={Style.modalp1}>{selectedJob.title}.</h1> */}
                  <p className={Style.p3}><span className={Style.spa}>Type:</span>{selectedJob.type}</p>
                  <p className={Style.p4}><span className={Style.spa}>Descriptions:</span>{selectedJob.description}</p>
                  <p className={Style.requirement}><span className={Style.spa}>Requirments:</span>{selectedJob.requirements.join(', ')}</p>

                  
                </>
              )}
            </ModalBody>
            <ModalFooter className={Style.footer} >
            <Button  className={Style.button} onClick={handleApply}>Apply Now</Button>
              <Button className={Style.close} onClick={closeModal}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};


const JobListing = ({ job, handleApplyNow }: { job: Job; handleApplyNow: (job: Job) => void }) => (

  <div className={Style.joblisting} key={job.id}>
    <h2 className={Style.h2}>{job.title}</h2>
    <p className={Style.p2}><span className={Style.spa}>Type:</span>{job.type}</p>
    <p className={Style.p1}><span className={Style.spa}>Descriptions:</span>{job.description}</p>
    <button className={Style.applybutton} onClick={() => handleApplyNow(job)}>Apply Now</button>
  </div>
);

export default Carrercard;
