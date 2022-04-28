import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/main/header"

const Main = () => {
  return (
    <div style={{ height: "100vh" }}>
     <Header></Header>
     <Outlet></Outlet>
    </div>
  );
};
export default Main;
