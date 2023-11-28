import React from 'react'
import Nav from '../Nav/Nav'
import { Card, CardContent, Container, Input, Typography } from '@mui/material'

const Search = () => {
  const employee = [
    {
      id:1,
      name:"Arjun",
      dob:"16-11-2000",
      role:"Software Engineer"
    },
    {
      id:2,
      name:"Mahesh",
      dob:"15-01-2000",
      role:"Web Developer"
    },
    {
      id:3,
      name:"Kumar",
      dob:"16-6-2000",
      role:"BackEnd Developer"
    },
    {
      id:4,
      name:"MathiKumar",
      dob:"30-11-2000",
      role:"Android Developer"
    },
  ]
  return (
    <div className='search'>
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
    
    <div className='serach-bar' style={{background:" #5E5E5E82 0% 0% no-repeat padding-box", height:"5vh"}}>
    <Container>
    <Input placeholder='Search with name' />
    <img alt="img" src='./glass.png' style={{float:"right"}} />
    </Container>
    </div>
    </Container>
    <center>
    <div className='card-container'>
    {employee.map((item,index)=>{
      return(
        <Container sx={{padding:"30px"}} key={index}>
        <Card sx={{ background: "#5E5E5E81 0% 0% no-repeat padding-box",borderRadius:"20px"}}>
        <CardContent className='emp-card' >
        <div style={{width:"35px", height:"35px",color:"white",background: "#5E5E5EB5 0% 0% no-repeat padding-box", borderRadius:"100%", display:"flex", alignItems:"center", justifyContent:"center",opacity: 0.4, filter: "blur(0.3px)",font: "normal normal normal 18px/25px Source Sans Pro", borderColor:"black", float:"right"}}>
        {item.id}
        </div>
        <Container>
        <div style={{display:"flex", gap:"20px", color:"white"}}>
        <Typography sx={{width:"60px"}}>EMP ID  </Typography><Typography>:</Typography><Typography>{item.id}</Typography>
        </div>
        <br/>
        <div style={{display:"flex",gap:"20px", color:"white"}}>
        <Typography sx={{width:"60px"}}>Name    </Typography><Typography>:</Typography><Typography>{item.name}</Typography>
        </div>
        <br/>
        <div style={{display:"flex",gap:"20px"}}>
        <Typography sx={{width:"60px"}}>DOB </Typography><Typography>:</Typography><Typography sx={{color:"#b0721a"}}>{item.dob}</Typography>
        </div>
        <br/>
        <div style={{display:"flex",gap:"20px"}}>
        <Typography sx={{width:"60px"}}>Role </Typography><Typography>:</Typography><Typography className="role"sx={{color:"#36A546"}}>{item.role}</Typography>
        </div>
        </Container>
        </CardContent>
        
        </Card>
        </Container>
      )
    })}
    </div>
    </center>
    
    </div>
  )
}

export default Search