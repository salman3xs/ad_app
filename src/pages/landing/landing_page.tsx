import React, { FC } from "react";
import { Box, Button, List, Typography } from "@mui/material";
import Header from "../../common/header/header";

const headingStyle = {
  zIndex: 2,
  color: "white",
  fontWeight: "bold",
  mt: 20,
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
          position: "absolute",
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
            justifyContent: "space-around",
            alignItems: "center",
            mt: 5,
            p: 2,
            height: "50vh",
            width: "65vw",
            backgroundColor: "#ecf1f9",
            borderRadius: "30px 30px 30px 30px",
            overflowY: "hidden",
            overflowX: "visible",
            boxShadow: "0px 30px 50px 0px rgb(22 35 52 / 20%)",
            display: "flex",
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
      </Box>
    </div>
  );
};

export default LandingPage;
