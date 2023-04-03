import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../components/admin/Admin";
import Landing from "../components/Landing";
import AdminLogin from "../components/logins/AdminLogin";
import StudentsLogin from "../components/logins/StudentLogin";
import TeacherLogin from "../components/logins/TeacherLogin";
import Student from "../components/student/Student";
import Teacher from "../components/teacher/Teacher";

const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/studentlogin" element={<StudentsLogin />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/admin/dashboard" element={<Admin/>} />
        <Route path="/student/dashboard" element={<Student />} />
        <Route path="/teacher/dashboard" element={<Teacher />} />

      </Routes>
    </Router>
  );
};

export default AllRoute;
