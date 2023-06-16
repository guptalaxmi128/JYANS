import React, { useState } from 'react';
import axios from 'axios';
import { QrReader} from 'react-qr-reader';
import { Paper,  Grid } from "@mui/material";

const FoodCourt = () => {
    const [data, setData] = useState(null);
    const [message, setMessage] = useState(null);


    function handleScan(data) {
        if (data) {
          setData(data);
      }
      }
      function handleError(err) {
        console.error(err);
      }
      
      function openQRReader() {
        setData(null);
      }
      async function fetchMessage() {
        try {
          const response = await axios.post('https://yoga-mahotsav.onrender.com/api/foodCourtAttendance', {attendance: data });
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
            <h1 className="my-5 text-center ">Scan QR Code ( Foodcourt Entry)</h1>
            <div>
    {data ? (
      <div>
        <p>{data}</p>
        <button onClick={fetchMessage}> Message</button>
      </div>
    ) : (
      <div>
        {/* <QrReader
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
          style={{ width: '100%' }}
        /> */}
        <button onClick={openQRReader}>Open QR Reader</button>
      </div>
    )}
    {message && <p>{message}</p>}
</div>

            </div>
            </Paper>
            </Grid>
    );
}



export default FoodCourt;