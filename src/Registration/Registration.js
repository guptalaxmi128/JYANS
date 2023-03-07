import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, Button} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import image1 from "../img/image 1.png";
import image2 from "../img/image 2.png";
import image3 from "../img/image 3.png";
import image4 from "../img/image4.jpg";
import "./Registration.css";


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

    const navigate=useNavigate()

    function handleClick (){
      navigate('/yogaticket')
    }
 
  return (
    <>     
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
            
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
                <div style={{marginBottom:"25px"}}>
                <img src={image2} style={{ width: "45px", height: "45px" }} alt="info"/>
                <img src={image3} style={{ width: "45px", height: "45px" ,marginLeft:'15px'}}  alt="info"/>
                <img src={image4} style={{ width: "45px", height: "45px" ,marginLeft:'15px'}}  alt="info"/>
                <img src={image1} style={{ width: "45px", height: "45px",marginLeft:'15px' }} alt="info" />
                </div>
                  <div className="hero-content">
                 
                    <h1>Yoga Mahotsav,2023</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="contact.html" className="btn btn-primary">
                      Download Ticket
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 offset-lg-1">
                  <div className="banner-image">
                    <Paper
                      elevation={3}
                      sx={{
                        width: "575px",
                        height: "500px",
                        borderRadius: "6px",
                        // margin: "auto",
                        marginTop: "50px",
                        // justifyContent: "center",
                        // alignItems: "center",
                      }}
                    >
                      <br />
                    
               
                        <Typography
                          variant="h5"
                          sx={{
                            textAlign: "center",
                            color: "gray",
                            marginTop: "50px",
                            alignItems:'center',
                            justifyContent:'center'
                          }}
                        >
                          Registration
                        </Typography>
                        <br />
                        <FormControl
                          variant="standard"
                          sx={{ marginLeft: "90px" }}
                        >
                          <InputLabel shrink htmlFor="bootstrap-input">
                            User Name
                          </InputLabel>
                          <BootstrapInput
                            placeholder="Name"
                            id="bootstrap-input"
                            type="text"
                          />
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
                          />
                        </FormControl>
                       
                        <FormControl
                          variant="standard"
                          sx={{ marginLeft: "90px", marginTop: "10px" }}
                        >
                          <InputLabel shrink htmlFor="bootstrap-input">
                            Mobile No
                          </InputLabel>
                          <BootstrapInput
                            placeholder="Password"
                            id="bootstrap-input"
                            type="password"
                          />
                        </FormControl>
                     
                        <Button
                          sx={{
                            width: "400px",
                            height: "45px",
                            backgroundColor: "#1A80CE",
                            marginTop: "20px",
                            color: "#fff",
                            marginLeft: "90px",
                            fontSize: "16px",
                          }}
                          type="submit"
                          onClick={handleClick}
                       
                        >
                          Register Now
                        </Button>
                      
                      
           
                   </Paper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </>
  );
};

export default Registration;
