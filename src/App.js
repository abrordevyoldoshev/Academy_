import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./view/auth/login";
import Register from "./view/auth/register";
import LayoutGlob from "./layout/LayoutGlob";
import Dashboard from "./view/pages/Dashboard";
import Course from "./view/pages/Course";
import Settings from "./view/pages/Settings";
import Favourite from "./view/pages/Favourite";
import Category from "./view/pages/Category";
import AddCourse from "./components/AddCourse";
import Books from "./view/pages/Books";
import AddCategory from "./components/AddCategory";
import GetNameUser from "./service/getNameUser";
import Lesson from "./view/pages/Lesson";
import AddLesson from "./components/AddLesson";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="reg" element={<Register/>}/>
            <Route path="/admin" element={<LayoutGlob/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='course' element={<Course/>}/>
                <Route path="category" element={<Category/>}/>
                <Route path="book" element={<Books/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="favourite" element={<Favourite/>}/>
                <Route path='lesson' element={<Lesson/>}/>
                <Route path='course/add' element={<AddCourse/>}/>
                <Route path='category/add' element={<AddCategory/>}/>
                <Route path='lesson/add' element={<AddLesson/>}/>
            </Route>
        </Routes>
    );
}
export default App;
