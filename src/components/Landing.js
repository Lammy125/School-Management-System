import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../styles/Landing.css";
import students from "../assets/students.jpg";
import admin from "../assets/administrative-manager-job.jpeg";
import teacher from "../assets/math-teacher.webp";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="titleDiv">
        <h1 className="title">School Management System</h1>
      </div>
      <div className="cardCon">
        <div className="card">
          <Link to="/adminlogin" className="link">
            <Card sx={{ maxWidth: 223 }}>
              <CardMedia
                component="img"
                alt="admin"
                height="140"
                image={admin}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Signin as Admin
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="card">
          <Link to="/studentlogin" className="link">
            <Card sx={{ maxWidth: 223 }}>
              <CardMedia
                component="img"
                alt="student"
                height="140"
                image={students}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Signin as Student
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="card">
          <Link to="/teacherlogin" className="link">
            <Card sx={{ maxWidth: 223 }}>
              <CardMedia
                component="img"
                alt="teacher"
                height="140"
                image={teacher}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Signin as Teacher
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
