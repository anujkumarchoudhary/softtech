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
      <PageBanner heading={"Pricing"} description={""} />
      <ExpertSkill />
      <Pricing />
      <DedicatedSupport />
      <LetsStart />
    </div>
  );
}

export default page;
