import React, { useState } from "react";
import Content from "../components/contentSection";
import Header from "../components/header";
import Navbar from "../components/navbar";
import HamburgerIcon from "../components/navbar/hamburgerIcon";

export default function Home() {
  const [mobile, setMobile] = useState("-translate-x-full");
  function changeMobileHook() {
    if (mobile == "-translate-x-full") setMobile("translate-x-0");
    else setMobile("-translate-x-full");
  }
  return (
    <div className="">
      <Navbar open={mobile} />
      <HamburgerIcon onClick={() => changeMobileHook()} />
      <Header />
      <div className="lg:ml-64 lg:mr-9">
        <Content />
      </div>
    </div>
  );
}
