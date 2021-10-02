import React, { useState } from "react";

import { InputField, Textarea, Button } from "@/atoms";

const Contact = ({ data }) => {
  const [payload, setPayload] = useState(
    Object.fromEntries(data.map(({ key }) => [key, ""]))
  );

  return (
    <div>
      <form
        acceptCharset="UTF-8"
        spellCheck="false"
        autoComplete="off"
        className="grid gap-10 sm:grid-cols-2 px-20"
        onSubmit={(e) => {
          e.preventDefault();
          // Send "payload" to endpoint here
        }}
      >
        {data.map((props, index) => (
          <InputField
            key={index}
            {...props}
            onChange={(e) => setPayload({ ...payload, [props.key]: e })}
          />
        ))}
        <div className="col-span-2">
          <Textarea onChange={(e) => setPayload({ ...payload, message: e })} />
        </div>

        <div className="flex justify-center col-span-2">
          <Button label="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
