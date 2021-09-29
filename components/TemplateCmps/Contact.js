import { InputField, Textarea } from "@/atoms";
import React from "react";

const Contact = () => {
  return (
    <div>
      <form
        spellCheck="false"
        autoComplete="off"
        className="grid  gap-10 sm:grid-cols-2 px-40"
      >
        <InputField text="First Name" />
        <InputField text="First Name" />
        <InputField text="First Name" />
        <InputField text="First Name" />
        <div className="col-span-2">
          <Textarea />
        </div>
      </form>
    </div>
  );
};

export default Contact;
