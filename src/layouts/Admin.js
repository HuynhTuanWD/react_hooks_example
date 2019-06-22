import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Switch } from "react-router-dom";
export default function Admin() {
  return (
    <div id="main-wrapper">
      <Header />
      <Sidebar />
      <Switch />
    </div>
  );
}
