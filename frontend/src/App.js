import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/admin/dashboard";
import Admin from "./components/admin/index";
import ManageUser from "./components/admin/manageUser";
import AdminProfile from "./components/admin/profile";
import Footer from "./components/main/footer";

import Home from "./components/main/home";
import Main from "./components/main/index";
import SignIn from "./components/main/signin";
import NotFound from "./components/main/notFound";
import ResetPassword from "./components/main/resetPassword";
import Signup from "./components/main/signup";
import User from "./components/user/index";
import UserProfile from "./components/user/profile";
import AddFlorist from "./components/admin/addFlorist";
import ManageFlorist from "./components/admin/manageFlorist";
import ManageFlower from "./components/admin/manageFlower";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Admin></Admin>} path="admin">
            <Route element={<AddFlorist></AddFlorist>} path="addflorist" />
            <Route element={<Dashboard></Dashboard>} path="dashboard" />
            <Route element={<ManageUser></ManageUser>} path="manageuser" />
            <Route element={<ManageFlorist></ManageFlorist>} path="managerflorist"/>
            <Route element={<ManageFlower></ManageFlower>} path="manageflower"/>
            <Route
              element={<AdminProfile></AdminProfile>}
              path="adminprofile"
            />
          </Route>
          <Route element={<Main></Main>} path="main">
            <Route element={<Signup></Signup>} path="signup" />
            <Route element={<SignIn></SignIn>} path="signin" />
            <Route element={<Home></Home>} path="home" />
            <Route element={<NotFound></NotFound>} path="404" />
            <Route element={<Footer></Footer>} path="footer" />
            
            <Route
              element={<ResetPassword></ResetPassword>}
              path="resetpassword"
            />
          </Route>

          <Route element={<User></User>} path="user">
            <Route element={<UserProfile></UserProfile>} path="userprofile" />
            <Route element={<Sidebar></Sidebar>} path="sidebar"/>
            
          </Route>
          

          <Route element={<Navigate to="/main/home" />} path="" />
          <Route element={<Navigate to="/main/404" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
