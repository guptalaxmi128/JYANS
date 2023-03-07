import React from "react";
import {
  Paper,
  Typography,
  Button,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import QRCode from "react-qr-code";
import image from "./img/yoga.png";
import image1 from "./img/image 1.png";
import image2 from "./img/image 2.png";
import image3 from "./img/image 3.png";
import image4 from "./img/image4.jpg";

const Ticket = () => {
  return (
    <>
      <div
      style={{ marginLeft:"470px",marginTop:"40px"}}
      >
        <Typography variant="h5"  sx={{textDecorationLine:'underline',fontSize:'18px',fontFamily:'Poppins',}}>This Ticket will be your entry pass for the event</Typography>
      
      </div>
      <Paper
        elevation={3}
        sx={{
          width: "694px",
          height: "298px",
          // borderRadius: "6px",
          margin: "auto",
          marginTop: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "268px",
            width: "657px",
            position: "absolute",
            margin: "17px",
          }}
        >
          {/* <br/> */}
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper
                elevation={3}
                sx={{
                  width: "454px",
                  height: "205px",
                  marginLeft: "22px",
                  marginRight: "30px",
                  marginTop: "30px",
                  marginBottom: "30px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "50px",
                    position: "absolute",
                    margin: "18px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={image2}
                    style={{ width: "45px", height: "45px" }}
                    alt="info"
                  />
                  <img
                    src={image3}
                    style={{
                      width: "45px",
                      height: "45px",
                      marginLeft: "15px",
                    }}
                    alt="info"
                  />
                  <img
                    src={image4}
                    style={{
                      width: "45px",
                      height: "45px",
                      marginLeft: "15px",
                    }}
                    alt="info"
                  />
                  <img
                    src={image1}
                    style={{
                      width: "45px",
                      height: "45px",
                      marginLeft: "15px",
                    }}
                    alt="info"
                  />
                  {/* <div
                  style={{
                    width: "200px",
                    height: "25px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: "230px",
                    marginRight: "30px",
                    // backgroundColor: "pink",
                  }}
                >
                  <Typography
                    sx={{
                      width: "30px",
                      height: "24px",
                      fontSize: "8px",
                      textAilgn: "center",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                    }}
                  >
                    Section
                    <Typography sx={{ textAlign: "center", fontSize: "8px" }}>
                      11
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      width: "30px",
                      height: "24px",
                      fontSize: "8px",
                      textAlign: "center",
                    }}
                  >
                    Row
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "8px",
                        fontFamily: "Poppins",
                      }}
                    >
                      B
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      width: "30px",
                      height: "24px",
                      fontSize: "8px",
                      textAlign: "center",
                      fontFamily: "Poppins",
                    }}
                  >
                    Seat
                    <Typography sx={{ textAlign: "center", fontSize: "8px" }}>
                      14
                    </Typography>
                  </Typography>
                </div> */}
                </div>
                <Typography
                  sx={{
                    width: "250px",
                    height: "27px",
                    fontWeight: 500,
                    fontSize: "20px",
                    position: "absolute",
                    marginTop: "75px",
                    marginLeft: "18px",
                    //   textAlign: "center",
                    color: "black",
                    fontFamily: "Poppins",
                  }}
                >
                  {" "}
                  Yoga Mahotsav,2023
                </Typography>
                <div
                  style={{
                    marginLeft: "18px",
                    marginTop: "110px",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      width: "245px",
                      height: "21px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "black",
                    }}
                  >
                    13th March 2023 - 14th March 2023
                  </Typography>
                  <div
                    style={{
                      borderLeft: "2px solid #AAA8A8",
                      height: "20px",
                      marginLeft: "20px",
                    }}
                  />
                  <div
                    style={{
                      width: "98px",
                      height: "21px",
                      marginLeft: "25px",
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        textAlign: "center",
                        fontWeight: 400,
                        color: "black",
                      }}
                    >
                      07 AM - 07 PM
                    </Typography>
                  </div>
                </div>
                <Typography
                  sx={{
                    width: "200px",
                    height: "18px",
                    fontSize: "12px",
                    //   textAlign: "center",
                    marginLeft: "18px",
                    marginTop: "140px",
                    position: "absolute",
                    fontFamily: "Poppins",
                    color: "black",
                  }}
                >
                  Talkatora Indoor Stadium
                </Typography>
                <Typography
                  sx={{
                    width: "350px",
                    height: "12px",
                    fontSize: "8px",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    position: "absolute",
                    marginTop: "160px",
                    marginLeft: "14px",
                    color: "black",
                  }}
                >
                  J5GV+4PV, Talkatora Ln, Talkatora Garden, President's Estate,
                  New Delhi, Delhi 110004
                </Typography>
                <div
                  style={{
                    // borderLeft: "2px solid #AAA8A8",
                    border: "1px solid #AAA8A8",
                    width: "455px",
                    marginTop: "180px",
                    position: "absolute",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "8px",
                    marginTop: "185px",
                    fontWeight: "400",
                    position: "absolute",
                    marginLeft: "20px",
                    color: "black",
                  }}
                >
                  No Exchange of ticket will be made under any circumstances and
                  tickets are not transferable
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={3}
                sx={{
                  width: "135px",
                  height: "205px",
                  marginLeft: "50px",
                  marginRight: "30px",
                  marginTop: "30px",
                  marginBottom: "30px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    marginTop: "40px",
                    position: "absolute",
                    width: "39px",
                    height: "12px",
                    marginLeft: "48px",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Prakhar
                </Typography>
                <div
                  style={{
                    width: "76px",
                    height: "76px",
                    marginTop: "70px",
                    marginLeft: "30px",
                    position: "absolute",
                    border: "1px solid rgba(254, 210, 87, 0.33)",
                  }}
                >
                  <QRCode size={75} value="toturial.com" />
                </div>
                <div sx={{ width: "69px", height: "24px" }}>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontFamily: "Poppins",
                      position: "absolute",
                      marginTop: "160px",
                      marginLeft: "48px",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Ticket No.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontFamily: "Poppins",
                      position: "absolute",
                      marginTop: "170px",
                      marginLeft: "38px",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    MDNIY012345
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <div>  <Button
          sx={{
            width: "200px",
            height: "45px",
            backgroundColor: "#ff6500",
            marginTop: "20px",
            color: "#fff",
            marginLeft: "600px",
            fontSize: "16px",
          }}
        >
          Download Ticket
        </Button></div>
    </>
  );
};

export default Ticket;
