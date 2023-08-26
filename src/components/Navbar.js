import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={{sm: "row", xs: "column"}}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        gap: { sm: "80px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          alt=""
          src={Logo}
          style={{
            width: "130px",
            height: "130px",
          }}
        />
      </Link>

      <Stack direction={{sm: "row", xs: "column"}} gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #dd2625",
          }}
        >
          Home
        </Link>
        <a
          href="/#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </a>
        <a href="/bmi"
         style={{
          textDecoration: "none",
          color: "#3A1212",
        }}>
          BMICalculator
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Stack } from "@mui/system";

// import Logo from "../assets/images/Logo.png";

// const Navbar = () => {
//   return (
//     <Stack
//       direction="row"
//       justifyContent="space-around"
//       alignItems="center" // align items to center
//       sx={{
//         gap: { sm: "80px", xs: "40px" },
//         mt: { sm: "32px", xs: "20px" },
//         justifyContent: "none",
//         px: "20px",
//       }}
//     >
//       <Link to="/">
//         <img
//           alt=""
//           src={Logo}
//           style={{
//             width: "130px",
//             height: "130px",
//           }}
//         />
//       </Link>

//       <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
//         <Link
//           to="/"
//           style={{
//             textDecoration: "none",
//             color: "#3A1212",
//             borderBottom: "3px solid #dd2625",
//           }}
//         >
//           Home
//         </Link>
//         <a
//           href="/#exercises"
//           style={{
//             textDecoration: "none",
//             color: "#3A1212",
//           }}
//         >
//           Exercises
//         </a>
//         <a href="/bmi"
//          style={{
//           textDecoration: "none",
//           color: "#3A1212",
//         }}>
//           BMICalculator
//         </a>
//       </Stack>
//     </Stack>
//   );
// };

// export default Navbar;

