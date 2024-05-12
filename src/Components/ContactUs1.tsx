// import React from 'react'

// export const ContactUs1 = () => {
//   return (
//     <img src="https://www.h1tags.com/wp-content/uploads/2024/02/imgpsh_fullsize_anim-2024-02-23T174029.616-1536x344.jpg" alt="" />
//   )
// }

// src/components/Contactus1.tsx
import React from 'react';
import './Contactus1.module.css'; // Assuming you might want specific styles for this component
import { ContactUs2 } from './ContactUs2';
import { Location } from './Location';
import { Stack } from '@chakra-ui/react';

const Contactus1: React.FC = () => {
  return (
    <div className="contactus-container" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <img src="https://www.h1tags.com/wp-content/uploads/2024/02/imgpsh_fullsize_anim-2024-02-23T174029.616-1536x344.jpg" alt="Contact Us " style={{ width: '100%', maxWidth: '100vw' }} />
    <Stack spacing={10}>
    <ContactUs2 />
      <Location />
    </Stack>
    </div>
  );
};

export default Contactus1;
