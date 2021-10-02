import React from "react";

import { Button } from "@/atoms";
import { SectionHeader } from "@/molecules";

const SectionBody = ({ children, title, name, page }) => {
  return (
    <section className="relative grid gap-20 py-20">
      <div id={name} className="absolute -top-24"></div>
      <SectionHeader name={name} title={title} page={page} />
      <main className="px-40">{children}</main>
      {page && (
        <div className="flex justify-center sm:hidden">
          <Button label="Explore more" />
        </div>
      )}
    </section>
  );
};

export default SectionBody;
