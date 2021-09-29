import React from "react";

import { Button } from "@/atoms";
import { SectionHeader } from "@/molecules";

const SectionBody = ({ children, title, name }) => {
  return (
    <section id={name}>
      <SectionHeader name={name} title={title} />
      <main
        className="p-10"
        style={{
          minHeight: "500px",
        }}
      >
        {children}
      </main>
      <div className="flex justify-center sm:hidden">
        <Button label="Explore more" />
      </div>
    </section>
  );
};

export default SectionBody;
