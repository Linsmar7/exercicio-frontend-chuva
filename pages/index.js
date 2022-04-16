import React, { useState } from "react";
import Content from "../components/contentSection";
import DiscussionSection from "../components/discussionSection";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import HamburgerIcon from "../components/navbar/hamburgerIcon";
import ResumeSection from "../components/resumeSection";

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
      <div className="flex flex-col lg:ml-64 lg:mr-9 gap-y-8 lg:mx-0 mx-3.5">
        <Content />
        <ResumeSection />
        <DiscussionSection />
        <Footer />
      </div>
    </div>
  );
}
