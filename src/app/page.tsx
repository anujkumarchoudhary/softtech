import React from "react";
import Banner from "../components/common/Banner";
import MaxWidth from "../components/layout/MaxWidth";
import Client from "../components/Client";
import About from "../components/About";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import BringYourIdea from "../components/BringYourIdea";
import ExpertSkill from "../components/ExpertSkill";
import TakeTheTime from "../components/TakeTheTime";
import Pricing from "../components/Pricing";
import DedicatedSupport from "../components/DedicatedSupport";
import Feedback from "../components/Feedback";
import Blog from "../components/Blog";
//test
const page = () => {
  return (
    <div>
      <Banner />
      <Client />
      <About />
      <WhoWeAre />
      <WhatWeDo />
      <BringYourIdea />
      <ExpertSkill />
      <TakeTheTime />
      <Pricing />
      <DedicatedSupport />
      <Feedback/>
      <Blog/>
    </div>
  );
};

export default page;
