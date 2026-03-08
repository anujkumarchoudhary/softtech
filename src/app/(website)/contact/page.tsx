import Heading from "@/src/components/common/Heading";
import ContactForm from "@/src/components/form/ContactForm";
import MaxWidth from "@/src/components/layout/MaxWidth";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <MaxWidth className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
      <div>
        <Heading
          heading={"Get Information & Lets Get In Touch With Our Team"}
          label={"Stay Tuned With us"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <div>
          d
          <span>
            <h5>Head Office Address</h5>
            <p>Lumbung Hidup St. 42 East java Madiun Cituy 10000</p>
          </span>
        </div>
      </div>
      <ContactForm />
    </MaxWidth>
  );
};

export default Page;
