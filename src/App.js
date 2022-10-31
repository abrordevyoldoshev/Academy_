import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./view/auth/login";
import Register from "./view/auth/register";
import LayoutGlob from "./layout/LayoutGlob";
import Home from "./view/pages/Home";
import CreateCourse from "./view/pages/CreateCourse";
import Settings from "./view/pages/Settings";
import Favourite from "./view/pages/Favourite";
import Teacher from "./view/pages/Teacher";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="reg" element={<Register/>}/>

            <Route path="/admin" element={<LayoutGlob/>}>
                <Route index element={<Home/>}/>
                <Route path="create" element={<CreateCourse/>}/>
                <Route path="teacher" element={<Teacher/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="favourite" element={<Favourite/>}/>
            </Route>
        </Routes>
    );
}

export default App;
