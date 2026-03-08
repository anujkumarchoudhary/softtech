import React from "react";
import Heading from "../common/Heading";
import InputField from "../ui/InputField";
import Button from "../common/Button";

const ContactForm = () => {
  return (
    <div className="bg-[#001845] p-[3rem]">
      <Heading
        textColor="#FFFFFF"
        heading="Leave a Message"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <div className="grid grid-cols-1 my-[2rem] lg:grid-cols-2 gap-[1rem]">
        <InputField label="First Name" placeholder="Enter your first name" />
        <InputField label="Last Name" placeholder="Enter your last name" />
        <InputField label="Email" placeholder="Enter your email" />
        <InputField label="Subject" placeholder="Enter your subject" />
      </div>
      <InputField label="Message" placeholder="Enter your message" />
      <Button
        name="Send Message"
        className="mt-[2rem] w-full"
        buttonWidth="full"
      />
    </div>
  );
};

export default ContactForm;
