import { Stack } from "@chakra-ui/react";
import Style from "./Career.module.css";
import Bluebox from "./Bluebox";
import CustomButton from "./button";
import { useEffect, useState } from "react";

const Career = () => {
  let [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack spacing={2}>
        <div
          style={{
            backgroundImage:
              "url(https://convextech.com/wp-content/uploads/2022/07/hero-banner.png)",
            backgroundSize: "cover ",
            width: "100vw",
            height: "70vh",
            margin: "auto",
          }}
        >
          <div className={Style.career} style={{ margin: "auto" }}>
            <Bluebox />
            <div className={`animated-text ${animated ? "animated" : ""}`}>
              <p style={{ fontWeight: "400" }}>
                WORLD-CLASS PERFORMANCE SERVICES O HELP BRANDS GROW IN THE
                HYPERCONNECTED
              </p>
              <br />
              <h5>
                Imagine you don't need a degree, you don't need an office,
                <br /> you don't need a team, you don't need prior
                <br /> experience and yet you can learn, earn, achieve and
                <br /> accomplish far beyond your hopes and expectations.
              </h5>
              <br />
              <CustomButton/>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Career;
