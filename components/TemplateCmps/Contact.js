import { InputField, Textarea, Button } from "@/atoms";
import React from "react";

import info from "constants/Contact-info.json";

const Contact = () => {
  return (
    <div>
      <form
        acceptCharset="UTF-8"
        spellCheck="false"
        autoComplete="off"
        className="grid gap-10 sm:grid-cols-2 px-20"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {info.map((props, index) => (
          <InputField key={index} {...props} />
        ))}
        <div className="col-span-2">
          <Textarea />
        </div>

        <div className="flex justify-center col-span-2">
          <Button label="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
