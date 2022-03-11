import React from "react";

import { Button } from "@/atoms";
import { SectionHeader } from "@/molecules";

const SectionBody = ({ children, title, name, page }) => {
  return (
    <section className="relative py-4 flex flex-col gap-10 px-4 md:px-20">
      <div id={name} className="absolute -top-24"></div>
      <SectionHeader name={name} title={title} page={page} />
      <main className="pt-4">{children}</main>
      {name != "Contact" && name != "Sponsors" ? (
        <div className="flex justify-center sm:hidden">
          <Button label="Explore more" />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SectionBody;
