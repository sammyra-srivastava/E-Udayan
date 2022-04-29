import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { AccountCircle, AccountCircleOutlined } from "@mui/icons-material";

const Admin = () => {
  const options = [
    {
      name: "Add New Florist",
      icon: <AccountCircle />,
      link: "/admin/addflorist",
    },
    {
      name: "Manage Florist",
      icon: <AccountCircleOutlined />,
      link: "/admin/managerflorist",
    },
    {
      name: "Manage Flowers",
      icon: <AccountCircleOutlined />,
      link: "/admin/manageflower",
    },
  ];

  return (
    <Sidebar title="Admin Dashboard" options={options}>
      <Outlet />
    </Sidebar>
  );
};

export default Admin;
