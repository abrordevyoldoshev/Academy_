import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutReg from "./layout/LayoutReg";
import Login from "./view/auth/login";
import Register from "./view/auth/register";
import AdminLayout from "./layout/AdminLayout";
import Home from "./view/pages/admin/Home";
import CreateCourse from "./view/pages/admin/CreateCourse";
import Settings from "./view/pages/admin/Settings";
import Favourite from "./view/pages/admin/Favourite";
import Teacher from "./view/pages/admin/Teacher";
import SuccessReg from "./view/auth/SuccessReg";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutReg />}>
        <Route index element={<Login />} />
        <Route path="reg" element={<Register />} />
        <Route path='/successreg' element={<SuccessReg/>}/>
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<CreateCourse />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="settings" element={<Settings />} />
        <Route path="favourite" element={<Favourite />} />
      </Route>
    </Routes>
  );
}

export default App;
