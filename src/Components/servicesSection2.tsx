import { ReactNode } from 'react';
import useScrollAnimation from '../customHooks/animation';

const ServicesSectioninner2 = ({ children }: { children: ReactNode }): JSX.Element => {
  let isVisible = useScrollAnimation();
  return (
    <div className={`animated-text ${isVisible ? "animated" : ""}`} style={{ backgroundColor: "white", width: "230px", height: "auto", color: 'black', borderRadius: "10px", padding: "30px" }}>
      {children}
    </div>
  );
};

export default ServicesSectioninner2;
