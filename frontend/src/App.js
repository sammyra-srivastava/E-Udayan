import logo from "./logo.svg";
import "./App.css"
import Dashboard from "./components/admin/dashboard";
import Admin from "./components/admin/index";
import ManageUser from "./components/admin/manageUser";
import AdminProfile from "./components/admin/profile";
import Footer from "./components/main/footer";
import Header from "./components/main/header";
import Home from "./components/main/home";
import Main from "./components/main/index";
import Login from "./components/main/login";
import NotFound from "./components/main/notFound";
import ResetPassword from "./components/main/resetPassword";
import Signup from "./components/main/signup";
import User from "./components/user/index";
import UserProfile from "./components/user/profile"
import AddFlorist from "./components/admin/addFlorist";
import ManageFlorist from "./components/admin/manageFlorist";
import ManageFlower from "./components/admin/manageFlower";


import { BrowserRouter ,Navigate, Route, Routes } from "react-router-dom";


 function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element = {<Dashboard></Dashboard>} path= "dashboard"/>
                <Route element = {<ManageUser></ManageUser>} path= "manageuser"/>
                <Route element = {<Admin></Admin>} path= "admin"/>
                <Route element = {<AdminProfile></AdminProfile>} path= "adminprofile"/>
                <Route element = {<Footer></Footer>} path= "footer"/>
                <Route element = {<Header></Header>} path= "Header"/>
                <Route element = {<Home></Home>} path= "home"/>
                <Route element = {<Main></Main>} path= "main"/>
                <Route element = {<Login></Login>} path= "login"/>
                <Route element = {<NotFound></NotFound>} path= "404"/>
                <Route element = {<ResetPassword></ResetPassword>} path= "resetpassword"/>
                <Route element = {<Signup></Signup>} path= "signup"/>
                <Route element = {<User></User>} path= "user"/>
                <Route element = {<AddFlorist></AddFlorist>} path= "addflorist"/>
                <Route element = {<UserProfile></UserProfile>} path= "userprofile"/>
                <Route element = {<ManageFlorist></ManageFlorist>} path= "managerflorist"/>
                <Route element = {<ManageFlower></ManageFlower>} path= "manageflower"/>
                
                
                
                <Route element = {<Navigate to = "/home"/>} path=""/>
                <Route element = {<Navigate to = "/404"/>} path="*"/>
            </Routes>
        </BrowserRouter>


    </div>
);
}

export default App;