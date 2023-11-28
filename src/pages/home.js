import React from "react";
import "./styles.css";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import Nav from "../Nav/Nav";
const Home = () => {
  const data = [
    {
      title: "Productivity on Monday",
      percentage: "4%",
    },
    {
      title: "Productivity on Tuesday",
      percentage: "92%",
    },
    {
      title: "Productivity on Wednesday",
      percentage: "112%",
    },
    {
      title: "Productivity on Thursday",
      percentage: "93%",
    },
    {
      title: "Productivity on Friday",
      percentage: "89%",
    },
    {
      title: "Productivity on Saturday",
      percentage: "98%",
    },
  ];
  return (
    <div className="home">
    <Nav/>
    <img alt="icon" src="./support.png" style={{float:'right'}}/>
    <div style={{display:'flex', justifyContent:"center", margin:"30px"}}>
    <div style={{display:"flex", }}>
    <img src="./logo2.png" height={80} width={80} alt="logo"/>
    <div style={{width:"35px", height:"35px",color:"#36A546",background: "#5E5E5EB5 0% 0% no-repeat padding-box", boxShadow: "inset 0px  0px #00000040", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",opacity: 0.4, filter: "blur(0.3px)",font: "normal normal normal 18px/25px Source Sans Pro"}}>
    4
    </div>
    </div>
    </div>
      <Container>
        <Card sx={{ background: "#5E5E5E81 0% 0% no-repeat padding-box" }}>
          <CardHeader
            className="cardhead"
            titleTypographyProps={{ variant: "h6" }}
            title="Employee Productivity Dashboard"
          ></CardHeader>
          <CardContent className="cardcontent">
            <div>
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <Container>
                      <div className="content">
                        <Typography sx={{ color: "white" }}>
                          {item.title}
                        </Typography>
                        <Typography className="percent">
                          {item.percentage}
                        </Typography>
                      </div>
                    </Container>
                    <div style={{maxWidth:"50%"}}>
                      <div
                        className="slider"
                        style={{
                          width: `${item.percentage}`,
                          background: "#36A54680 0% 0% no-repeat padding-box",
                          height: "10px",
                          borderRadius: "18px",
                        }}
                      ></div>
                    </div>
                    <br/>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
