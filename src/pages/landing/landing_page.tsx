import React, { FC } from "react";
import { Box, Button, List, Typography } from "@mui/material";
import Header from "../../common/header/header";

const headingStyle = {
  zIndex: 2,
  color: "white",
  fontWeight: "bold",
  mt: 20,
  fontSize: "2.75em",
};

const bodyStyle = { zIndex: 2, color: "white", mt: 5 };

const greyBodyStyle = { zIndex: 2, color: "grey", mt: 5 };

const orangeButtonStyle = {
  zIndex: 1,
  mt: 5,
  height: 75,
  width: 200,
  color: "black",
  borderWidth: 2,
  borderColor: "#FCBE46",
  borderRadius: 100,
  letterSpacing: 1,
  fontSize: 20,
  fontWeight: 700,
  textTransform: "uppercase",
  backgroundColor: "#FCBE46",
};

const whiteBox = {
  justifyContent: "space-around",
  alignItems: "center",
  mt: 5,
  p: 2,
  width: "70vw",
  backgroundColor: "#ecf1f9",
  borderRadius: "30px 30px 30px 30px",
  overflowY: "hidden",
  overflowX: "visible",
  boxShadow: "0px 30px 50px 0px rgb(22 35 52 / 20%)",
  display: "flex",
};
const smallWhiteBox = {
  ...whiteBox,
  width: "30vw",
  flexDirection: "column",
  heigth: "40vh",
  textAlign: "center",
  justifyContent: "space-between",
  p: 5,
};

const LandingPage: FC = (): JSX.Element => {
  return (
    <div>
      <Box
        sx={{
          overflow: "hidden",
          zIndex: 0,
          width: "100vw",
          height: "100vh",
          background:
            "linear-gradient(180deg,#122042 0%,#12289c 49%,#7600d2 100%)",
        }}
      >
        <Header />
        <Typography variant="h2" align="center" sx={headingStyle}>
          Turn your mobile apps <br /> into top earning hits.
        </Typography>
        <Typography variant="h5" sx={greyBodyStyle} align="center">
          Appodeal empowers mobile app developers and publishers of all sizes to
          establish
          <br />
          and scale profitable mobile app business through our growth platform.
        </Typography>
        <center>
          <Button variant="contained" sx={orangeButtonStyle}>
            GET STARTED
          </Button>
        </center>
        <Box
          sx={{
            overflow: "hidden",
            mt: 35,
            zIndex: 0,
            display: "block",
            position: "relative",
            backgroundColor: " #1F2126",
            width: "110vw",
            height:
              "clamp(360px,calc(20rem + (1100 - 360) * ((100vw - 480px) / (1422 - 480))),1100px)",
            left: "50%",
            transform: "translate(-50%,-30%)",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "#1f2126",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // position: "absolute",
        }}
      >
        <Box
          sx={{
            m: 5,
            height: "50vh",
            width: "75vw",
            justifyContent: "space-around",
            display: "flex",
            zIndex: 5,
          }}
        >
          <Box>
            <Typography variant="h2" style={headingStyle}>
              Bussiness
              <br />
              Intelligence
            </Typography>
            <Typography variant="h6" sx={bodyStyle}>
              Combine your User Acquistion and Product
              <br />
              analytics onto a single dashboard:
            </Typography>
            <ul style={{ color: "white" }}>
              <li>build customizable user cohorts,</li>
              <li>create UA events aligned with your app,</li>
              <li>and forecast your LTV.</li>
            </ul>
            <Box>
              <Button variant="contained" sx={{ ...orangeButtonStyle, mr: 2 }}>
                TRY DEMO
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ...orangeButtonStyle,
                  backgroundColor: "none",
                  color: "white",
                }}
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              mr: 100,
              height: "45vh",
              width: "40vw",
              borderRadius: "15px",
              boxShadow:
                "8.99045px 8.99045px 0px #fcbe46, 17.9809px 17.9809px 0px #fd7164",
              margin: "0 18px 18px 0",
            }}
          >
            <img
              width="100%"
              height="100%"
              src="https://appodeal.com/wp-content/uploads/2022/12/Index-page-dec-22-video-v2.webp"
            ></img>
          </Box>
        </Box>
        <Box
          sx={{
            ...whiteBox,
            height: "60vh",
          }}
        >
          <img
            height="70%"
            width="45%"
            src="	https://appodeal.com/wp-content/uploads/2021/09/main-biege-multi@2x.png"
            alt=""
          />
          <Box>
            <Typography
              variant="h2"
              sx={{ ...headingStyle, color: "black", mt: 0 }}
            >
              UA Campaign
              <br />
              Management
            </Typography>
            <Typography textAlign="start" sx={{ mt: 2 }}>
              Spend less time managing UA campaigns and
              <br />
              ad creatives. Analyze your results across apps ,ad
              <br /> channels, countries and site IDs performance <br />{" "}
              metrics.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "70vw",
            p: 5,
          }}
        >
          <Box sx={smallWhiteBox}>
            <svg
              width="80"
              height="81"
              viewBox="0 0 80 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2600_10090)">
                <path
                  d="M49.4226 48.104V57.3629C37.4402 56.2816 30.6483 65.0289 31.1992 76.045"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M81.7486 73.2449C83.6504 62.9926 75.0923 57.493 62.6627 57.2893L62.459 47.1728"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M45.7927 37.8614C45.1448 44.6396 47.7364 49.6377 55.4393 51.8286C63.1421 49.7061 65.8058 44.6396 65.1578 37.8614"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.3951 34.9609C49.5475 35.6665 54.0432 32.8439 56.6998 27.6926C58.0622 32.2794 61.6043 33.5496 65.9638 33.5496C73.9336 10.8274 37.695 10.1923 42.3951 34.9609Z"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <line
                  x1="30.0004"
                  y1="40.445"
                  x2="34.8004"
                  y2="40.445"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-linecap="round"
                ></line>
                <line
                  x1="29.9167"
                  y1="51.8984"
                  x2="35.0545"
                  y2="49.3294"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-linecap="round"
                ></line>
                <line
                  x1="1.6"
                  y1="-1.6"
                  x2="7.34427"
                  y2="-1.6"
                  transform="matrix(0.894427 0.447214 0.447214 -0.894427 29.2012 26.845)"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-linecap="round"
                ></line>
              </g>
              <rect
                x="4.04688"
                y="4.84503"
                width="71.5528"
                height="72"
                rx="4"
                stroke="#1F2126"
                stroke-width="3.2"
              ></rect>
              <circle
                cx="18.0008"
                cy="40.4449"
                r="5.6"
                stroke="#F3943D"
                stroke-width="3.2"
              ></circle>
              <path
                d="M13.5365 25.245L18.0008 17.3085L22.465 25.245H13.5365Z"
                stroke="#1D5CC5"
                stroke-width="3.2"
              ></path>
              <mask id="path-11-inside-1_2600_10090" fill="white">
                <rect
                  x="10.8008"
                  y="53.2449"
                  width="14.4"
                  height="14.4"
                  rx="1.6"
                ></rect>
              </mask>
              <rect
                x="10.8008"
                y="53.2449"
                width="14.4"
                height="14.4"
                rx="1.6"
                stroke="#E84039"
                stroke-width="6.4"
                mask="url(#path-11-inside-1_2600_10090)"
              ></rect>
              <defs>
                <clipPath id="clip0_2600_10090">
                  <rect
                    x="4.04688"
                    y="4.84503"
                    width="71.5528"
                    height="72"
                    rx="4"
                    fill="white"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <Typography
              variant="h2"
              sx={{ ...headingStyle, color: "black", mt: 0 }}
            >
              Creatives Management
            </Typography>
            <Typography>
              Automate your ad management and test thousands of creatives every
              week. Choose the best ads to accelerate your app's growth.
            </Typography>
          </Box>
          <Box sx={smallWhiteBox}>
            <svg
              width="80"
              height="81"
              viewBox="0 0 80 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2600_10090)">
                <path
                  d="M49.4226 48.104V57.3629C37.4402 56.2816 30.6483 65.0289 31.1992 76.045"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M81.7486 73.2449C83.6504 62.9926 75.0923 57.493 62.6627 57.2893L62.459 47.1728"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M45.7927 37.8614C45.1448 44.6396 47.7364 49.6377 55.4393 51.8286C63.1421 49.7061 65.8058 44.6396 65.1578 37.8614"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.3951 34.9609C49.5475 35.6665 54.0432 32.8439 56.6998 27.6926C58.0622 32.2794 61.6043 33.5496 65.9638 33.5496C73.9336 10.8274 37.695 10.1923 42.3951 34.9609Z"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-miterlimit="10"
                ></path>
                <line
                  x1="30.0004"
                  y1="40.445"
                  x2="34.8004"
                  y2="40.445"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-linecap="round"
                ></line>
                <line
                  x1="29.9167"
                  y1="51.8984"
                  x2="35.0545"
                  y2="49.3294"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-linecap="round"
                ></line>
                <line
                  x1="1.6"
                  y1="-1.6"
                  x2="7.34427"
                  y2="-1.6"
                  transform="matrix(0.894427 0.447214 0.447214 -0.894427 29.2012 26.845)"
                  stroke="#1F2126"
                  stroke-width="3.2"
                  stroke-linecap="round"
                ></line>
              </g>
              <rect
                x="4.04688"
                y="4.84503"
                width="71.5528"
                height="72"
                rx="4"
                stroke="#1F2126"
                stroke-width="3.2"
              ></rect>
              <circle
                cx="18.0008"
                cy="40.4449"
                r="5.6"
                stroke="#F3943D"
                stroke-width="3.2"
              ></circle>
              <path
                d="M13.5365 25.245L18.0008 17.3085L22.465 25.245H13.5365Z"
                stroke="#1D5CC5"
                stroke-width="3.2"
              ></path>
              <mask id="path-11-inside-1_2600_10090" fill="white">
                <rect
                  x="10.8008"
                  y="53.2449"
                  width="14.4"
                  height="14.4"
                  rx="1.6"
                ></rect>
              </mask>
              <rect
                x="10.8008"
                y="53.2449"
                width="14.4"
                height="14.4"
                rx="1.6"
                stroke="#E84039"
                stroke-width="6.4"
                mask="url(#path-11-inside-1_2600_10090)"
              ></rect>
              <defs>
                <clipPath id="clip0_2600_10090">
                  <rect
                    x="4.04688"
                    y="4.84503"
                    width="71.5528"
                    height="72"
                    rx="4"
                    fill="white"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <Typography
              variant="h2"
              sx={{ ...headingStyle, color: "black", mt: 0 }}
            >
              Bid Automation
            </Typography>
            <Typography>
              Bid manager automatically switches off campaigns with negative
              ROAS and lets you optimize your UA campaigns with target events
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          placeContent: "space-evenly",
          height: "50vh",
          width: "100vw",
          display: "flex",
          m: 10,
        }}
      >
        <Box>
          <Typography variant="h2" style={{ ...headingStyle, color: "black" }}>
            Unbiased App
            <br />
            Monetization
          </Typography>
          <Typography style={{ ...bodyStyle, color: "black" }}>
            📡 Sync your Monetization data with your User Acquisition & App
            Analytics.
            <br />
            📊 Run A/B tests to achieve the highest ad revenues and connect with
            the top ad networks.
            <br />
            🚀 Take full control of your ad setup, or automatize everything with
            our ad autopilot.
            <br />
          </Typography>

          <Box>
            <Button variant="contained" sx={{ ...orangeButtonStyle, mr: 2 }}>
              GET STARTED
            </Button>
            <Button
              variant="outlined"
              sx={{
                ...orangeButtonStyle,
                backgroundColor: "none",
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>
        <Box>
          <img
            width="100%"
            height="100%"
            src="https://appodeal.com/wp-content/uploads/2021/11/PHONE-MAP-BANNER.png"
          ></img>
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
