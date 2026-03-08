import Blog from "@/src/components/Blog";
import PageBanner from "@/src/components/common/PageBanner";
import DedicatedSupport from "@/src/components/DedicatedSupport";
import ExpertSkill from "@/src/components/ExpertSkill";
import MaxWidth from "@/src/components/layout/MaxWidth";
import LetsStart from "@/src/components/LetsStart";
import Pricing from "@/src/components/Pricing";
import React from "react";

function page() {
  return (
    <div>
      <PageBanner label={"Blog"} heading={"Blog"} description={""} />
      <Blog/>
      <LetsStart />
    </div>
  );
}

export default page;
