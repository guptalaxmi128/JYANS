import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, Typography, Button, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import image from "../img/yoga-mahotsav1.jpg";
import imageyoga from "../img/yoga.png";
import image1 from "../img/image 1.png";
import image2 from "../img/image 2.png";
import image3 from "../img/image 3.png";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import html2pdf from "html2pdf.js";
import "./Registration.css";
import axios from "axios";
import Ticket from "../Ticket";
import close from "../img/close.png";
import { Link } from "react-router-dom";

const yogaCenters = [
  { id: 1, name: "Adi Yogi Parameshwara Yoga Foundation (IYTA)" },
  { id: 2, name: "Adi Yogi Parameshwara Yoga Foundation IYTA 7" },
  { id: 3, name: "Aditya Yoga Vidyalaya, TYTCC - Saroor Nagar - HYD" },
  { id: 4, name: "Aditya YOGSHALA" },
  { id: 5, name: "ADIYOGI PARAMESWARA YOGA FOUNDATION (IYTA)" },
  { id: 6, name: "Bodhi Dharma Yoga & Health Association (IYTA)" },
  { id: 7, name: "PRAGYA YOGA CENTRE - KAVURI HILLS" },
  { id: 8, name: "BHARATIYA YOG SANSTHAN ,HYD (WEST) VASISTA ZONE" },
  { id: 9, name: "BHARATIYA YOG SANSTHAN HYD (WEST) -01 BHEESHMA ZONE" },
  { id: 10, name: "BHARATIYA YOG SANSTHAN HYD (WEST) DIST-01 AGASTYA ZONE" },
  { id: 11, name: "CHANIKYA YOGA FOUNDATION -1" },
  { id: 12, name: "CHANIKYA YOGA FOUNDATION - 2" },
  { id: 13, name: "CHANIKYA YOGA FOUNDATION - 3" },
  { id: 14, name: "Divyrshi Yoga Sadhana" },
  { id: 15, name: "Domnic's Yoga Kendra" },
  { id: 16, name: "JCI Hyderabad Challengers" },
  { id: 17, name: "GVN Yoga & Fitness Centre" },
  { id: 18, name: "Kallepally Adhinarayana Yoga Center - Khammam" },
  { id: 19, name: "Kasturba Yoga Group, Hydershakote" },
  { id: 20, name: "Kokapet Yoga Group, Telangana" },
  { id: 21, name: "Learneazy Yoga" },
  { id: 22, name: "MANJU YOGA INSTITUTE" },
  { id: 23, name: "TYTAC - Telangana Yoga Teachers Alliance Committee" },
  { id: 24, name: "Newgen High School" },
  { id: 25, name: "Omkar Yoga Center" },
  { id: 26, name: "Raheempura Play Ground" },
  { id: 27, name: "SAHAJA ANANDA YOGA [SAY]" },
  { id: 28, name: "Samratha Spoken English&Yoga Academy" },
  { id: 29, name: "SHIVARAM YOGA CENTER, NAGARKURNOOL" },
  { id: 30, name: "Sri Ragjavendra Royal Yoga Attapur" },
  { id: 31, name: "Sri Yoga Centre" },
  { id: 32, name: "Veer Bhagath Singh Boxing Academy" },
  { id: 33, name: "WANAPARTHY Yogasana Sports Association" },
  { id: 34, name: "YOGA 4 ALL (HYDERABAD)" },
  { id: 35, name: "YOGA SADHANA JYOTI MANDIR ASSOCIATION (NSJM)" },
  { id: 36, name: "YOGAMITHRA FOUNDATION" },
  { id: 37, name: "SAI YOGA" },
  { id: 38, name: "Pragati Mahavidyalaya, Koti" },
  { id: 39, name: "Shivaramakrishna Yoga Center" },
  { id: 40, name: "NSJM, Balanagar" },
  { id: 41, name: "NSJM, Madhavaram Colony Branch" },
  { id: 42, name: "Allwyn Colony Branch" },
  { id: 43, name: "Sri Ranganatha Swamy Cultural Association" },
  { id: 44, name: "Government City College(A) Nayapul, Hyd" },
  { id: 45, name: "VISHWA JYOTHI FREE YOGA CENTER VANASTHALIPURAM" },
  { id: 46, name: "Madhava Yoga Sadhana Samithi" },
  { id: 47, name: "Pragati Mahavidyalaya Degree College, Koti" },
  { id: 48, name: "Badruka College Of Commerce And Arts" },
  { id: 49, name: "Mahila Patanjali Yog Samiti Telangana" },
  { id: 50, name: "Shamshabad BK Centre" },
  { id: 51, name: "Brahmakumaris Dilsukhnagar" },
  { id: 52, name: "MUKUNDA YOGA RESEARCH FOUNDATION (MYRF)" },
  { id: 53, name: "TYTCC" },
  { id: 54, name: "LOVE YOGA FOUNDATION" },
  { id: 55, name: "Sri Saradha Yogalayam" },
  { id: 56, name: "BHARITYA YOG SAMSTHAN" },
  { id: 57, name: "Lotus Lap Public School" },
  { id: 58, name: "Yoga Prachara Samiti Telangana" },
  { id: 59, name: "Vemana Yoga Research Institute" },
  { id: 60, name: "NAMASTE YOGA TS" },
  { id: 61, name: "Tripura's Yogic Mantra Studio" },
  { id: 62, name: "Heartfulness Yoga Center" },
  { id: 63, name: "Saharsakala Samsthanam" },
  { id: 64, name: "BRAHMA KUMARIS (NALLAKUNTA BRANCH)" },
  { id: 65, name: "BRAHMA KUMARIS (VANASTHALIPURAM)" },
  { id: 66, name: "Brahmakumaris - Chelapura (Charminar)" },
  { id: 67, name: "St. PATRICK HIGH SCHOOL" },
  { id: 68, name: "SRI GANGA SARASWATHI VIDYAMANDIR HIGH SCHOOL" },
  { id: 69, name: "DILSUK NAGAR PUBLIC SCHOOL" },
  { id: 70, name: "ST. STAVIO HIGH SCHOOL" },
  { id: 71, name: "SRI SHARADA VIDYAMANDIR SHAMSHABAD" },
  { id: 72, name: "CV_RAMAN" },
  { id: 73, name: "Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh" },
  { id: 74, name: "Patanjali Yoga Samithi Bharat swabhiman Trust" },
  { id: 75, name: "Other" },
];

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "375px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Registration = () => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [number, setNumber] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [contactNumberErr, setContactNumberErr] = useState(false);
  const [registerPopUp, setRegisterPopUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [organization, setOrganization] = useState("default");
  const [qRImage, setQRImage] = useState("");
  const [tokenNo, setTokenNo] = useState("");

  console.log(email);
  console.log(name);
  const generateQRCode = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      // url: "https://yoga-mahotsav.onrender.com/api/addDetails",
      // url: "http://localhost:5000/api/register",
      url:'https://yoga-brahmotsav.onrender.com/api/register',
      data: {
        fullName: name,
        mobileNumber: contactNumber,
        email: email,
        organisation: organization,
      },
      headers: {
        "content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
      // setQRImage(res.data.user.image);
      // setTokenNo(res.data.user.tokenNo);
      if (res.data.success) {
        setRegisterPopUp(true);
        setName("");
        setContactNumber("");
        setEmail("");
        setOrganization("default");
      }
    });
  };

  // const navigate = useNavigate();

  const handleDownload = (e) => {
    e.preventDefault();
    axios
      .get("https://yoga-mahotsav.onrender.com/api/getUser", {
        params: {
          contactNumber: number,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.user) {
          setData([res.data]);
          setNumber(res.data.user.contactNumber);
        } else {
          setErrorMsg("User is not present");
        }
      });
  };
  // console.log(data);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handlePopupClose = () => {
    setIsClicked(false);
  };

  function userName(e) {
    let item = e.target.value;

    if (item.length < 4) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);
    // console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const pattern = /^[a-zA-Z\s]+$/;
    const valid = pattern.test(name);
    if (!name) {
      setNameErr("Please enter your name");
    } else if (!valid) {
      setNameErr("Invalid name. Only characters are allowed.");
    } else if (name.length < 3) {
      setNameErr("Name should have at least 3 characters");
    } else {
      setNameErr("");
    }

    if (!contactNumber) {
      setContactNumberErr("Please enter your mobile number");
    } else if (contactNumber.length !== 10) {
      setContactNumberErr("Mobile number should have 10 digits");
    } else {
      setContactNumberErr("");
    }
    if (!email) {
      setEmailErr("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErr("Invalid email address");
    } else {
      setEmailErr("");
    }
    if (
      name &&
      name.length >= 3 &&
      contactNumber &&
      contactNumber.length === 10 &&
      email
    )
      generateQRCode(e);
  }

  const handleDownloadPDF = () => {
    const element = document.getElementById("ticket-component");
    html2pdf()
      .set({
        html2canvas: { scale: 4 },
        filename: "yogamahotsav entry pass.pdf",
        margin: [10, 10],
      })
      .from(element)
      .save();
  };
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
               
                  <img
                    src={image}
                    style={{
                      width: "530px",
                      // height: "520px",
                      height: "400px",
                      borderRadius: "6px",
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                    alt="info"
                  />

                  <div
                    style={{
                      border: "1px solid black",
                      width: "530px",
                      height: "140px",
                      marginTop: "10px",
                      borderRadius: "6px",
                    }}
                  >
                    <h4
                      style={{
                        width: "530px",
                        marginTop: "10px",
                        height: "20px",
                        textAlign: "center",
                        fontSize: "22px",
                      }}
                    >
                    
                      Already Registered ? Download Your Certificate
                    </h4>
                    <Link to={"/certificate"}  style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}>
                    <Button
                      sx={{
                        width: "250px",
                        height: "45px",
                        backgroundColor: "#ff6500 !important",
                        // marginTop: "20px ",
                        color: "#fff",
                        margin: "30px auto",
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                      // onClick={handleClick}
                    >
                      Download Certificate
                    </Button>
                    </Link>
                    {/* {isClicked && (
                      <>
                        <div className="modal-overlay">
                          <div className="modal-content">
                            <Paper
                              elevation={3}
                              sx={{ width: "750px", height: "100%" }}
                            >
                              <img
                                src={close}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  marginLeft: "710px",
                                  marginTop: "10px",
                                  pointer: "cursor",
                                }}
                                alt="info"
                                onClick={handlePopupClose}
                              />
                              <FormControl
                                variant="standard"
                                sx={{
                                  marginBottom: "10px",
                                  marginLeft: "30px",
                                }}
                              >
                                <InputLabel shrink htmlFor="bootstrap-input">
                                  Enter your Registered Mobile Number
                                </InputLabel>
                                <BootstrapInput
                                  placeholder="Registered Mobile Number"
                                  id="bootstrap-input"
                                  type="number"
                                  value={number}
                                  onChange={(e) => {
                                    setNumber(e.target.value);
                                    if (
                                      e.target.value.length > 10 ||
                                      e.target.value.length < 10 ||
                                      e.target.value.length === ""
                                    ) {
                                      setContactNumberErr(true);
                                    } else {
                                      setContactNumberErr(false);
                                    }
                                  }}
                                  name="number"
                                />
                                {contactNumberErr ? (
                                  <span
                                    style={{ color: "red", fontSize: "14px" }}
                                  >
                                    Mobile number is required!
                                  </span>
                                ) : null}
                                {errorMsg ? (
                                  <span
                                    style={{ color: "red", fontSize: "14px" }}
                                  >
                                    {errorMsg}
                                  </span>
                                ) : null}
                              </FormControl>
                              <Button
                                sx={{
                                  width: "150px",
                                  height: "45px",
                                  backgroundColor: "#ff6500 !important",
                                  marginTop: "25px ",
                                  color: "#fff",
                                  marginLeft: "140px",
                                  fontSize: "16px",
                                }}
                                onClick={handleDownload}
                              >
                                Search
                              </Button>

                              {data.map((item, index) => {
                                return (
                                  <>
                                    <div
                                      id="ticket-component"
                                      key={item.user.id}
                                    >
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
                                          display: "flex",
                                        }}
                                      >
                                        {" "}
                                        <div
                                          style={{
                                            backgroundImage: `url(${imageyoga})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "contain",
                                            height: "268px",
                                            width: "657px",
                                            position: "absolute",
                                            margin: "17px",
                                          }}
                                        >
                                          
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
                                                    justifyContent:
                                                      "space-between",
                                                  }}
                                                >
                                                  <img
                                                    src={image2}
                                                    style={{
                                                      width: "80px",
                                                      height: "55px",
                                                    }}
                                                    alt="info"
                                                  />
                                                  <img
                                                    src={image3}
                                                    style={{
                                                      width: "80px",
                                                      height: "55px",
                                                      marginLeft: "15px",
                                                    }}
                                                    alt="info"
                                                  />
                                                  <img
                                                    src={image5}
                                                    style={{
                                                      width: "100px",
                                                      height: "55px",
                                                      marginLeft: "15px",
                                                    }}
                                                    alt="info"
                                                  />

                                                  <img
                                                    src={image4}
                                                    style={{
                                                      width: "100px",
                                                      height: "55px",
                                                      marginLeft: "15px",
                                                    }}
                                                    alt="info"
                                                  />
                                                  <img
                                                    src={image1}
                                                    style={{
                                                      width: "100px",
                                                      height: "55px",
                                                      marginLeft: "15px",
                                                    }}
                                                    alt="info"
                                                  />
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
                                                    justifyContent:
                                                      "space-between",
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
                                                    13th March 2023 - 14th March
                                                    2023
                                                  </Typography>
                                                  <div
                                                    style={{
                                                      borderLeft:
                                                        "2px solid #AAA8A8",
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
                                                      07 PM - 08 PM
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
                                                  J5GV+4PV, Talkatora Ln,
                                                  Talkatora Garden, President's
                                                  Estate, New Delhi, Delhi
                                                  110004
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
                                                  No Exchange of ticket will be
                                                  made under any circumstances
                                                  and tickets are not
                                                  transferable
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
                                                    width: "135px",
                                                    height: "40px",
                                                    // marginLeft: "30px",
                                                    textAlign: "center",
                                                    color: "black",
                                                    paddingLeft: "2px",
                                                    paddingRight: "2px",
                                                    // backgroundColor:'pink'
                                                  }}
                                                >
                                                  {item.user.name}
                                                </Typography>
                                                <div
                                                  style={{
                                                    width: "76px",
                                                    height: "76px",
                                                    marginTop: "70px",
                                                    marginLeft: "30px",
                                                    position: "absolute",
                                                    border:
                                                      "1px solid rgba(254, 210, 87, 0.33)",
                                                  }}
                                                >
                                                  <>
                                                    <img
                                                      src={item.user.image}
                                                      alt="QRImage"
                                                      style={{
                                                        width: "76px",
                                                        height: "76px",
                                                      }}
                                                    />
                                                  </>
                                                </div>

                                                <div
                                                  sx={{
                                                    width: "69px",
                                                    height: "24px",
                                                  }}
                                                >
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
                                                      marginLeft: "30px",
                                                      textAlign: "center",
                                                      color: "black",
                                                    }}
                                                  >
                                                    {item.user.tokenNo}
                                                  </Typography>
                                                </div>
                                              </Paper>
                                            </Grid>
                                          </Grid>
                                        </div>
                                      </Paper>
                                    </div>
                                    <div
                                      style={{
                                        width: "100%",
                                        // backgroundColor:'pink' ,
                                        textAlign: "center",
                                      }}
                                    >
                                      {" "}
                                      <Button
                                        sx={{
                                          width: "200px",
                                          height: "45px",
                                          backgroundColor: "#ff6500 !important",
                                          marginTop: "20px",
                                          color: "#fff",
                                          // marginLeft: "450px",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          fontSize: "16px",
                                          marginBottom: "10px",
                                        }}
                                        onClick={handleDownloadPDF}
                                      >
                                        Download Now
                                      </Button>
                                    </div>
                                  </>
                                );
                              })}
                            </Paper>
                          </div>
                        </div>
                      </>
                    )} */}

                    <div></div>
                  </div>
                </div>

                {/* <div className="col-lg-6 offset-lg-1">
                  <div className="banner-image">
                    <Paper
                      elevation={3}
                      sx={{
                        width: "530px",
                        height: "560px",
                        borderRadius: "6px",
                        marginTop: "50px",
                        marginBottom: "50px",
                      }}
                    >
                      <br />

                      <Typography
                        variant="h5"
                        sx={{
                          textAlign: "center",
                          color: "black",
                          marginTop: "5px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Event Registration Form
                        <Typography
                          sx={{
                            color: "black",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            fontSize: "14px",
                          }}
                        >
                          (New User)
                        </Typography>
                      </Typography>
                      <br />
                      <FormControl
                        variant="standard"
                        sx={{
                          margin: "8px auto 0px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InputLabel
                          shrink
                          htmlFor="bootstrap-input"
                          style={{ marginLeft: "65px" }}
                        >
                          Full Name
                        </InputLabel>
                        <BootstrapInput
                          placeholder="Name"
                          id="bootstrap-input"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          name="name"
                        />
                      </FormControl>
                      {nameErr ? (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            marginLeft: "65px",
                            height: "10px",
                          }}
                        >
                          {nameErr}
                        </span>
                      ) : null}

                      <FormControl
                        variant="standard"
                        sx={{
                          margin: "6px auto 0px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InputLabel
                          shrink
                          htmlFor="bootstrap-input"
                          style={{
                            marginLeft: "65px",
                          }}
                        >
                          E-mail
                        </InputLabel>
                        <BootstrapInput
                          placeholder="E-mail"
                          id="bootstrap-input"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                        />
                      </FormControl>
                      {emailErr ? (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            marginLeft: "65px",
                            height: "10px",
                          }}
                        >
                          {emailErr}
                        </span>
                      ) : null}

                      <FormControl
                        variant="standard"
                        sx={{
                          margin: "6px auto 0px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InputLabel
                          shrink
                          htmlFor="bootstrap-input"
                          style={{
                            marginLeft: "65px",
                          }}
                        >
                          Mobile Number
                        </InputLabel>
                        <BootstrapInput
                          placeholder="Mobile Number"
                          id="bootstrap-input"
                          type="number"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                       
                          name="contactNumber"
                        />
                      </FormControl>
                      {contactNumberErr ? (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            marginLeft: "65px",
                            height: "10px",
                          }}
                        >
                          {contactNumberErr}
                        </span>
                      ) : null}

                      <FormControl
                        variant="standard"
                        sx={{
                          margin: "6px auto",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InputLabel
                          shrink
                          htmlFor="bootstrap-input"
                          style={{
                            marginLeft: "65px",
                          }}
                        >
                          Organization if any
                        </InputLabel>
                        <BootstrapInput
                          placeholder="Organization"
                          id="bootstrap-input"
                          type="text"
                      
                          name="organization"
                        />
                        
                      </FormControl> 
                        <FormControl
                        variant="standard"
                        sx={{
                          margin: "6px auto",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                       <InputLabel
                          shrink
                          htmlFor="bootstrap-input"
                          style={{
                            marginLeft: "65px",
                          }}
                        >
                          Organization 
                        </InputLabel>
                        <Select
                            value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          sx={{ flex: 1 ,width:400}}
                          input={<BootstrapInput />}

                        >
                          <MenuItem value="default" disabled selected>
                            Select Option
                          </MenuItem>
                          {yogaCenters.map((center) => (
                            <MenuItem key={center.id} value={center.name}>
                              {center.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {errorMsg ? (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            {errorMsg}
                          </span>
                        ) : null}
                      </FormControl>
                      <Button
                        sx={{
                          width: "400px",
                          height: "45px",
                          backgroundColor: "#ff6500 !important",
                          color: "#fff",
                          margin: "auto",
                          marginTop: "18px !important",
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        type="button"
                        // onClick={handleClick}
                        // onClick={(e) => handleSubmit(e)}
                        // onClick={generateQRCode}
                        //25/05/23 change comment handleSubmit
                        onClick={handleSubmit}
                        // onClick={() => setRegisterPopUp(!registerPopUp)}
                      >
                        Register Now
                      </Button>
                    </Paper>
                  </div>
                </div> */}
              </div>
              {registerPopUp && (
                <>
                  <div className="alert-modal">
                    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                      <div
                        className="bg-white rounded-md p-6 "
                        style={{
                          width: "500px",
                          height: "150px",
                          borderRadius: "5px",
                          padding: "20px",
                        }}
                      >
                        <img
                          src={close}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "445px",
                            marginTop: "5px",
                            marginBottom: "5px",
                            pointer: "cursor",
                          }}
                          alt="info"
                          onClick={() => setRegisterPopUp(false)}
                        />
                        <div className="alert alert-danger light-mode">
                          Registration successfully Done!
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {showComponent && (
                <Ticket name={name} qRImage={qRImage} tokenNo={tokenNo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
