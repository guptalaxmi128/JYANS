import React, { useState} from "react";
import { QrReader } from 'react-qr-reader';
// import QrReader from 'react-qr-scanner'
import axios from 'axios';
import { Paper, Button, Grid } from "@mui/material";
const Entrance = () => {
    
  const [data, setData] = useState(null);
  const [message,setMessage]=useState(null);
   
  function handleScan(data) {
    if (data) {
      setData(data);
    }
  }

  function handleError(err) {
    console.error(err);
  }
//   function openQRReader() {
//     setData(null);
//   }

//   useEffect(()=> {
    
//     axios({
//     method:'post',
//     url:'http://localhost:5000/api/entranceAttendance',
//     data: { attendance: data},
//     headers: {
//         "content-Type": "application/json",
//       },
//   }).then(res=>{
//     // console.log(res.data);
//     setData(res.data.message)
//   })
//  },[data] )

async function fetchMessage() {
    try {
      const response = await axios.post('https://yoga-mahotsav.onrender.com/api/entranceAttendance', {attendance: data });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
  }
  }
  return (
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={3}
        sx={{
          width: "694px",
          height: "100vh",
          //   alignItems: "center",
          justifyContent: "center",
          margin: "30px auto",
          display: "flex",
        }}
      >
        <div className="container-fluid">
          <h1 className="my-5 text-center ">Scan QR Code (Entry)</h1>
          
          {/* <div className=" text-center mb-4 ">
            <Button
              sx={{
                width: "200px",
                height: "45px",
                backgroundColor: "#ff6500 !important",
                color: "#fff",
                fontSize: "16px",
              }}
              type="button"
            >
              Reload Scanner
            </Button>
            <div style={{width:"300px",height:"300px",justifyContent:'center',margin:'auto'}}>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: "300px",height:"300px" }}
            />
            <p>{data}</p>
            </div>
          </div> */}
          <div>
    {data ? (
      <div>
        <p>{data}</p>
        
        <Button
              sx={{
                width: "200px",
                height: "45px",
                backgroundColor: "#ff6500 !important",
                color: "#fff",
                fontSize: "16px",
              }}
              type="button"
              onClick={fetchMessage}
            >Show Message</Button>
        {/* <button onClick={fetchMessage}>Fetch Message</button> */}
      </div>
    ) : (
      <div style={{ width:"350px",height:'300px', justifyContent:'center',margin:"auto"}} >
        <QrReader
           onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
           
           
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '350px',height:'300px' }}
        />

{/* <Button
              sx={{
                width: "200px",
                height: "45px",
                backgroundColor: "#ff6500 !important",
                color: "#fff",
                fontSize: "16px",
                marginLeft:"80px",
              }}
              type="button"
              onClick={openQRReader}
            >Open QR Reader</Button> */}
        
        {/* <button onClick={openQRReader}>Open QR Reader</button> */}
      </div>
    )}
    {message && <p>{message}</p>}
</div>

        </div>
      </Paper>
    </Grid>
  );
};

export default Entrance;
