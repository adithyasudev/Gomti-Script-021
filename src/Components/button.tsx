import { Button } from "@chakra-ui/react";

const CustomButton = () => {
  return (
    <Button
      className="btn-16 custom-btn"
      border="none"
      color="black"
      width="130px"
      height="40px"
      borderRadius="5px"
      padding="10px 25px"
      fontFamily="'Lato', sans-serif"
      fontWeight="500"
   background="white"
      cursor="pointer"
      transition="all 0.3s ease"
      boxShadow="inset 2px 2px 2px 0px rgba(255,255,255,0.5), 7px 7px 20px 0px rgba(0,0,0,0.1), 4px 4px 5px 0px rgba(0,0,0,0.1)"
      position="relative"
      display="inline-block"
    //   _hover={{ color: "#fff" }}
      _active={{ top: "2px" }}
      sx={{
        "&:after": {
          content: '""',
          position: "absolute",
          width: 0,
          height: "100%",
          top: 0,
          left: 0,
          direction: "rtl",
          zIndex: -1,
          boxShadow:
            "-7px -7px 20px 0px rgba(255,255,255,0.9), -4px -4px 5px 0px rgba(255,255,255,0.9), 7px 7px 20px 0px rgba(0,0,0,0.02), 4px 4px 5px 0px rgba(0,0,0,0.01)",
          transition: "all 0.3s ease",
        },
        "&:hover:after": {
          left: "auto",
          right: 0,
          width: "100%",
        },
      }}
    >
      Click me
    </Button>
  );
};

export default CustomButton;
