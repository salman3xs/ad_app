import React, { FC } from "react";
import { Box, Typography, Link } from "@mui/material";
import SimpleMenu from "../menu";

const Header: FC = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100wh",
        height: 100,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", pt: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 119 173"
          height={100}
          width={100}
        >
          <rect
            fill="var(--logo-star-color, transparent)"
            x="24"
            y="69.9"
            width="72.5"
            height="72.5"
          ></rect>
          <path
            fill="var(--logo-color, #E84039)"
            fill-rule="evenodd"
            d="M20,46.62c-11.05,0-20,8.95-20,20v79c0,11.04,8.95,20,20,20h79 c11.05,0,20-8.96,20-20v-79c0-11.05-8.95-20-20-20H20z M70.19,94.01c-2.51-1.76-4.19-4.54-5.65-7.11c-4.75-8.47-5.65-8.4-10.54,0.41 c-0.04,0.08-0.09,0.15-0.13,0.23c-1.43,2.51-2.94,5.18-5.32,6.82c-2.51,1.69-5.72,2.44-8.72,2.98c-9.77,1.76-9.98,2.57-2.93,9.83 l0.05,0.05c2.01,2.09,4.22,4.38,5.12,7.14c0.98,2.85,0.7,6.03,0.28,8.94c-1.33,9.56-0.56,10.03,8.72,5.76 c2.72-1.29,5.65-2.58,8.66-2.58c3.07,0,6.14,1.22,8.86,2.51c9,4.2,9.7,3.66,8.38-6.23c-0.42-2.91-0.77-6.03,0.14-8.81 c0.98-2.85,3.14-5.29,5.24-7.39c6.84-6.98,6.56-7.79-3.56-9.62C75.78,96.38,72.63,95.77,70.19,94.01z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <Typography variant="h4" sx={{ color: "white", pt: 5 }}>
          Appodeal
        </Typography>
      </Box>
      <Box sx={{ display: "flex", pt: 5 }}>
        <Link href="#" underline="none">
          <Typography variant="h6" sx={{ color: "white", pt: 1.6, pr: 2 }}>
            Features
          </Typography>
        </Link>
        <SimpleMenu name={"Products"} />
        <SimpleMenu name={"Resources"} />
        <SimpleMenu name={"Company"} />
      </Box>
    </Box>
  );
};

export default Header;
