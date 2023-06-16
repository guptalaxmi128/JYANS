import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, Typography, Button, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import image from "./img/yoga-mahotsav1.jpg";
import imageyoga from "./img/yoga.png";
import image1 from "./img/image 1.png";
import image2 from "./img/image 2.png";
import image3 from "./img/image 3.png";
import image4 from "./img/image4.jpg";
import image5 from "./img/image5.jpg";
import html2pdf from "html2pdf.js";
import "./Registration/Registration.css";
import axios from "axios";
import Ticket from "./Ticket";
import close from "./img/close.png";
import certificate from "./img/HYD.jpg";
import ImageOverlay from "./ImageOverlay";
import { textAlign } from "@mui/system";
import html2canvas from "html2canvas";


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

const Certificate = () => {
  const componentRef = useRef(null);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [number, setNumber] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  // const [emailErr, setEmailErr] = useState(false);
  const [contactNumberErr, setContactNumberErr] = useState(false);

  const [name, setName] = useState("");
 
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [qRImage, setQRImage] = useState("");
  const [tokenNo, setTokenNo] = useState("");

  
  const [fullName, setFullName] = useState("");
  const [selectedOption, setSelectedOption] = useState("default");

  console.log(email);
  console.log(tokenNo);
  //   const generateQRCode = (e) => {
  //     e.preventDefault();
  //     axios({
  //       method: "post",
  //       url: "https://yoga-mahotsav.onrender.com/api/addDetails",
  //       data: {
  //         name: name,
  //         contactNumber: contactNumber,
  //         email: email,
  //         organization: organization,
  //       },
  //       headers: {
  //         "content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       console.log(res.data);
  //       setQRImage(res.data.user.image);
  //       setTokenNo(res.data.user.tokenNo);
  //     });
  //   };

  // const navigate = useNavigate();

  //   const handleDownload = (e) => {
  //     e.preventDefault();
  //     axios
  //       .get("https://yoga-mahotsav.onrender.com/api/getUser", {
  //         params: {
  //           contactNumber: number,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         if(res.data.user){
  //           setData([res.data]);
  //           setNumber(res.data.user.contactNumber)
  //         }else{

  //           setErrorMsg("User is not present")
  //         }

  //       });
  //   };
  // console.log(data);

  const handleDownload = (e) => {
    e.preventDefault();
    axios
      // .get("http://localhost:5000/api/getCertificate", {
      // .get("http://localhost:5000/api/findYogaBrahmotsavUser", {
      .get("https://yoga-brahmotsav.onrender.com/api/findYogaBrahmotsavUser", {
        params: {
          fullName:name,
          organisation:selectedOption
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data.fullName);
        if (res.data.success) {
          // setData([res.data]);
          setName(res.data.data.fullName);
          setOrganization(res.data.data.organisation);
          setIsClicked(true);
          setShowComponent(true);
        } else {
          setErrorMsg("User is not present");
       
        }
      });
  };

  console.log(name);
  const handleClick = () => {
    setIsClicked(true);
  };

  const handlePopupClose = () => {
    setIsClicked(false);
  };

  //   function userName(e) {
  //     let item = e.target.value;

  //     if (item.length < 4 ) {
  //       setNameErr(true);
  //     } else {
  //       setNameErr(false);
  //     }
  //     setName(item);
  //     // console.log(e.target.value);
  //   }
  //   function handleSubmit(e) {
  //     if (
  //       name.length < 4 ||
  //       contactNumber.length > 10 ||
  //       contactNumber === "" ||
  //       contactNumber.length < 10
  //     ) {
  //       alert("Invalid Data");
  //     } else {
  //       alert("Successfully register");
  //       setShowComponent(true);
  //       generateQRCode(e);
  //     }
  //     // e.preventDefault();
  //   }

  // const handleDownloadPDF = () => {
  //   // const element = document.getElementById("ticket-component");
  //    const element = document.getElementById("component-to-download");
  //   html2pdf()
  //     .set({
  //       html2canvas: { scale: 2 },
  //       filename: "yogamahotsav certificate.pdf",
  //       margin: [10, 10],
  //     })
  //     .from(element)
  //     .save();
  // };



  // const handleDownloadPNG = () => {
  //   html2canvas(componentRef.current).then((canvas) => {
  //     const link = document.createElement('a');
  //     link.download = 'component.png';
  //     link.href = canvas.toDataURL('image/png');
  //     link.click();
  // });
  // };

  // const downloadImage = () => {
  //   const element = document.getElementById("component-to-download");
  //   html2canvas(element).then((canvas) => {
  //     const link = document.createElement("a");
  //     link.download = "certificate.jpg";
  //     link.href = canvas.toDataURL("image/jpeg");
  //     link.click();
  //   });
  // };

  const downloadImage = () => {
    const element = document.getElementById("component-to-download");
    const scale = 2;
  
    html2canvas(element, { scale }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "Participation_certificate.jpg";
  
      // Create a new canvas with increased size
      const enlargedCanvas = document.createElement("canvas");
      const context = enlargedCanvas.getContext("2d");
      enlargedCanvas.width = canvas.width * scale;
      enlargedCanvas.height = canvas.height * scale;
      context.drawImage(canvas, 0, 0, enlargedCanvas.width, enlargedCanvas.height);
  
      // Adjust JPEG quality to target an approximate file size of 3MB
      const quality = 1; // Adjust this value to control the file size
  
      // Convert the canvas to a data URL with the specified JPEG quality
      const dataUrl = enlargedCanvas.toDataURL("image/jpeg", quality);
  
      // Function to convert data URL to Blob
      const dataUrlToBlob = (dataUrl) => {
        const parts = dataUrl.split(",");
        const mimeType = parts[0].match(/:(.*?);/)[1];
        const b64Data = atob(parts[1]);
        let n = b64Data.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = b64Data.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mimeType });
      };
  
      // Convert the data URL to a Blob
      let blob = dataUrlToBlob(dataUrl);
  
      // Check the file size and iterate to adjust JPEG quality if necessary
      const targetSize = 3 * 1024 * 1024; // Target file size in bytes
      let currentSize = blob.size;
      let adjustedQuality = quality;
      while (currentSize > targetSize && adjustedQuality > 0.1) {
        adjustedQuality -= 0.1;
        const adjustedDataUrl = enlargedCanvas.toDataURL("image/jpeg", adjustedQuality);
        const adjustedBlob = dataUrlToBlob(adjustedDataUrl);
        currentSize = adjustedBlob.size;
        blob = adjustedBlob;
      }
  
      // Set the href of the download link to the Blob URL
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  };
  
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
                  {/* <div style={{marginBottom:"25px"}}> */}
                  <img
                    src={image}
                    style={{
                      width: "520px",
                      height: "250px",
                      // height: "400px",
                      borderRadius: "6px",
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                    alt="info"
                  />

                  <div
                    style={{
                      border: "1px solid black",
                      width: "520px",
                      height: "380px",
                      marginTop: "10px",
                      borderRadius: "6px",
                    }}
                  >
                    <h4
                      style={{
                        width: "530px",
                        marginTop: "30px",
                        height: "20px",
                        textAlign: "center",
                        color: "#ff6500",
                        fontWeight: 700,
                      }}
                    >
                      {/* Only for Already registered Users */}
                      Get Your Certificate
                    </h4>
                    <div
                      style={{
                        width: "400px",
                        height: "100px",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "16px",
                          fontWeight: 500,
                          textAlign: "center",
                          color: "black",
                          margin: "15px",
                        }}
                      >
                        Easy Steps to Download your Certificate
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: 400,
                          marginLeft: "49px",
                          color: "black",
                        }}
                      >
                        1. Enter Your Name
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: 400,
                          marginLeft: "49px",
                          color: "black",
                        }}
                      >
                        2. Select Your Organization
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "black",
                          marginLeft: "49px",
                        }}
                      >
                        3. Click on <b>Download Certificate</b> Button
                      </Typography>
                      <FormControl
                        variant="standard"
                        sx={{
                          margin: " 20px auto",
                          width: "350px",
                          //  alignItems:'center',
                          justifyContent: "center",
                          display: "flex",
                          borderRadius: "10px",
                        }}
                      >
                        <BootstrapInput
                          placeholder="Enter Name"
                          id="bootstrap-input"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          
                        />
                      </FormControl>
                    
                      <FormControl
                        variant="standard"
                        sx={{
                          margin: "20px auto",
                          width: "350px",
                          display: "flex",
                          borderRadius: "10px",
                        }}
                      >
                        <Select
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          sx={{ flex: 1 }}
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
                          width: "350px",
                          height: "45px",
                          backgroundColor: "#ff6500 !important",
                          margin: "20px auto",
                          color: "#fff",
                          justifyContent: "center",
                          fontSize: "16px",
                          display: "flex",
                          borderRadius: "10px",
                        }}
                        // onClick={handleClick}
                        onClick={handleDownload}
                      >
                        Download Certificate
                      </Button>
                    </div>

                    {/* <Button
                      sx={{
                        width: "200px",
                        height: "45px",
                        backgroundColor: "#ff6500 !important",
                        marginTop: "20px ",
                        color: "#fff",
                        marginLeft: "160px",
                        fontSize: "16px",
                      }}
                      onClick={handleClick}
                    >
                      Download 
                    </Button> */}
                    {isClicked && (
                      <>
                        <div className="modal-overlay">
                          <div className="modal-content">
                            <Paper
                              elevation={3}
                              // sx={{width:"775px",height:"600px"}}
                              sx={{ width: "70%", height: "100%" }}
                            >
                              {/* <img
                                src={close}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                 
                                  // marginLeft:"740px",
                                  marginLeft:"1290px",
                                  marginTop: "10px",
                                  pointer: "cursor",
                                }}
                                alt="info"
                                onClick={handlePopupClose}
                              /> */}
                              {/* <FormControl
                                variant="standard"
                                sx={{
                                  marginBottom: "10px",
                                  marginLeft: "30px",
                                }}
                              >
                                <InputLabel shrink htmlFor="bootstrap-input"> */}
                              {/* Enter your registered number */}
                              {/* Enter Ticket Number
                                </InputLabel>
                                <BootstrapInput
                                  placeholder="Ticket Number"
                                  id="bootstrap-input"
                                  type="text"
                                  value={number}
                                  onChange={(e)=>setNumber(e.target.value)}
                              
                                  name="number"
                                />
                             
                                {
                                  errorMsg ? (
                                    <span  style={{ color: "red", fontSize: "14px" }}>{errorMsg}</span>
                                  ): null
                                }
                              </FormControl> */}
                              {/* <Button
                                sx={{
                                  width: "150px",
                                  height: "45px",
                                  backgroundColor: "#ff6500 !important",
                                  marginTop: "25px",
                                  color: "#fff",
                                  marginLeft: "140px",
                                  fontSize: "16px",
                                }}
                                // onClick={handleDownload}
                              >
                                Search
                              </Button> */}

                              {/* {data.map((item, index) => {
                                return (
                                  <> */}
                              {showComponent && (
                                <>
                                  {/* <div id="ticket-component" 
                                    //  key={item.user.id}
                                     > */}
                                  {/* <div ref={componentRef}> */}
                                  <div id="component-to-download">
                                    {/* <Paper
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
                                      > */}{" "}
                                    {/* <div
                                          style={{
                                            backgroundImage: `url(${certificate})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "contain",
                                            height: "268px",
                                            width: "657px",
                                            position: "absolute",
                                            margin: "17px",
                                          }}
                                        >
                                          <br/>
                                        
                                        </div> */}
                                    {/* <div style={{marginLeft:"50px",marginTop:"10px",marginRight:"50px"}}> */}
                                    <div style={{ padding: "10px" }}>
                                      <ImageOverlay
                                        imageSrc={certificate}
                                        name={name}
                                        organization={organization}
                                      />
                                    </div>
                                    {/* </Paper> */}
                                  </div>
                                </>
                              )}
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
                                    flex: 1,
                                    width: "180px",
                                    height: "30px",
                                    backgroundColor: "#ff6500 !important",
                                    // marginTop: "35px",
                                    // marginTop:"10px",
                                    color: "#fff",
                                    // marginLeft: "450px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "16px",
                                    marginBottom: "10px",
                                  }}
                                  // onClick={handleDownloadPDF}
                                  // onClick={handleDownloadPNG}
                                  onClick={downloadImage}
                                >
                                  Download Now
                                </Button>
                              </div>

                              {/* </>
                                );
                              })} */}
                            </Paper>
                          </div>
                        </div>
                      </>
                    )}

                    <div></div>
                  </div>
                </div>

                {/* <div className="col-lg-6 offset-lg-1">
                  <div className="banner-image">
                  
                    <Paper
                      elevation={3}
                      sx={{
                        width: "575px",
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
                          marginTop: "15px",
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
                        sx={{ marginLeft: "90px" }}
                      >
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Full Name
                        </InputLabel>
                        <BootstrapInput
                          placeholder="Name"
                          id="bootstrap-input"
                          type="text"
                          value={name}
                          // onChange={(e) => setName(e.target.value)}
                          onChange={userName}
                          name="name"
                        />
                        {nameErr ? (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Enter atleast 4 characters
                          </span>
                        ) : null}
                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{ marginLeft: "90px", marginTop: "10px" }}
                      >
                        <InputLabel shrink htmlFor="bootstrap-input">
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

                      <FormControl
                        variant="standard"
                        sx={{ marginLeft: "90px", marginTop: "10px" }}
                      >
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Mobile Number
                        </InputLabel>
                        <BootstrapInput
                          placeholder="Mobile Number"
                          id="bootstrap-input"
                          type="number"
                          value={contactNumber}
                          // onChange={(e) => setContactNumber(e.target.value)}
                          onChange={(e) => {
                            setContactNumber(e.target.value);
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
                          name="contactNumber"
                        />
                        {contactNumberErr ? (
                          <span style={{ color: "red", fontSize: "14px" }}>
                            Mobile number is required!
                          </span>
                        ) : null}
                      </FormControl>

                      <FormControl
                        variant="standard"
                        sx={{ marginLeft: "90px", marginTop: "10px" }}
                      >
                        <InputLabel shrink htmlFor="bootstrap-input">
                          Organization if any
                        </InputLabel>
                        <BootstrapInput
                          placeholder="Organization"
                          id="bootstrap-input"
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          name="organization"
                        />
                      </FormControl>
                      <Button
                        sx={{
                          width: "400px",
                          height: "45px",
                          backgroundColor: "#ff6500 !important",
                          marginTop: "20px",
                          color: "#fff",
                          marginLeft: "90px",
                          fontSize: "16px",
                        }}
                        type="button"
                        // onClick={handleClick}
                        // onClick={(e) => handleSubmit(e)}
                        // onClick={generateQRCode}
                        onClick={handleSubmit}
                      >
                        Register Now
                      </Button>
                    </Paper>
                 
                  </div>
                </div> */}
              </div>
              {/* {showComponent && (
                <Ticket name={name} qRImage={qRImage} tokenNo={tokenNo} />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
